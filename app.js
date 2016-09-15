var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash    = require('connect-flash');

var routes = require('./routes/index');
var users = require('./routes/users');
var genuuid= require('node-uuid');
var db = require('./queries');

var app = express();
app.use(express.static('./public'));
//Auth
var passport = require('passport');
var LocalStrategy = require('passport-local');
var expressSession = require('express-session');

app.use(expressSession({
    genid: function(req) {
    return genuuid.v4() // use UUIDs for session IDs
    },
    secret: 'KhedMan'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    db.getSingleUser(id, function(user) {
        return done(null, user.id);
    },function(err){console.log(err);})
});
passport.use(new LocalStrategy(
    function(username, password, done) {
        db.getSingleUser( username.toLowerCase(), function(user) {
            console.log(user);
            if (!user) {
                return done(null, false, {message: 'Incorrect username.'});
            }

            if (!user.validPassword(password)) {
                return done(null, false, {message: 'Incorrect password.'});
            }
            return done(null, user.id);
        },function(err){console.log(err);})
    }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
