/**
 * Created by Amin on 13/09/2016.
 */
var promise = require('bluebird');
var bCrypt = require('bcrypt-nodejs');
var options = {promiseLib: promise};
var pgp = require('pg-promise')(options);
var app = require('express')();
var config = require('./config.json')[app.get('env')];
var connectionString = process.env['DATABASE_URL']; // config.pgConnection;
pgp.pg.defaults.ssl = {
  rejectUnauthorized: false
}
var db = pgp(connectionString);
var moment = require('moment');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(`smtps://${config.emailAddress}:${config.emailPwd}@${config.emailDomain}`);

function getSingleUser(id, col) {
  return ( new promise(function (onSuccess, onError) {
    col = col || 'id';
    db.one("select * from users where " + col + "=$1", id.toString().toLowerCase())
      .then(function (res) {
        onSuccess(res)
      })
      .catch(function (err) {
        onError(err)
      })
  }));
}

function validPassword(data, password) {
  return ( new promise(function (onSuccess, onError) {
    if (!data)
      onError('Username is incorrect')
    else {
      bCrypt.compare(password, data.secret, function (err, res) {
        if (err)
          onError(err);
        else if (res)
          onSuccess(data)
        else
          onError('Password is incorrect')
      });
    }
  }))
}

function bCryptHashPromise(val, replaceWS, allowEmptyVal) {
  replaceWS = replaceWS !== undefined ? replaceWS : true;
  allowEmptyVal = (allowEmptyVal === undefined) ? true : false;
  return new promise(function (resolve, reject) {
    if (allowEmptyVal)
      val = val || ((new Date()) * 1 + '' );
    else if (val === '')
      resolve('');

    bCrypt.genSalt(101, function (err, salt) {
      if (err)
        reject(err);
      else
        bCrypt.hash(val, salt, null, function (err, hash) {
          if (err)
            reject(err);
          else
            resolve(replaceWS ? hash.replace(/[^\w\s]/gi, '') : hash);
        });
    });

  });
}
function insertResetPassword(userid) {
  var hashG = '';
  return new promise(function (onSuccess, onError) {
    bCryptHashPromise()
      .then(function (hash) {
        hashG = hash;
        return db.none("delete from pwdresets where uid=$1", userid);
      })
      .then(function () {
        db.result("insert into pwdresets(uid, id) values($1, $2)", [userid, hashG])
          .then(function () {
            onSuccess(hashG);
          })
          .catch(function (err) {
            onError(err.message || err)
          });
      })
      .catch(function (error) {
        onError(error.message || error)
      });
  });
}
function getResetPassword(id) {
  return new promise(function (onSuccess, onError) {
    db.one("select u.id as email, u.uid as userid from pwdresets p,users u where p.id=$1 and u.uid=p.uid", [id])
      .then(function (data) {
        onSuccess(data);
      })
      .catch(function (error) {
        console.log("Not found reset password link with id " + id, error.message || error);
        onError(error.message || error)
      })
  })
}

function updatePassword(userid, newpass, onSuccess, onError) {
  db.one("update users set secret=${pwd} where uid=${uid} returning id", {
    pwd: bCrypt.hashSync(newpass),
    uid: userid.toString().toLowerCase()
  })
    .then(function (data) {
      console.log("updated password for uid " + userid, data);
      onSuccess(data);
    })
    .catch(function (error) {
      console.log('Failed to update password for uid ' + userid, error.message || error);
      onError(error.message || error);
    });
}
function deleteResetPassword(id) {
  db.one("delete from pwdresets where id=${id} returning id", {id: id});
}


function listBranches() {
  return new promise(function (resolve, reject) {
    db.any("select bid,name,true as active,false as pending from branches")
      .then(function (res) {
        resolve(res)
      })
      .catch(function (err) {
        reject(err.message)
      });
  })
}

function addBranch(name) {
  return new promise(function (resolve, reject) {
    db.one("insert into branches(name) values($1) returning bid", [name])
      .then(function (res) {
        resolve(res.bid)
      })
      .catch(function (err) {
        reject(err.message)
      });
  })
}

