const db = require("./models");
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');
const cron = require("node-cron");

module.exports = function (app) {
  app.post('/reminderemail', function (req, res) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "DocDocsMailer@gmail.com",
        pass: "Docdoc47829"
      }
    });

    // sending emails at periodic intervals
    cron.schedule("* 59 23 * * ", function () {
      var dt = new Date();
      dt.setDate(dt.getDate() + 1);
      console.log("dt", dt);
      db.Patient
        .find()
        .sort({ date: -1 })
        .then(dbModel => console.log(dbModel))
        .catch(err => console.log(err));

      console.log("Running Cron Job");

      let mailOptions = {
        from: '"DocDocsAdmin" <DocDocsMailer@gmail.com>', // sender address
        to: req.body.to, // list of receivers
        subject: 'Appointment Reminder', // Subject line
        html: `<p>${data.name}</p>
               <p>${data.email}</p>
               <p>${data.message}</p>`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          throw error;
        } else {
          console.log("Email successfully sent!");
        }
      });

      formSubmit = (e) => {
        e.preventDefault()
      
        this.setState({
            buttonText: '...sending'
        })
      
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        axios.post('API_URI', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
          console.log('Message not sent')
        })
      };
      resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            //buttonText: 'Message Sent'
        })
      };
    });
  });
};
