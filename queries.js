/**
 * Created by Amin on 13/09/2016.
 */
var promise = require('bluebird');
var bCrypt  = require('bcrypt-nodejs');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/burgistatimesheet';
var db = pgp(connectionString);

function getSingleUserHTTP(req, res, next){
    var userID = parseInt(req.params.id);
    getSingleUser(userID,
        function(data){
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Retrieved user with id ' + userID
            });
        },
        function(err){
            return next(err);
    }, 'uid');
}

function getSingleUser(id, onSuccess, onError, col){
    col = col||'id';
    db.one("select * from users where "+col+"=$1", id)
        .then(function (data) {
            data.validPassword = function(password){

                return bCrypt.compareSync(password,data.secret);
            };
            onSuccess(data);

        })
        .catch(function (err) {
            return onError(err);
        });
}
function insertResetPassword(userid, onSuccess, onError){
    //Creating hash
    var now = new Date();
    var hash = bCrypt.hashSync( now * 1 + '' ).replace(/[^\w\s]/gi, '');
    db.one("insert into pwdresets(uid, id) values(${userid}, ${hash}) returning id", {userid:userid, hash:hash})
        .then(function (data) {
            console.log('Password reset link is created for uid=' + userid);
            onSuccess(hash);
        })
        .catch(function (error) {
            console.log("ERROR in creating passoword reset link for uid=" + userid, error.message || error); // print error;
            onError(error.message || error)
        });
}
function getResetPassword(id, onSuccess, onError){
    db.one("select u.id as email, u.uid as userid from pwdresets p,users u where p.id=${id} and u.uid=p.uid",{id:id})
        .then(function(data){
            onSuccess(data);
        })
        .catch(function(error){
            console.log("Not found reset password link with id "+ id, error.message || error );
            onError(error.message || error)
        })

}
function updatePassword(userid, newpass, onSuccess, onError){
    db.one("update users set secret=${pwd} where uid=${uid} returning id",{pwd:bCrypt.hashSync(newpass),uid:userid})
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
    db.one("delete from pwdresets where id=${id}",{id:id});
}
module.exports = {
    getSingleUserHTTP:  getSingleUserHTTP,
    getSingleUser:      getSingleUser,
    getResetPassword:   getResetPassword,
    insertResetPassword:insertResetPassword,
    updatePassword:     updatePassword,
    deleteResetPassword:deleteResetPassword
};