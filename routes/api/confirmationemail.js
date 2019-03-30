const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'DocDocsMailer@gmail.com',
           pass: 'Docdoc47829'
       }
   });
   const mailOptions = {
    from: '"DocDocsAdmin" <DocDocsMailer@gmail.com>', // sender address
    to: req.body.to, // list of receivers
    subject: 'Appointment Has Been Created', // Subject line
    html: `<p>${data.name}</p>
           <p>${data.email}</p>
           <p>${data.message}</p>`
  };
  app.post('/confirmationemail', function(req,res){
    $('#handleFormSubmit').on('click', function(){
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    });
  });
});