function updateBranch(id, name) {
  return new promise(function (resolve, reject) {
    db.query("update branches set name=$1 where bid=$2", [name, id])
      .then(function () {
        resolve()
      })
      .catch(function (err) {
        console.log(err.message, err);
        reject(err.message);
      })
  })
}

function deleteBranch(bid) {
  return new promise(function (resolve, reject) {
    console.log(bid);
    db.result("delete from branches where bid=${bid}", {bid: parseInt(bid)})
      .then(function (res) {
        resolve(res.rowCount)
      })
      .catch(function (err) {
        reject(err.message)
      });
  })
}

function listUsers() {
  return new promise(function (resolve, reject) {
    db.any("select users.uid,users.id,cast(length(secret) as boolean) as active,employees.firstname,employees.surname,count(pwdresets.id) as pending from users left outer join employees on users.uid=employees.uid left outer join pwdresets on users.uid=pwdresets.uid where lower(users.id)<>'admin' group by users.uid,employees.eid")
      .then(function (res) {
        resolve(res)
      })
      .catch(function (err) {
        reject(err.message)
      });
  })
}
function addUser(email, hash, link) {
  return new promise(function (resolve, reject) {
    var uid = '';
    hash = (hash === undefined) ? '' : hash;
    if(hash==='' && email.indexOf('@')===-1){
      reject('Password is empty. Enter user\'s email address as username if you want he chooses his own password.')
    }
    else {
      var values = {id: email.toLowerCase(), secret: hash};

      db.one(pgp.helpers.insert(values, null, 'users') + ' returning uid')
        .then(function (res) {
          if (email.indexOf('@') === -1) {
            resolve(res.uid);
          }
          else {
            mailResetPassword(res.uid, {email: email,user: email},link).then(resolve).catch(reject);
          }
        })
        .catch(function (err) {
          reject('could not insert ' + email + ' in users: ' + err.message)
        });
    }
  });
}

function mailResetPassword(uid, values, link) {
  return new promise(function (resolve, reject) {
    insertResetPassword(uid)
      .then(function (hash) {
        var email = values.email.toLowerCase();
        var user  = values.user.toLowerCase();
        link += hash;
        if(email.indexOf('@')===-1)
          resolve(link);
        else {
          pwdMailer(email, link, user)
            .then(function () {
              resolve(uid)
            })
            .catch(function (error) {
              db.none('delete from pwdresets where uid=$1', [uid])
                .then(function () {
                  db.none('delete from users where uid=$1', [uid])
                    .then(function () {
                      reject('Sending email to set password failed: ' + error.message);
                    })
                    .catch(function (error2) {
                      reject('Sending email to set password failed: ' + error.message + '. Furthermore, could not delete from db: ' + error2.message)
                    });
                })
                .catch(function (error2) {
                  reject('Sending email to set password failed: ' + error.message + '. Furthermore, could not delete from db: ' + error2.message);
                });
            })
        }
      })
      .catch(function (err) {
        reject(err.message || err)
      });
  });
}
function updateUser(uid,values,link){
  return new promise(function (resolve, reject) {
    db.query("update users set secret='', id=$1 where uid=$2",[values.id,uid])
      .then(function(){
        mailResetPassword(uid,{email:values.id,user:values.firstname + ' ' + values.surname},link).then(resolve).catch(reject);
      })
      .catch(function(err){reject(err)});
  });
}
function deleteUser(uid) {
  return new promise(function (resolve, reject) {
    db.result("delete from pwdresets where uid=$1", [parseInt(uid)])
      .then(function () {
        db.result("delete from users where uid=$1", [parseInt(uid)])
          .then(function (res) {
            resolve(res.rowCount)
          })
          .catch(function (err) {
            db.result("update users set secret='' where uid=$1", [uid])
              .then(function (res) {
                resolve(-1)
              })
              .catch(function (err2) {
                reject('failed to delete user: ' + err.message + '\nFurthermore, failed to deactivate the password:' + err2.message)
              });
          });
      })
      .catch(function (err) {
        reject(err.message)
      });
  })
}
function listEmployees() {
  return new promise(function (resolve, reject) {
    db.any('select eid,firstname,surname,email,rate,role,contract_date,contract_end,id as username from employees left outer join users on users.uid=employees.uid order by contract_end desc,firstname asc,surname asc')
      .then(function (res) {
        resolve(res)
      })
      .catch(function (err) {
        reject('Failed listing employees: ' + err.message)
      });
  });
}
function addManagerEmployee(values,link) {
  return new promise(function (resolve, reject) {
    bCryptHashPromise(values.password, false, false)
      .then(function (hash) {
        addUser(values.username, hash,link)
          .then(function (uid) {
            values.uid = uid;
            delete values.username;
            delete values.password;
            addEmployee(values).then(resolve).catch(function(err){
              deleteUser(uid).then(function(){reject(err)});
            });
          })
          .catch(function (err) {
            reject('Failed adding user: ' + (err || err.message))
          });
      })
      .catch(function (err) {
        reject('Failed bcrypt: ' + (err || err.message))
      });
  })
}

