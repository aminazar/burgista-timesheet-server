var express = require('express');
var router = express.Router();
var db = require('../queries');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.user)
      res.redirect('/login');
  else
      res.render('index', { title: 'Express', user: JSON.stringify(req.user) });
});

router.post('/login', function(req, res, next) {
    var email,nodemailer,link,transporter,mailOptions;
    if(req.body.forget===true){ //Send a 'reset password' link through email
        db.getSingleUser(req.body.username,
            function(data){//On success of finding a user
                //TODO: update admin email
                email = data.id==='admin'?'amir.monfared@gmail.com':data.id;
                console.log('email=',email);
                console.log('uid=',data.uid);

                db.insertResetPassword(data.uid, function(hash)
                {
                    console.log('here',hash);
                    nodemailer = require('nodemailer');
                    //TODO: update link in production
                    link = 'http://localhost:3000/reset/'+hash;
                    // create reusable transporter object using the default SMTP transport
                    transporter = nodemailer.createTransport('smtps://burgistats%40gmail.com:Am1rM0nfar3d@smtp.gmail.com');

                    // setup e-mail data with unicode symbols
                    mailOptions = {
                        from: '"Burgista Timesheet App" <no-reply@burgistats.com>', // sender address
                        to: email, // list of receivers
                        subject: 'Reset your password in Burgista timesheet app', // Subject line
                        text: 'Reset your password through this link: ' + link, // plaintext body
                        html: '<p>Reset your password through <a href="'+link+'">this link</a>.</p>' // html body
                    };

                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, function(error, info){
                        if(error){
                            return console.log(error);
                        }
                        else {
                            console.log('Message sent: ' + info.response);
                            res.render('index', {title: 'Reset password email is sent.'});
                        }
                    });
                }, function(err){res.send(500);})
            },
            function(err){//On error
                res.send(500);
            }
        );
    }
    else {//authenticate
        var auth = passport.authenticate('local', {
            failureFlash: true
        });
        return auth(req, res, next);
  }
});
router.get('/reset/:id', function(req,res, next){
    db.getResetPassword(req.params.id,
    function(data){
        res.render('resetpwd',{title: 'Reset password for ' + data.email, error:''});
    },
    function(err){console.log("Error in fetching reset id: "+ req.params.id, err);res.send(404);}
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
//checks to be sure users are authenticated
router.all("*", function(req, res, next){
    if (!req.user)
        res.send(403);
    else
        next();
});
router.get('/logout',function(req, res){
  req.logout();
  res.redirect('/');
});
/* RESTful API */
router.get('/api/users/:id', db.getSingleUserHTTP);

module.exports = router;
