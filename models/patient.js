// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const patientSchema = new Schema({  
//   name: { type: String, required: true },
//   age: { type: String, required: true },
//   gender: { type: String, required: true },
//   date: { type: Date, default: Date.now }
// });

// const Patient = mongoose.model("Patient", patientSchema);

// module.exports = Patient;

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

  bill: { type: Number, required: true },

  nextappt: Date,

  email: String,

  phone: Number

});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
