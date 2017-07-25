const nodemailer = require('nodemailer');
const nodemailerconfig = require('./nodemailerconfig.json');
/* var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: nodemailerconfig
}) */
var transporter = nodemailer.createTransport(nodemailerconfig)

var mailOptionsSignupSuccessful = {
    from: 'Tester Taskman <testertaskman@gmail.com>',
    subject: 'Signup Successful',
    text: 'You have successfully signed up'
}

module.exports.mailSignupSuccessful = function(email){
    mailOptionsSignupSuccessful['to'] = email;
    transporter.sendMail(mailOptionsSignupSuccessful, function (err, res) {
        if(err){
            console.log('Error',err);
        } else {
            console.log('Email Sent');
        }
    })

}

var mailOptionsResetPassword = {
    from: 'Tester Taskman <testertaskman@gmail.com>',
    subject: 'Reset Password'
}

module.exports.mailResetPassword = function(email,token){
    mailOptionsResetPassword['to'] = email;
    bodyTemplate = 'To reset your password <p>Click <a href="http://localhost:4200/resetPassword/'+token+'">Here</a></p>';
    mailOptionsResetPassword['html'] = bodyTemplate;
    transporter.sendMail(mailOptionsResetPassword, function (err, res) {
        if(err){
            console.log('Error',err);
        } else {
            console.log('Email Sent');
        }
    })

}

var mailOptionsNewPassword = {
    from: 'Tester Taskman <testertaskman@gmail.com>',
    subject: 'New Password'
}

module.exports.mailNewPassword = function(email,password){
    mailOptionsNewPassword['to'] = email;
    bodyTemplate = 'Your New Password is: <b>'+password+'</b>.<p>Please change your password</p>';
    mailOptionsNewPassword['html'] = bodyTemplate;
    transporter.sendMail(mailOptionsNewPassword, function (err, res) {
        if(err){
            console.log('Error',err);
        } else {
            console.log('Email Sent');
        }
    })

}