function addEmployee(values) {
  return new promise(function (resolve, reject) {
    var lvalues = {}; //lvaluse conains lowercase values of name, in order to check if an employee with a same name has contract overlap
    for (k in values) {
      lvalues[k] = (k.indexOf('name') >= 0) ? values[k].toLowerCase() : values[k];
    }
    lvalues.eid = lvalues.eid ? lvalues.eid : 0;
    lvalues.uid = lvalues.uid ? lvalues.uid : null;
    db.any("select * from employees where eid<>${eid} and lower(firstname)=${firstname} and lower(surname)=${surname} and (contract_date,contract_end) overlaps (${contract_date},${contract_end})", lvalues)
      .then(function (data) {
        if (data.length) {
          reject('Overlaps with employee with the same name with eid: ' + data[0].eid + ', contract starting: ' + moment(data[0].contract_date).format('DD MMM YY') + (moment(data[0].contract_end).isValid() ? ', ending: ' + moment(data[0].contract_end).format('DD MMM YY') : ' and still in contract'));
        }
        else {
          db.one(pgp.helpers.insert(values, null, 'employees') + ' returning eid')
            .then(function (res) {
              resolve(res.eid)
            })
            .catch(function (err) {
              reject('Failed adding employee: ' + err.message)
            });
        }
      })
      .catch(function (err) {
        reject('Failed adding employee: ' + err.message)
      });
  });
}

function deleteEmployee(eid) {
  return new promise(function (resolve, reject) {
    db.any("select uid from employees where eid=$1", [eid])
      .then(function (data) {
        var uid;
        if (data.length) {
          uid = data[0].uid;
        }
        db.result("delete from employees where eid=$1", [eid])
          .then(function (res) {
            var c = res.rowCount;
            if (uid)
              db.query("delete from users where uid=$1", [uid]).then(function () {
                resolve(c)
              }).catch(function () {
                resolve(c)
              });
            else
              resolve(c);
          })
          .catch(function (err) {
            db.query("update employees set contract_end=least((select contract_end from employees where eid=$1),current_date) where eid=$1", [eid])
              .then(function () {
                resolve(-1)
              })
              .catch(function (err2) {
                reject('Failed deleting employee: ' + err.message + '\ncould not update contract end too: ' + err2.message)
              });
          });
      })
      .catch(function (err) {
        reject(err)
      });
  });
}

