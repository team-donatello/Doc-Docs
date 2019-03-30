const cron = require("node-cron");
    const express = require("express");
    let nodemailer = require("nodemailer");

    app = express();

    // create mail transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "COMPANYEMAIL@gmail.com",
        pass: "userpass"
      }
    });

    // sending emails at periodic intervals
    cron.schedule("59 * * * * ", function(){
      console.log("---------------------");
      console.log("Running Cron Job");
      let mailOptions = {
        from: "DocDocsMailer@gmail.com",
        to: "sampleuser@gmail.com",
        subject: `Not a GDPR update ;)`,
        text: `Hi there, this email was automatically sent by us`
      };
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          throw error;
        } else {
          console.log("Email successfully sent!");
        }
      });
    });