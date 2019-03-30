const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({  
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  // fullname: String,
  // address: String,
  // phone: Number,
  // fax: Number,
  // gender: String,
  // age: String,
  // yearofpractice: String,  
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;