function updateEmployee(eid, values) {
  delete values.username;//it is needed for adding 'manager' employees but it is not needed in updates
  return new promise(function (resolve, reject) {
    var lvalues = {};//lvaluse conains lowercase values of name, in order to check if an employee with a same name has contract overlap
    for (k in values) {
      lvalues[k] = (k.indexOf('name') >= 0) ? values[k].toLowerCase() : lvalues[k] = values[k];
    }
    lvalues.eid = eid ? eid : 0;

    db.any("select * from employees where eid<>${eid} and lower(firstname)=${firstname} and lower(surname)=${surname} and (contract_date,contract_end) overlaps (${contract_date},${contract_end})", lvalues)
      .then(function (data) {
        if (data.length) {
          reject('Overlaps with employee with the same name with eid: ' + data[0].eid + ', contract starting: ' + moment(data[0].contract_date).format('DD MMM YY') + (moment(data[0].contract_end).isValid() ? ', ending: ' + moment(data[0].contract_end).format('DD MMM YY') : ' and still in contract'));
        }
        else {
          var newEid;
          db.one('select * from employees where eid=$1', [eid])
            .then(function (cur_data) {
              if (cur_data.rate.substr(1) === values.rate) {
                //destructive update in case anything but rate is changed
                db.query(pgp.helpers.update(values, null, 'employees') + ' where eid=' + eid)
                  .then(function () {
                    resolve('updated employee')
                  })
                  .catch(function (err) {
                    reject('Failed updating employee: ' + err.message)
                  });
              }
              else {
                //non-destructive update in case the rate changes, to keep recored of previous rate
                db.tx(function (t) {
                  return t.result("delete from employees where eid=$1", [eid])
                    .then(function () {
                      return t.query(pgp.helpers.insert(values, null, 'employees') + ' returning eid');
                    })
                    .then(function (res) {
                      resolve(res[0].eid)
                    })
                    .catch(function (err) {
                      db.tx(function (t2) {
                        return t2.result("update employees set contract_end=current_date-1 where eid=$1", [eid])
                          .then(function () {
                            values.contract_date = moment().format('YYYY-MM-DD');
                            return t2.query(pgp.helpers.insert(values, null, 'employees') + ' returning eid');
                          });
                      })
                        .then(function (res) {
                          resolve(res[0].eid)
                        })
                        .catch(function (err2) {
                          reject('Failed to update employee: ' + err2.message + ', failed earlier: ' + err.message)
                        });
                    });
                })
              }

            })
        }
      })
      .catch(function (err) {
        reject('Failed adding employee: ' + err.message)
      });

  });
}

function lockBranch(bid, user) {
  return new promise(function (resolve, reject) {
    db.any("select users.id as user, ltime from users, branch_lock where branch_lock.uid=users.uid and bid=$1 and ltime > current_timestamp - interval '18 hours'", [bid])
      .then(function (lockdata) {
        if (lockdata.length) {
          if (lockdata[0].user === user.toLowerCase()) {
            resolve({message: 'already locked for you.'})
          }
          else {
            reject('cannot lock for you, already locked by ' + lockdata[0].user + 'at ' + lockdata[0].ltime);
          }
        }
        else {
          db.result("insert into branch_lock(bid,uid,ltime) values($1,(select uid from users where id=$2),current_timestamp)", [bid, user.toLowerCase()])
            .then(function () {
              resolve({message: 'locked for you'});
            })
            .catch(function (err) {
              console.log(err.mssage, err);
              reject('cannot lock for you: ' + err.message)
            });
        }
      })
      .catch(function (err) {
        console.log(err.message, err);
        reject(err.message);
      })
  });
}

function unlockBranches(user) {
  return new promise(function (resolve, reject) {
    db.result("delete from branch_lock where uid=(select uid from users where id=$1)", [user])
      .then(function () {
        resolve('unlocked');
      })
      .catch(function (err) {
        console.log(err.mssage, err);
        reject('cannot lock for you: ' + err.message)
      });
  });
}

function isLocked(bid, user) {
  return new promise(function (resolve, reject) {
    db.any("select u.id, l.ltime from users u, branch_lock l, branches b where b.bid=$1 and l.bid=b.bid and u.uid=l.uid and l.ltime>current_timestamp - interval '18 hours'", [bid])
      .then(function (data) {
        if (data.length) {
          if (data[0].id === user.toLowerCase()) {
            data[0].id = 'You';
          }
          resolve(data[0]);
        }
        else
          resolve('');
      })
      .catch(function (err) {
        reject('is not locked');
      });
  })
}

function getWorktimes(bid, today) {
  return new promise(function (resolve, reject) {
    var results = {};

    db.any("select e.eid, e.firstname, e.surname, w.wtid, u.id as updated_by, start_time, end_time, breaktime,nobreak " +
      "from employees e " +
      "left outer join worktime w on w.eid=e.eid and w.bid=${bid} and w.start_time::date = ${today} " +
      "left outer join users u on w.uid=u.uid " +
      "where e.contract_date <= ${today} and e.contract_end >= ${today}", {today: today, bid: bid})
      .then(function (data) {
        resolve(data);
      })
      .catch(function (err) {
        console.log(err.message, err);
        reject(err.message);
      });
  });
}

