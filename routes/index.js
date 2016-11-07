var express = require('express');
var router = express.Router();
var path = require('path')
var passport = require('passport');
var db = require('../queries');
var mailer = require('../pwdresetmailer');


router.post('/login', function(req, res, next) {
    if(req.body.forget){ //Send a 'reset password' link through email
        var userdata = {};
        db.getSingleUser(req.body.username)
            .then(function(data) {
                userdata = data;
                return ( db.insertResetPassword(data.uid))
            })
            .then(function(hash){
                //TODO: update admin email
                var email = userdata.id.toLowerCase() === 'admin' ? ((express().get('env')==='development') ? 'sma.azar@gmail.com' : 'amir.monfared@gmail.com' ):userdata.id;
                var link =  req.protocol + '://' + req.get('host') + '/reset/' + hash;
                return mailer(email,link)
            })
            .then(function(msg){
                console.log('Message sent: ' + msg);
                res.sendStatus(201);
            })
            .catch(
            function(err){//On error
                console.log(err);
                if(err.code===0)
                    res.sendStatus(404)
                else
                    res.sendStatus(500);
            });
    }
    else {//authenticate
        auth = passport.authenticate('local', {});
        return auth(req, res, next);
    }
}, function(req, res) {
    res.sendStatus(200);
});

router.get('/reset/:id', function(req,res, next){
    db.getResetPassword(req.params.id)
        .then(function(data){
            res.render('resetpwd',{title: 'Reset password for ' + data.email, error:''});
        })
        .catch(function(err){
            console.log("Error in fetching reset id: "+ req.params.id, err);
            res.sendStatus(404);
        }
    );
});

router.post('/reset/:id', function(req, res, next){
    console.log(req.params,req.body)
    db.getResetPassword(req.params.id)
        .then(function(data){
            if(req.body.password===req.body.repeat) {
                db.updatePassword(data.userid, req.body.password, function(){
                    db.deleteResetPassword(req.params.id);
                    console.log(data)
                    res.render('index', {title: "Password has been successfully changed for '" + data.email + "'."});
                },
                function(err){res.send(500);});
            }
            else{
                res.render('resetpwd',{title: 'Reset password for ' + data.email, error:'Password and its repeat do not match.'});
            }
        })
        .catch(function(err){console.log("Error in fetching reset id: "+ req.params.id, err);res.send(500);});
});


router.get('/session', function(req, res, next){
    if(!req.user)
        res.json({});
    else
        res.json({user:req.user});
});

router.get('/logout',function(req, res){
  db.unlockBranches(req.user)
    .then(function(){
      req.logout();
      res.sendStatus(200);
    })
  .catch(function(err){
      res.status(500).send(err.message);
  })
});

//checks to be sure users are authenticated
router.all("/api/*", function(req, res, next){
    if (!req.user )
        res.sendStatus(403);
    else
        next();
});


/* RESTful API */
function apiResponse(dbPromise, adminOnly, reqFuncs){
    var args = Array.prototype.slice.call(arguments, 3);
    return(function(req, res, next) {
        var user = req.user ? req.user.toLowerCase() : req.user;
        if(adminOnly && user !== 'admin') {
            res.status(403)
                .send('Only admin can do this.');
        }
        else {
            var dynamicArgs = [];
            for (var i in reqFuncs)
                dynamicArgs.push(reqFuncs[i](req))

            args = dynamicArgs.concat(args);

            dbPromise.apply(null, args)
                .then(function (data) {
                    res.status(200)
                        .json(data);
                })
                .catch(
                    function (err) {
                        console.log(dbPromise.name + ':', err);
                        res.status(500)
                            .send(err.message || err);
                    });
        }
    });
}
/* Branches */
router.get('/api/branches', apiResponse(db.listBranches));
router.put('/api/branch', apiResponse(db.addBranch, true, [(req)=>req.body.name]));
router.post('/api/branch/:id',apiResponse(db.updateBranch, true,[req=>req.params.id, req=>req.body.name]));
router.delete('/api/branch/:id', apiResponse(db.deleteBranch, true, [(req)=>parseInt(req.params.id)]));
/* Users */
router.get('/api/user/:id', apiResponse(db.getSingleUser,[function(req){return parseInt(req.params.id);}],'uid'));
router.get('/api/users', apiResponse(db.listUsers));
router.delete('/api/user/:id', apiResponse(db.deleteUser, true, [function(req){return parseInt(req.params.id);}]));
router.put('/api/reset/:uid',apiResponse(db.mailResetPassword,true,[req=>req.params.uid,req=>req.body,(req)=>req.protocol + '://' + req.get('host') + '/reset/']));
router.post('/api/user/:id', apiResponse(db.updateUser,true,[req=>req.params.id, req=>req.body,(req)=>req.protocol + '://' + req.get('host') + '/reset/']))
/* Employee */
router.get('/api/employees', apiResponse(db.listEmployees));
router.put('/api/employee', apiResponse(db.addEmployee, true,[(req)=>req.body]));
router.put('/api/manager', apiResponse(db.addManager, true, [req=>req.body,(req)=>req.protocol + '://' + req.get('host') + '/reset/']));
router.delete('/api/employee/:id', apiResponse(db.deleteEmployee, true, [req=>req.params.id]));
router.post('/api/employee/:id', apiResponse(db.updateEmployee, true, [req=>req.params.id, req=>req.body]));
/* Lock branch for user */
router.get('/api/lock/:bid', apiResponse(db.lockBranch,false,[req=>req.params.bid,req=>req.user]));
router.delete('/api/lock/', apiResponse(db.unlockBranch,false,[req=>req.user]));
router.get('/api/islocked/:bid', apiResponse(db.isLocked,false,[req=>req.params.bid, req=>req.user]))
/* Worktime */
router.get('/api/t/:bid/:date', apiResponse(db.getWorktimes, false, [req=>req.params.bid,req=>req.params.date]));
router.put('/api/t/:bid/:eid', apiResponse(db.addWork, false, [req=>req.params.bid,req=>req.params.eid,req=>req.body,req=>req.user]));
router.post('/api/t/:wtid', apiResponse(db.updateWork, false, [req=>req.params.wtid,req=>req.body,req=>req.user]));
router.delete('/api/t/:wtid', apiResponse(db.cancelWork, false, [req=>req.params.wtid,req=>req.user]));
/* Report */
router.get('/api/report/:bid/:eid', apiResponse(db.report,false,[req=>req.params.bid, req=>req.params.eid,req=>req.query]));
/* Diverting unknown routes to Angular router */
router.all("*",function(req,res){
    console.log('[TRACE] Server 404 request: '+req.originalUrl);
    var p = path.join(__dirname, 'public', 'index.html').replace(/\/routes\//,'/');
    res.status(200).sendFile(p);
});

module.exports = router;
