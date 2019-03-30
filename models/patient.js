const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({ 
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  heartrate: { type: Number, required: true },
  bloodpressure: { type: Number, required: true },
  bodyweight: { type: Number, required: true },

  medications: Array,

  conditions: Array,

  allergies: Array,

  surgeries: Array,

  physician: String,

  mdid: Number,

  bill: String,

  nextappt: String,

  email: String,//{ type: String, required: true },

  phone: Number

});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
