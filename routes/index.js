var express = require('express');
var router = express.Router();
var path = require('path')
var passport = require('passport');
var db = require('../queries');
var mailer = require('../pwdresetmailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.user)
      res.redirect('/login');
  else
      res.render('index', { title: 'Express', user: JSON.stringify(req.user) });
});

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
                var email = userdata.id.toLowerCase() === 'admin' ? 'amir.monfared@gmail.com' : userdata.id;
                return mailer(email,hash)
            })
            .then(function(msg){
                console.log('Message sent: ' + msg);
                res.render('index', {title: 'Reset password email is sent.'});
            })
            .catch(
            function(err){//On error
                console.log(err);
                res.send(500);
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
    db.getResetPassword(req.params.id,
    function(data){
        res.render('resetpwd',{title: 'Reset password for ' + data.email, error:''});
    },
    function(err){console.log("Error in fetching reset id: "+ req.params.id, err);res.sendStatus(404);}
    );
});

router.post('/reset/:id', function(req, res, next){
    console.log(req.params,req.body)
    db.getResetPassword(req.params.id,
        function(data){
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
        },
        function(err){console.log("Error in fetching reset id: "+ req.params.id, err);res.send(500);}
    );
});


router.get('/session', function(req, res, next){
    if(!req.user)
        res.json({});
    else
        res.json({user:req.user});
});

router.get('/logout',function(req, res){
  req.logout();
  res.sendStatus(200);
});

/*
//checks to be sure users are authenticated
router.all("/api/!*", function(req, res, next){
    if (!req.user)
        res.sendStatus(403);
    else
        next();
});
*/

/* RESTful API */
function apiResponse(dbPromise, reqFuncs){
    var args = Array.prototype.slice.call(arguments, 2);
    return(function(req, res, next)
    {
        for(var i in reqFuncs)
            args.splice(0, 0, reqFuncs[ i ](req))

        dbPromise.apply(null,args)
            .then(function (data) {
                res.status(200)
                    .json(data);
            })
            .catch(
                function (err) {
                    console.log(db.Promise, err);
                    res.status(500).json({error:err});
                });
    });
}
/* Branches */
router.get('/api/branches', apiResponse(db.listBranches));
router.put('/api/branch', apiResponse(db.addBranch,[(req)=>req.body.name]));
router.delete('/api/branch/:id', apiResponse(db.deleteBranch,[(req)=>parseInt(req.params.id)]));
/* Employees */
router.get('/api/user/:id', apiResponse(db.getSingleUser,[function(req){return parseInt(req.params.id);}],'uid'));
router.get('/api/users', apiResponse(db.getEmployees));
router.put('/api/user', apiResponse(db.addEmployee))
router.all("*",function(req,res){
    console.log('[TRACE] Server 404 request: '+req.originalUrl);
    var p = path.join(__dirname, 'public', 'index.html').replace(/\/routes\//,'/');
    res.status(200).sendFile(p);
});

module.exports = router;
