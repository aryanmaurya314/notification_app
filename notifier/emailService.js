/** 
 * This file  will have the logic to send the emails
 */
const nodemailer = require("nodemailer");

/**
 * I need to setup the nodemailer for send the emails
 * SMTP host details -- credentials if needed
 */

module.exports = nodemailer.createTransport({
    port : 465,
    host : "smtp.gmail.com",
    auth : {
        user : 'aryanstpl77@gmail.com',
        pass : 'Aryan@704'
    },
    secure : true
})










/**
 * transporter will be used to send the emails
 */
/*
const mailDataObj = {
    from : 'bilgates@microsoft.com',
    to : 'amazonaryan77@gmail.com',
    subject : "Very Important Message!!",
    text : "There's nothing important more than time in life !! "
}
transporter.sendMail(mailDataObj, (err, info)=>{
    if(err){
        console.log(err);
    }else{
        console.log(info);
    }
})
*/