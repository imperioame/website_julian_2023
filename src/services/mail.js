"use strict";
require('dotenv').config();
console.log(process.env);

const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
});


export function verifyConnection() {
    // verify connection configuration
    let result = null;
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
            result = success;
        }
    });
    return result;
}

export async function sendEmailNodeMailer(from, subject, text) {
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: from,
        to: process.env.MAIL_TO,
        subject: subject,
        text: text,
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}