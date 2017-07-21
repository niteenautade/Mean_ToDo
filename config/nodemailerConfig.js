const nodemailer = require('nodemailer');
const nodemailerconfig = require('./nodemailerconfig.json');
/* var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: nodemailerconfig
}) */
var transporter = nodemailer.createTransport(nodemailerconfig)

var mailOptions = {
    from: 'Tester Taskman <testertaskman@gmail.com>',
    subject: 'Signup Successful',
    text: 'You have successfully signed up'
}

module.exports.mailit = function(email){
    mailOptions['to'] = email;
    transporter.sendMail(mailOptions, function (err, res) {
        if(err){
            console.log('Error',err);
        } else {
            console.log('Email Sent');
        }
    })

}

