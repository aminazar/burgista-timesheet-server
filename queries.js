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
       db.any('select * from employees')
           .then(res=>resolve(res))
           .catch(err=>reject('Failed listing employees: ' + err.message));
    });
}
function addEmployee(values){
    return new promise(function(resolve,reject){
        db.one('insert into employees(firstname, surname, rate, role) values(${firstname},${surname},${rate}, ${role}) returning eid',values)
            .then(res=>resolve(res.eid))
            .catch(err=>reject('Failed adding employee: ' + err.message));
    });
}

function deleteEmployee(eid){
    return new promise(function(resolve,reject){
        db.result("delete from employees where eid=$1",[parseInt(eid)])
            .then((res)=>resolve(res.rowCount))
            .catch(err=>reject('Failed deleting employee: '+ err.message));

    });
}

function updateEmployee(eid, values){
    return new promise(function(resolve,reject){
        db.query(pgp.helpers.update(values, null, 'employees') + ' where eid=' + eid)
            .then(()=>resolve('updated employee'))
            .catch(err=>reject('Failed updating employee: ' + err.message))
    });
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
    updateEmployee:     updateEmployee
};