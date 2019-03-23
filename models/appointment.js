const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({  
  date: { type: Date },
  timeStart: { type:Date},
  timeEnd: {type: Date},
  doctorID: {type: Number},
  patientID: {type: Number},
  description: {type: String}
});

const Appointments = mongoose.model("appointments", appointmentSchema);

module.exports = Appointments;
