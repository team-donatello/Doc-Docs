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
<<<<<<< HEAD
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  heartrate: { type: Number, required: true },
  bloodpressure: { type: Number, required: true },
=======
<<<<<<< HEAD
  date: { type: Date, default: Date.now }
=======
  height: { type: String, required: true },
  weight: { type: String, required: true },
  heartrate: { type: Number, required: true },
  bloodpressure: { type: Number, required: true },
  bodyweight: { type: Number, required: true },
>>>>>>> 14000fe2e36bf5a67d24145337c892637406afe8

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

<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 14000fe2e36bf5a67d24145337c892637406afe8
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
<<<<<<< HEAD

<<<<<<< HEAD





=======
=======
>>>>>>> master
>>>>>>> 14000fe2e36bf5a67d24145337c892637406afe8
