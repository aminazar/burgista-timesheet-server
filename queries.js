/**
 * Created by Amin on 13/09/2016.
 */
var promise = require('bluebird');
var bCrypt  = require('bcrypt-nodejs');
var options = {promiseLib: promise};
var pgp = require('pg-promise')(options);
var app = require('express')();
var config = require('./config.json')[app.get('env')];
var connectionString = config.pgConnection;
var db = pgp(connectionString);
var mailer = require('./pwdresetmailer');
var moment = require('moment');

function getSingleUser(id, col){
    return( new promise(function(onSuccess,onError){
    col = col||'id';
    db.one("select * from users where "+col+"=$1", id.toString().toLowerCase())
        .then( function(res){onSuccess(res)} )
        .catch( function(err){onError(err)} )
        }));
}

function validPassword(data, password){
    return( new promise(function(onSuccess, onError){
        if(!data)
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

function bCryptHashPromise(val){
    return new promise(function(resolve, reject){
        val = val || ((new Date()) * 1 + '' );
        bCrypt.genSalt(101, function(err, salt) {
            if(err)
                reject(err);
            else
                bCrypt.hash(val, salt, null,function(err, hash) {
                if(err)
                    reject(err);
                else
                    resolve(hash.replace(/[^\w\s]/gi, ''));
            });
        });

    });
}
function insertResetPassword(userid){
    var hashG='';
    return new promise(function(onSuccess, onError) {
        bCryptHashPromise()
            .then(function (hash) {
                hashG = hash;
                return db.none("delete from pwdresets where uid=$1", userid);
            })
            .then(function(){
                db.result("insert into pwdresets(uid, id) values($1, $2)", [userid, hashG])
                    .then(()=>{
                        onSuccess(hashG);
                    })
                    .catch((err)=>onError(err.message||err));
            })
            .catch(function (error) {
                onError(error.message || error)
            });
    });
}
function getResetPassword(id){
    return new promise(function(onSuccess,onError){
        db.one("select u.id as email, u.uid as userid from pwdresets p,users u where p.id=$1 and u.uid=p.uid", [id])
            .then(function(data){
                onSuccess(data);
            })
            .catch(function(error){
                console.log("Not found reset password link with id "+ id, error.message || error );
                onError(error.message || error)
            })
    })
}

function updatePassword(userid, newpass, onSuccess, onError){
    db.one("update users set secret=${pwd} where uid=${uid} returning id",{pwd:bCrypt.hashSync(newpass),uid:userid.toString().toLowerCase()})
        .then(function(data){
            console.log("updated password for uid "+ userid, data);
            onSuccess(data);
        })
        .catch(function(error){
            console.log('Failed to update password for uid ' + userid, error.message || error );
            onError(error.message || error);
    });
}
function deleteResetPassword(id){
    db.one("delete from pwdresets where id=${id} returning id",{id:id});
}


function listBranches(){
    return new promise(function(resolve,reject){
        db.any("select * from branches")
            .then(function(res){resolve(res)})
            .catch(function(err){reject(err.message)});
    })
}

function addBranch(name){
    return new promise(function(resolve,reject){
        db.one("insert into branches(name) values($1) returning bid", [name])
            .then(function(res){resolve(res.bid)})
            .catch(function(err){reject(err.message)});
    })
}

function deleteBranch(bid){
    return new promise(function(resolve,reject){
        console.log(bid);
        db.result("delete from branches where bid=${bid}", {bid:parseInt(bid)})
            .then(function(res){
                resolve(res.rowCount)})
            .catch(function(err){
                reject(err.message)});
    })
}

function listUsers(){
    return new promise(function(resolve,reject){
        db.any("select uid,id from users where lower(id)<>'admin'")
            .then(function(res){resolve(res)})
            .catch(function(err){reject(err.message)});
    })
}
function addUser(email,link){
    return new promise(function(resolve,reject){
        var uid = '';
        var id = email;
        db.one("insert into users(id) values($1) returning uid", [ email.toLowerCase() ] )
            .then(function(res){
                uid = res.uid;
                insertResetPassword(uid)
                    .then(function(hash){
                        var email = id.toLowerCase();
                        link += hash;
                        mailer(email,link)
                            .then(()=>resolve(uid))
                            .catch(function(error){
                                db.none('delete from pwdresets where uid=$1',[uid])
                                    .then(()=>{
                                        db.none('delete from users where uid=$1',[uid])
                                        .then(function(){reject('Sending email to set password failed: ' + error.message);})
                                        .catch((error2)=>reject('Sending email to set password failed: ' + error.message + '. Furthermore, could not delete from db: '+ error2.message));
                                })
                                .catch(function(error2){reject('Sending email to set password failed: ' + error.message + '. Furthermore, could not delete from db: '+ error2.message);});
                            })
                    })})
            .catch(function(err){reject(err.message)});
    })
}

function deleteUser(uid){
    return new promise(function(resolve,reject){
        console.log(uid);
        db.result("delete from pwdresets where uid=$1", [parseInt(uid)])
            .then(()=> {
                db.result("delete from users where uid=$1", [parseInt(uid)])
                .then(function (res) {
                    resolve(res.rowCount)
                })
                .catch(function (err) {
                    reject(err.message)
                });
            })
            .catch(function (err) {
            reject(err.message)
        });
    })
}
function listEmployees(){
    return new promise(function(resolve,reject){
       db.any('select * from employees order by contract_end desc,contract_date asc')
           .then(res=>resolve(res))
           .catch(err=>reject('Failed listing employees: ' + err.message));
    });
}
function addEmployee(values){
    return new promise(function(resolve,reject){
        db.one(pgp.helpers.insert(values,null,'employees') + ' returning eid')
            .then(res=>resolve(res.eid))
            .catch(err=>reject('Failed adding employee: ' + err.message));
    });
}

function deleteEmployee(eid){
    return new promise(function(resolve,reject){
        db.result("delete from employees where eid=$1",[parseInt(eid)])
            .then((res)=>resolve(res.rowCount))
            .catch(err=> {
                db.query("update employees set contract_end=current_date+1 where eid=$",[id])
                    .then(()=>resolve(1))
                    .catch(err2=>reject('Failed deleting employee: '+err.message + '\ncould not update contract end too: ' + err2.message));
            });

    });
}

function updateEmployee(eid, values){
    return new promise(function(resolve,reject){
        var newEid;
        db.one('select * from employees where eid=$1',[eid])
          .then(function(cur_data){
              if( cur_data.rate.substr(1)===values.rate ){
                //destructive update in case anything but rate is changed
                  db.query(pgp.helpers.update(values, null, 'employees') + ' where eid=' + eid)
                      .then(function(){resolve('updated employee')})
                      .catch(function(err){reject('Failed updating employee: ' + err.message)});
              }
              else{
                  //non-destructive update in case the rate changes, to keep recored of previous rate
                  db.tx(function(t){
                      return t.result("delete from employees where eid=$1", [eid])
                        .then(function(){
                            return t.query(pgp.helpers.insert(values,null,'employees') + ' returning eid');
                        })
                        .then(function(res){resolve(res[0].eid)})
                        .catch(function(err){
                            db.tx(function(t2){
                                return t2.result("update employees set contract_end=current_date where eid=$1", [eid])
                                  .then(function(){
                                      return t2.query(pgp.helpers.insert(values,null,'employees') + ' returning eid');
                                  });
                            })
                              .then(function(res){resolve(res[0].eid)})
                              .catch(function(err2){reject('Failed to update employee: '+ err2.message + ', failed earlier: ' + err.message)});
                        });
                  })
              }

            })
    });
}

function lockBranch(bid,user){
  return new promise(function(resolve,reject){
    db.any("select users.id as user, ltime from users, branch_lock where branch_lock.uid=users.uid and bid=$1 and ltime > current_timestamp - interval '18 hours'",[bid])
      .then(function(lockdata){
        if(lockdata) {
          if (lockdata.user === user.toLowerCase()) {
            resolve('already locked for you.')
          }
          else {
            reject('cannot lock for you, already locked by ' + lockdata.user + 'at ' + lockdata.ltime);
          }
        }
        else{
          db.result("insert into branch_lock(bid,uid,ltime) values($1,$2,current_timestamp)",[bid,uid])
            .then(function(){
              resolve('locked for you');
            })
            .catch(function(err){console.log(err.mssage,err);rejecect('cannot lock for you: '+ err.message)});
        }
      })
      .catch(function(err){console.log(err.message,err);reject(err.message);})
    });
}

function unlockBranch(bid,user){
  return new promise(function(resolve,reject) {
    db.result("delete from branch_lock where bid=$1 and uid=(select uid from users where id=$2)", [bid, user])
      .then(function () {
        resolve('unlocked');
      })
      .catch(function (err) {
        console.log(err.mssage, err);
        rejecect('cannot lock for you: ' + err.message)
      });
  });
}

function getWorktimes(bid,date){
  return new promise(function(resolve,reject){
    var results = {};
    db.task(function(t) {
      return t.batch([
        t.any("select e.eid, e.firstname, e.surname, w.wtid, u.id, start_time, end_time, breaktime from employees e, worktime w, users u where w.bid=$1 and w.eid=e.eid and w.uid=u.uid and w.start_time >= timestamp $2", [bid, date]),
        t.any("select e.eid, e.firstname, e.surname, null as wtid, null as id, null as start_time, null as end_time, null as breaktime from employees e where e.contract_end is null and e.eid not in (select emp.eid from employees emp, worktime wt where emp.eid=wt.eid and wt.start_time >= timestamp $1 and wt.end_time is null)", [date])
        ])
      })
        .then(function(data){
          result = data[0];
          var today = new Date();
          if(date >= today)
            result.concat(data[1]);
          resolve(result);
        })
        .catch(function(err){console.log(err.message,err);reject(err.message);});
  });
}

function startWork(bid,eid,values,user){
  return new promise(function(resolve,reject){
    db.any("select b.name,w.start_time,w.end_time from employees e, worktime w, branches b where e.eid=w.eid and w.bid=b.bid and e.eid=$1 and (w.start_time,w.end_time) overlaps ($2,$3)",[eid,values.start, moment(values.start).add(1,m)])
      .then(function(data){
        if(data.length){
          reject('Overlaps with the same employee\'s worktime at ' + data[0].name + ' branch: started at ' + data[0].start_time + data[0].end_time?' to ' + data[0].end_time : ' and still working');
        }
        else{
          db.any("select u.id,l.ltime from users u, branch_lock l where u.uid=l.uid and u.id<>$1 and l.bid=$2 and l.ltime>current_timestamp - interval '18 hours'", [user.toLowerCase(),bid])
            .then(function(lock){
              if(lock){
                reject('This branch is locked by ' + lock[0].id + ' since ' + lock[0].ltime);
              }
              else{
                db.one('insert into worktime(eid,bid,start_time) values($1,$2,$3,select uid from users where id=$4) returning wtid',[eid,bid,values.start,user])
                  .then(function(res){
                    resolve(res.wtid);
                  })
                  .catch(function(err){
                    console.log(err.message,err);
                    reject(err.message);
                  });
              }
            })
            .catch(function(err){
              console.log(err.message,err);
              reject(err.message);
            });
        }
     })
      .catch(function(err){
        console.log(err.message,err);
        reject(err.message);
      });
  });
}
function endWork(wtid,values,user){
  return new promise(function(resolve,reject) {

    db.any("select b.name,w.start_time,w.end_time from employees e, worktime w, branches b where wtid<>$1 and e.eid=w.eid and w.bid=b.bid and (w.start_time,w.end_time) overlaps ((select start_time from worktime where wtid=$1),$2)",[wtid,values.end])
      .then(function(data){
        if(data.length){
          reject('Overlaps with the same employee\'s worktime at ' + data[0].name + ' branch: started at ' + data[0].start_time + data[0].end_time?' to ' + data[0].end_time : ' and still working');
        }
        else{
          db.any("select u.id,l.ltime from users u, branch_lock l, worktime w where wtid=$1 and w.bid=l.bid and u.uid=l.uid and u.id<>$2 and l.ltime>current_timestamp - interval '18 hours'", [wtid,user.toLowerCase()])
            .then(function(lock){
              if(lock){
                reject('This branch is locked by ' + lock[0].id + ' since ' + lock[0].ltime);
              }
              else{
                db.one('select extract(hour,$1 - (select start_time from worktime where wtid=$2))',[values.end,wtid])
                  .then(function(hour){
                    var breaktime = hour[0]>6 ? 30 : 20;
                    db.one('update worktime set end_time=$1,breaktime=$2 where wtid=$3',[values.end,breaktime,wtid])
                      .then(function(){
                        resolve('successfully ended worktime');
                      })
                      .catch(function(err){
                        console.log(err.message,err);
                        reject(err.message);
                      });
                  })
                  .catch(function(err){
                    console.log(err.message,err);
                    reject(err.message);
                  });
              }
            })
            .catch(function(err){
              console.log(err.message,err);
              reject(err.message);
            });
        }
      })
    .catch(function(err){
      console.log(err.message,err);
      reject(err.message);
    });
});
}
function cancelWork(bid,wtid,user){
  return new promise(function(resolve,reject){
    db.any("select u.id,l.ltime from users u, branch_lock l, worktime w where wtid=$1 and w.bid=l.bid and u.uid=l.uid and u.id<>$2 and l.ltime>current_timestamp - interval '18 hours'", [wtid,user.toLowerCase()])
      .then(function(lock){
        if(lock){
          reject('This branch is locked by ' + lock[0].id + ' since ' + lock[0].ltime);
        }
        else{
          db.one('delete worktime where wtid=$1',[wtid])
            .then(function(){
              resolve('successfully ended worktime');
            })
            .catch(function(err){
              console.log(err.message,err);
              reject(err.message);
            });
        }
      })
      .catch(function(err){
        console.log(err.message,err);
        reject(err.message);
      });
  });
}
function report(){
  
}
module.exports = {
    getSingleUser:      getSingleUser,
    validPassword:      validPassword,
    getResetPassword:   getResetPassword,
    insertResetPassword:insertResetPassword,
    updatePassword:     updatePassword,
    deleteResetPassword:deleteResetPassword,
    listBranches:       listBranches,
    addBranch:          addBranch,
    deleteBranch:       deleteBranch,
    listUsers:          listUsers,
    addUser:            addUser,
    deleteUser:         deleteUser,
    listEmployees:      listEmployees,
    addEmployee:        addEmployee,
    deleteEmployee:     deleteEmployee,
    updateEmployee:     updateEmployee,
    lockBranch:         lockBranch,
    unlockBranch:       unlockBranch,
    getWorktimes:       getWorktimes,
    startWork:          startWork,
    endWork:            endWork,
    cancelWork:         cancelWork,
    report:             report
};