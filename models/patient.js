const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({  
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  heartrate: { type: Number, required: true },
  bloodpressure: { type: Number, required: true },

  medications: Array,

  conditions: Array,

  allergies: Array,

  surgeries: Array,

  physician: String,

  mdid: Number,

  bill: { type: Number, required: true },

  nextappt: Date,

  email: String,

  phone: Number

});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