var breakTimeFormula = function (diff, nobreak) {
  var breaktime = nobreak ? 0 : diff >= 7 ? 40 : (diff >= 3 ? 20 : 0);
  return breaktime;
};
function addWork(bid, eid, values, user) {
  return new promise(function (resolve, reject) {
    db.any("select b.name,w.start_time,w.end_time from employees e, worktime w, branches b where e.eid=w.eid and w.bid=b.bid and e.eid=$1 and (w.start_time,w.end_time) overlaps ($2,$3)", [eid, values.start, values.end])
      .then(function (data) {
        if (data.length) {
          reject('Overlaps with the same employee\'s worktime at ' + data[0].name + ' branch: started at ' + moment(data[0].start_time).format('ddd, HH:mm') + ( data[0].end_time !== 'infinity' ? ' to ' + moment(data[0].end_time).format('ddd, HH:mm') : ' and still working'));
        }
        else {
          db.any("select u.id,l.ltime from users u, branch_lock l where u.uid=l.uid and u.id<>$1 and l.bid=$2 and l.ltime>current_timestamp - interval '18 hours'", [user.toLowerCase(), bid])
            .then(function (lock) {
              if (lock.lenth) {
                reject('This branch is locked by ' + lock[0].id + ' since ' + lock[0].ltime);
              }
              else {
                var diff = moment(values.end).diff(values.start, 'hours');
                var breaktime = breakTimeFormula(diff,values.nobreak);
                db.one("insert into worktime(eid,bid,uid,start_time,end_time,breaktime,nobreak) values($1,$2,(select uid from users where id=$3),$4,$5,$6,$7) returning wtid", [eid, bid, user, values.start, values.end, breaktime,values.nobreak])
                  .then(function (res) {
                    resolve(res.wtid);
                  })
                  .catch(function (err) {
                    console.log(err.message, err);
                    reject(err.message);
                  });
              }
            })
            .catch(function (err) {
              console.log(err.message, err);
              reject(err.message);
            });
        }
      })
      .catch(function (err) {
        console.log(err.message, err);
        reject(err.message);
      });
  });
}

function updateWork(wtid, values, user) {
  return new promise(function (resolve, reject) {
    db.any("select b.name,w.start_time,w.end_time from employees e, worktime w, branches b where e.eid in (select eid from worktime where wtid=${wtid}) and w.wtid<>${wtid} and e.eid=w.eid and w.bid=b.bid and (w.start_time,w.end_time) overlaps (timestamp ${start},timestamp ${end})", {
      wtid: wtid,
      end: values.end,
      start: values.start
    })
      .then(function (data) {
        if (data.length) {
          reject('Overlaps with the same employee\'s worktime at ' + data[0].name + ' branch: started at ' + data[0].start_time + (data[0].end_time !== 'infinty' ? ' to ' + data[0].end_time : ' and still working'));
        }
        else {
          db.any("select u.id,l.ltime from users u, branch_lock l, worktime w where wtid=$1 and w.bid=l.bid and u.uid=l.uid and u.id<>$2 and l.ltime>current_timestamp - interval '18 hours'", [wtid, user.toLowerCase()])
            .then(function (lock) {
              if (lock.length) {
                reject('This branch is locked by ' + lock[0].id + ' since ' + lock[0].ltime);
              }
              else {
                var diff = moment(values.end).diff(values.start, 'hours');
                var breaktime = breakTimeFormula(diff,values.nobreak);
                db.query('update worktime set start_time = $1,end_time=$2,breaktime=$3,nobreak=$4,uid=(select uid from users where id=$5) where wtid=$6', [values.start, values.end, breaktime, values.nobreak, user, wtid])
                  .then(function () {
                    resolve('successfully ended worktime');
                  })
                  .catch(function (err) {
                    console.log(err.message, err);
                    reject(err.message);
                  });
              }
            })
            .catch(function (err) {
              console.log(err.message, err);
              reject(err.message);
            });
        }
      })
      .catch(function (err) {
        console.log(err.message, err);
        reject(err.message);
      });
  });
}

