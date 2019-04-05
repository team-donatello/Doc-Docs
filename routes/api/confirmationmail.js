const router = require("express").Router();
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'DocDocsMailer@gmail.com',
        pass: 'Docdoc47829'
    }
});


router.post('/', function (req, res) {

    const mailOptions = {
        from: 'DocDocsMailer@gmail.com', // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        html: req.body.html
        // <p>${this.state.name}</p>
        //        <p>${this.props.match.params.id}</p>
        //        <p>${this.state.email}</p>
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            // console.log(info);
            res.send('Email sent successfully');
    });
});

module.exports = router;
