"use strict";
require('dotenv').config();
console.log(process.env);

const nodemailer = require("nodemailer");

async function sendEmailNodeMailer() {
    // create reusable transporter object using the default SMTP transport
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
/*
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });
*/
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: document.getElementById('contact_form_email').value,
        to: process.env.MAIL_TO,
        subject: `Contacto a través de la página web de ${document.getElementById('contact_form_nombre')}`,
        text: document.getElementById('contact_form_mensaje').value,
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}