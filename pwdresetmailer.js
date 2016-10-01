/**
 * Created by Amin on 27/09/2016.
 */
var promise = require('bluebird');
var nodemailer = require('nodemailer');

function mailer(email,link) {
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://burgistats%40gmail.com:Am1rM0nfar3d@smtp.gmail.com');

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Burgista Timesheet App" <no-reply@burgistats.com>', // sender address
        to: email, // list of receivers
        subject: 'Reset your password in Burgista timesheet app', // Subject line
        text: 'Reset your password through this link: ' + link, // plaintext body
        html: '<p>Reset your password through <a href="' + link + '">this link</a>.</p>' // html body
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

module.exports= mailer;