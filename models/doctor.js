const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({  
  name: { type: String, required: true },
  username: { type: String, required: true },
  passwerd: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;

