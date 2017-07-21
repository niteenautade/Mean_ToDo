var twilio = require('twilio');
var twilioAuth = require('./twilioConfig.json');

var client = new twilio(twilioAuth.accountSid, twilioAuth.authToken);

module.exports.sendSmsSignupSuccess = function(contactNo){
    console.log('In sendSMS() ==>>');
    client.messages.create({
        body: 'Congrats! You have successfully signed up with MeanToDo',
        to: contactNo,  // Text this number
        from: twilioAuth.from // From a valid Twilio number
    }, function(err, message) { 
        //console.log("Message.sid =>",message.sid); 
        if(message)console.log("Sign up SMS Successfully Sent");
        else console.log("Error in sms =>",err)
    });
}