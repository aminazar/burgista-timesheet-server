/**
 * Created by Amin on 13/09/2016.
 */
var promise = require('bluebird');
var bCrypt  = require('bcrypt-nodejs');
var options = {promiseLib: promise};
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/burgistatimesheet';
var db = pgp(connectionString);

function getSingleUserHTTP(req, res, next){
    var userID = parseInt(req.params.id);
    getSingleUser(userID,'uid')
        .then(function(data){
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Retrieved user with id ' + userID
            });
        })
        .catch(
        function(err){
            return next(err);
        });
}

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
        val = val || ((new Date()) * 1 + '' ).replace(/[^\w\s]/gi, '');
        bCrypt.genSalt(101, function(err, salt) {
            if(err)
                reject(err);
            else
                bCrypt.hash(val, salt, null,function(err, hash) {
                if(err)
                    reject(err);
                else
                    resolve(hash);
            });
        });

    });
}
function insertResetPassword(userid){
    var hashG='';
    return new promise(function(onSuccess, onError) {
        bCryptHashPromise()
            .then(function (hash) {
                hashG=hash;
                db.one("insert into pwdresets(uid, id) values(${userid}, ${hash}) returning id", {
                    userid: userid.toString().toLowerCase(),
                    hash: hash
                });
            })
            .then(function (userid) {
                console.log('Password reset link is created for uid=' + userid);
                onSuccess(hashG);
            })
            .catch(function (error) {
                console.log("ERROR in creating passoword reset link for uid=" + userid, error.message || error); // print error;
                onError(error.message || error)
            });
    });
}
function getResetPassword(id, onSuccess, onError){
    db.one("select u.id as email, u.uid as userid from pwdresets p,users u where p.id=${id} and u.uid=p.uid",{id:id.toString().toLowerCase()})
        .then(function(data){
            onSuccess(data);
        })
        .catch(function(error){
            console.log("Not found reset password link with id "+ id, error.message || error );
            onError(error.message || error)
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
    db.one("delete from pwdresets where id=${id}",{id:id});
}
module.exports = {
    getSingleUserHTTP:  getSingleUserHTTP,
    getSingleUser:      getSingleUser,
    validPassword:      validPassword,
    getResetPassword:   getResetPassword,
    insertResetPassword:insertResetPassword,
    updatePassword:     updatePassword,
    deleteResetPassword:deleteResetPassword
};