const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Doc-Docs"
);

const ptSeed = [
  {
    name: "Blake Endicott",
    age: 21,
    gender: "Male",
    height: 69,
    weight: 180,
    heartrate: 69,
    bloodpressure: 120/80,

    medications: [
      "Zolpidem",
      "THC",
      "Lisinopril"
    ],

    conditions: [
      "Insomnia",
      "Hypertension"
    ],

    allergies: [
      "Shellfish"
    ],

    surgeries: [
      "Brain Surgery"
    ],

    physician: "Dr. Charles Xavier",

    mdid: 1,

    bill: 4000,

    nextappt: 01/01/2020,

    email: "mbe083@gmail.com",

    phone: 8473129335
  },
  {
    name: "Dylan Dusenberrry",
    age: 27,
    gender: "Female",
    height: 67,
    weight: 170,
    heartrate: 47,
    bloodpressure: 120/80,

    medications: [
      "Vyvanse",
      "Norco",
      "Humira"
    ],

    conditions: [
      "Rheumatoid Arthritis",
      "ADHD"
    ],

    allergies: [
      "Bee Stings"
    ],

    surgeries: [
      "Ankle Surgery"
    ],

    physician: "Dr. Charles Xavier",

    mdid: 1,

    bill: 13000,

    nextappt: 01/02/2020,

    email: "dyland@gmail.com",

    phone: 6304561222
  },
  {
    name: "Eddie Chavez",
    age: 33,
    gender: "Male",
    height: 67,
    weight: 225,
    heartrate: 72,
    bloodpressure: 134/82,

    medications: [
      "Xanax",
      "Lyrica",
      "Xyzal"
    ],

    conditions: [
      "PTSD",
      "Seasonal Allergies"
    ],

    allergies: [
      "Avocado"
    ],

    surgeries: [
      "Kidney Transplant"
    ],

    physician: "Dr. Charles Xavier",

    mdid: 1,

    bill: 3000,

    nextappt: 01/03/2020,

    email: "echavez85@gmail.com",

    phone: 8152120674
  },
  {
    name: "Andrew Moriarty",
    age: 25,
    gender: "Male",
    height: 71,
    weight: 315,
    heartrate: 90,
    bloodpressure: 150/90,

    medications: [
      "Atorvastatin",
      "Pantoprazole",
      "Propranolol",
      "Quinapril",
      "Fentanyl"
    ],

    conditions: [
      "Hypertension",
      "Tachycardia",
      "Hip Dysplasia",
      "High Cholesterol",
      "GERD"
    ],

    allergies: [
      "Grass",
      "Sunlight"
    ],

    surgeries: [
      "Quadruple Bypass"
    ],

    physician: "Dr. Charles Xavier",

    mdid: 1,

    bill: 50000,

    nextappt: 01/04/2020,

    email: "bigdog27@gmail.com",

    phone: 2813308004
  },
  {
    name: "Eddie Chavez",
    age: 33,
    gender: "Male",
    height: 67,
    weight: 225,
    heartrate: 72,
    bloodpressure: 134/82,

    medications: [
      "Xanax",
      "Lyrica",
      "Xyzal"
    ],

    conditions: [
      "PTSD",
      "Seasonal Allergies"
    ],

    allergies: [
      "Avocado"
    ],

    surgeries: [
      "Kidney Transplant"
    ],

    physician: "Dr. Charles Xavier",

    mdid: 1,

    bill: 3000,

    nextappt: 01/03/2020,

    email: "echavez85@gmail.com",

    phone: 8152120674
  },
  {
    name: "Nikunj Timberlake",
    age: 17,
    gender: "Male",
    height: 68,
    weight: 145,
    heartrate: 50,
    bloodpressure: 120/80,

    medications: [
      "Memantine",
      "Donepezil"
    ],

    conditions: [
      "Early Onset Alzheimers"
    ],

    allergies: [
      "N/A"
    ],

    surgeries: [
      "N/A"
    ],

    physician: "Dr. Charles Xavier",

    mdid: 1,

    bill: 1000,

    nextappt: 01/05/2020,

    email: "therealtimberlake@gmail.com",

    phone: 3478817474
  },
  {
    name: "Marky Mark",
    age: 25,
    gender: "Male",
    height: 72,
    weight: 158,
    heartrate: 80,
    bloodpressure: 130/90,

    medications: [
      "Memantine",
      "Donepezil"
    ],

    conditions: [
      "Chronic Traumatic Encephalopathy"
    ],

    allergies: [
      "Sulfa Drugs"
    ],

    surgeries: [
      "Appendectomy"
    ],

    physician: "Dr. Charles Xavier",

    mdid: 1,

    bill: 10000,

    nextappt: 01/06/2020,

    email: "pharmacyschooldropout47@gmail.com",

    phone: 3316457049
  }
];

db.Patient
  .remove({})
  .then(() => db.Patient.collection.insertMany(ptSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