function cancelWork(wtid, user) {
  return new promise(function (resolve, reject) {
    db.any("select u.id,l.ltime from users u, branch_lock l, worktime w where wtid=$1 and w.bid=l.bid and u.uid=l.uid and u.id<>$2 and l.ltime>current_timestamp - interval '18 hours'", [wtid, user.toLowerCase()])
      .then(function (lock) {
        if (lock.length) {
          reject('This branch is locked by ' + lock[0].id + ' since ' + lock[0].ltime);
        }
        else {
          db.result('delete from worktime where wtid=$1', [wtid])
            .then(function () {
              resolve('successfully cancelled worktime');
            })
            .catch(function (err) {
              console.log(err.message, err);
              reject(err.message);
            });
        }
      })
      .catch(function (err) {
        console.log(err.message, err);
        reject(err.message);
      });
  });
}

function report(bid, eid, values) {
  values.end = moment(values.end).add(1, 'd').format('YYYY-MM-DD');
  return new promise(function (resolve, reject) {
    if (bid === 'ALL') {
      if (eid === 'ALL') {
        db.any('select e.eid,firstname,surname,email,rate,hours,mins,breaks from employees e,' +
          "(select eid,extract(minute from sum(end_time-start_time)) as mins, extract(hour from sum(end_time-start_time)) as hours, sum(breaktime) as breaks " +
          "from worktime where end_time<'infinity' and start_time >= $1 and start_time < $2 group by eid) s where e.eid=s.eid order by firstname,surname", [values.start, values.end])
          .then(function (data) {
            resolve(data)
          })
          .catch(function (err) {
            console.log(err.message, err);
            reject(err.message);
          })
      }
      else {
        db.any( "select to_char(start_time,'DD-Mon-YY') as sdate,branches.name as branch, start_time::time, end_time::time, breaktime, extract(hour from end_time-start_time) as hours, extract(minute from end_time-start_time) as mins, nobreak,rate " +
                "from worktime " +
                "join branches on worktime.bid=branches.bid " +
                "join employees on worktime.eid=employees.eid " +
                "where worktime.eid in (select e.eid from employees e join (select * from employees where eid=${eid}) s on lower(s.firstname)=lower(e.firstname) and lower(s.surname)=lower(e.surname)) " +
                "and start_time::date >= ${start} and start_time::date < ${end} order by start_time::timestamp",{eid:eid, start:values.start, end:values.end})
          .then(function(data){
            resolve(data);
          })
          .catch(function(err){
            console.log(err.message,err);
            reject(err.message);
          });
      }
    }
    else if (eid === 'ALL') {
      db.any('select e.eid,firstname,surname,email,rate,hours,mins,breaks from employees e,' +
        "(select eid,bid,sum(extract(minute from end_time-start_time)) as mins, sum(extract(hour from end_time-start_time)) as hours, sum(breaktime) as breaks " +
        "from worktime where end_time<'infinity' and start_time >= $2 and start_time < $3 group by eid,bid) s where s.bid=$1 and e.eid=s.eid order by firstname,surname", [bid, values.start, values.end])
        .then(function (data) {
          resolve(data)
        })
        .catch(function (err) {
          console.log(err.message, err);
          reject(err.message);
        })
    }
    else{
      db.any( "select to_char(start_time,'DD-Mon-YY') as sdate, start_time::time, end_time::time, breaktime, extract(hour from end_time-start_time) as hours, extract(minute from end_time-start_time) as mins, nobreak,rate " +
              "from worktime " +
              "join branches on worktime.bid=branches.bid " +
              "join employees on worktime.eid=employees.eid " +
              "where worktime.eid in (select e.eid from employees e join (select * from employees where eid=${eid}) s on lower(s.firstname)=lower(e.firstname) and lower(s.surname)=lower(e.surname)) " +
              "and worktime.bid=${bid} and start_time::date >= ${start} and start_time::date < ${end} order by start_time::timestamp",{eid:eid, bid:bid, start:values.start, end:values.end})
        .then(function(data){
          resolve(data);
        })
        .catch(function(err){
          console.log(err.message,err);
          reject(err.message);
        })
    }
  });
}
function reportMailer(email,table,fromDate,toDate,name) {
    var columns = [
      "#",
      "Date",
      "Branch",
      "Start Time",
      "End Time",
      "Rate",
      "Worked",
      "Break",
      "Paying Time",
      "Wage"
    ];
    var html=``;
    table.forEach((row,i)=>{
        if(i!==table.length - 1){
            if(!i){
              html+='<tr class="darkrow">';
              columns.forEach((colName,j)=>html+=`<th${j%2?' class="darkcol"':''}>${colName}</th>`);
              html+='</tr>'
            }
            html+=`<tr${i%2?' class="darkrow"':''}>`;
            columns.forEach((colName,j)=>{
              html+=`<td${j%2?' class="darkcol"':''}>${row[colName]}</td>`;
            });
            html+='</tr>'
        }
        else{
          html+=`<tr style="font-weight: bold;background: rgba(255,255,150,.5)">
                <td colspan="6" style="text-align:right">Sum</td>
                <td>${row.Worked}</td>
                <td class="darkcol">${row.Break}</td>
                <td>${row["Paying Time"]}</td>
                <td class="darkcol">${row.Wage}</td>
              </tr>`;
        }
    });
    // setup e-mail data with unicode symbols
    fromDate = moment(fromDate).format('D MMM YY');
    toDate   = moment(toDate).format('D MMM YY');
    var mailOptions = {
        from: config.sender, // sender address
        to: [email], // list of receivers
        cc: [config.ccEmail],
        subject: `Your Burgista Timesheet Report: ${fromDate} To ${toDate}`, // Subject line
        html: `<!doctype html><html><head><style>th{padding:0 3px;border-bottom:solid 2px black; white-space: nowrap;padding:10px;} td{white-space: nowrap;padding:10px;} .darkrow{background:rgba(128,128,128,.5)} .darkcol{background:rgba(220,220,255,.2)} p{font-size:125%} table{width:100%}</style><body><p>Dear ${name},</p><p>Here is your timesheet during period starting from ${fromDate} to ${toDate}, according to our records.</p><p>Please contact your manager if you see any discrepancy in this report.</p><br><table>${html}</table><p>Regards,<br>Burgista Management</p></body></html>`
    };

    // send mail with defined transport object
    return new promise(function (resolve, reject) {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error)
                reject(error);
            else
                resolve(info.response);
        });
    });
}
function pwdMailer(email,link,user) {
  var mailOptions = {
    from: config.sender, // sender address
    to: email, // list of receivers
    subject: 'Reset your password in Burgista timesheet app', // Subject line
    text: 'Reset your password through this link: ' + link, // plaintext body
    html: '<p>Reset '+(user===email?'your':user +"'s")+' password through <a href="' + link + '">this link</a>.</p>' // html body
  };

  return new promise(function (resolve, reject) {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error)
        reject(error);
      else
        resolve(info.response);
    });
  });
}
function emailReport(eid,table,fromDate,toDate){
    return new promise(function (resolve, reject) {
        db.one("select email,firstname, surname from employees where eid=${eid}",{eid:eid})
          .then(data=>{
            if(data.email){
              reportMailer(data.email,table,fromDate,toDate,`${data.firstname} ${data.surname}`).then(resolve).catch(reject);
            }
            else{
              reject(`No email is found for ${data.firstname} ${data.surname} - add an email address in 'Employees' page.`);
            }
          })
          .catch(err=>{
            console.log(err.message,err);
            reject(err.message);
          });
    });
}

module.exports = {
  getSingleUser: getSingleUser,
  validPassword: validPassword,
  getResetPassword: getResetPassword,
  insertResetPassword: insertResetPassword,
  updatePassword: updatePassword,
  deleteResetPassword: deleteResetPassword,
  listBranches: listBranches,
  addBranch: addBranch,
  deleteBranch: deleteBranch,
  updateBranch: updateBranch,
  listUsers: listUsers,
  updateUser: updateUser,
  addUser: addUser,
  addManager: addManagerEmployee,
  mailResetPassword: mailResetPassword,
  deleteUser: deleteUser,
  listEmployees: listEmployees,
  addEmployee: addEmployee,
  deleteEmployee: deleteEmployee,
  updateEmployee: updateEmployee,
  lockBranch: lockBranch,
  unlockBranches: unlockBranches,
  isLocked: isLocked,
  getWorktimes: getWorktimes,
  cancelWork: cancelWork,
  addWork: addWork,
  updateWork: updateWork,
  report: report,
  emailReport: emailReport
};
