const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Doc-Docs"
);

const doctor = [
  {
    name: "Jon",
    username: "Jon123",
    password: "Jon@123",
    date: new Date(Date.now())
  },
  {
    name: "phill",
    username: "phill123",
    password: "phill@123",
    date: new Date(Date.now())
  },
  {
    name: "Bob",
    username: "Bob123",
    password: "Bob@123",
    date: new Date(Date.now())
  },
  {
    name: "Admin",
    username: "admin",
    password: "admin",
    date: new Date(Date.now())
  }
];

db.Doctor
  .remove({})
  .then(() => db.Doctor.collection.insertMany(doctor))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// const patient = [
//   {
//     name: "Bob",
//     age: "24",
//     gender: "male",
//     date: new Date(Date.now())
//   },
//   {
//     name: "Sara",
//     age: "23",
//     gender: "female",
//     date: new Date(Date.now())
//   },
//   {
//     name: "bo",
//     age: "20",
//     gender: "male",
//     date: new Date(Date.now())
//   },
//   {
//     name: "Mark",
//     age: "25",
//     gender: "male",
//     date: new Date(Date.now())
//   },
//   {
//     name: "dylan",
//     age: "23",
//     gender: "female",
//     date: new Date(Date.now())
//   },
//   {
//     name: "jo",
//     age: "20",
//     gender: "male",
//     date: new Date(Date.now())
//   }
// ];

// db.Patient
//   .remove({})
//   .then(() => db.Patient.collection.insertMany(patient))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

const scheduler = [{
  id: "1",
  text: "Bob",
  start: "2019-03-02T00:00:00",
  end: "2019-03-02T00:00:00",
  resource: "A",
  doctorname: "Bob123"
},
{
  id: 2, 
  text: "Blake Endicott",
  start: "2019-03-03T00:00:00",
  end: "2019-03-03T00:00:00",
  resource: "C",
  barColor: "#38761d",
  barBackColor: "#93c47d",
  backColor: "#cc0000",
  color: "white",
  doctorname: "Bob123"
},
{
  id: 3, 
  text: "Mark", 
  start: "2019-03-04T00:00:00", 
  end: "2019-03-04T00:00:00", 
  resource: "D", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138",
  doctorname: "Bob123"
},
{ 
  id: 3, 
  text: "Blake Endicott", 
  start: "2019-03-05T00:00:00", 
  end: "2019-03-05T00:00:00", 
  resource: "E", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#3c78d8",
  doctorname: "Bob123" 
},
{ 
  id: 4, 
  text: "Bob", 
  start: "2019-03-06T00:00:00", 
  end: "2019-03-06T00:00:00", 
  resource: "F",
  doctorname: "Bob123" 
},
{ 
  id: 5, 
  text: "Sara", 
  start: "2019-03-07T00:00:00", 
  end: "2019-03-07T00:00:00", 
  resource: "G", 
  barColor: "#38761d", 
  barBackColor: "#93c47d", 
  backColor: "#cc0000",
  doctorname: "Bob123" 
},
{ 
  id: 6, 
  text: "Mark", 
  start: "2019-03-08T00:00:00", 
  end: "2019-03-08T00:00:00", 
  resource: "H", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138",
  doctorname: "Bob123" 
},
{ 
  id: 7, 
  text: "Dylan", 
  start: "2019-03-09T00:00:00", 
  end: "2019-03-09T00:00:00", 
  resource: "I", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#6aa84f",
  doctorname: "Bob123" 
},
{
  id: "1",
  text: "Bob",
  start: "2019-03-10T00:00:00",
  end: "2019-03-10T00:00:00",
  resource: "A",
  doctorname: "Jon123"
},
{
  id: 2, text: "Sara",
  start: "2019-03-11T00:00:00",
  end: "2019-03-11T00:00:00",
  resource: "C",
  barColor: "#38761d",
  barBackColor: "#93c47d",
  backColor: "#cc0000",
  color: "white",
  doctorname: "Jon123"
},
{
  id: 3, 
  text: "Blake Endicott", 
  start: "2019-03-12T00:00:00", 
  end: "2019-03-12T00:00:00", 
  resource: "D", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138",
  doctorname: "Jon123"
},
{ 
  id: 3, 
  text: "Dylan", 
  start: "2019-03-13T00:00:00", 
  end: "2019-03-13T00:00:00", 
  resource: "E", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#3c78d8",
  doctorname: "Jon123" 
},
{ 
  id: 4, 
  text: "Bob", 
  start: "2019-03-14T00:00:00", 
  end: "2019-03-14T00:00:00", 
  resource: "F",
  doctorname: "Jon123"
},
{ 
  id: 5, 
  text: "Blake Endicott", 
  start: "2019-03-15T00:00:00", 
  end: "2019-03-15T00:00:00", 
  resource: "G", 
  barColor: "#38761d", 
  barBackColor: "#93c47d", 
  backColor: "#cc0000" 
},
{ 
  id: 6, 
  text: "Mark", 
  start: "2019-03-16T00:00:00", 
  end: "2019-03-16T00:00:00", 
  resource: "H", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138" 
},
{ 
  id: 7, 
  text: "Dylan", 
  start: "2019-03-17T00:00:00", 
  end: "2019-03-17T00:00:00", 
  resource: "I", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#6aa84f" 
},
{
  id: "1",
  text: "Bob",
  start: "2019-03-18T00:00:00",
  end: "2019-03-18T00:00:00",
  resource: "A"
},
{
  id: 2, text: "Sara",
  start: "2019-03-19T00:00:00",
  end: "2019-03-19T00:00:00",
  resource: "C",
  barColor: "#38761d",
  barBackColor: "#93c47d",
  backColor: "#cc0000",
  color: "white"
},
{
  id: 3, 
  text: "Mark", 
  start: "2019-03-20T00:00:00", 
  end: "2019-03-20T00:00:00", 
  resource: "D", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138"
},
{ 
  id: 3, 
  text: "Dylan", 
  start: "2019-03-21T00:00:00", 
  end: "2019-03-21T00:00:00", 
  resource: "E", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#3c78d8" 
},
{ 
  id: 4, 
  text: "Bob", 
  start: "2019-03-22T00:00:00", 
  end: "2019-03-22T00:00:00", 
  resource: "F" 
},
{ 
  id: 5, 
  text: "Sara", 
  start: "2019-03-23T00:00:00", 
  end: "2019-03-23T00:00:00", 
  resource: "G", 
  barColor: "#38761d", 
  barBackColor: "#93c47d", 
  backColor: "#cc0000" 
},
{ 
  id: 6, 
  text: "Mark", 
  start: "2019-03-24T00:00:00", 
  end: "2019-03-24T00:00:00", 
  resource: "H", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138" 
},
{ 
  id: 7, 
  text: "Dylan", 
  start: "2019-03-25T00:00:00", 
  end: "2019-03-25T00:00:00", 
  resource: "I", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#6aa84f" 
},
{
  id: "1",
  text: "Bob",
  start: "2019-03-26T00:00:00",
  end: "2019-03-26T00:00:00",
  resource: "A"
},
{
  id: 2, text: "Sara",
  start: "2019-03-27T00:00:00",
  end: "2019-03-27T00:00:00",
  resource: "C",
  barColor: "#38761d",
  barBackColor: "#93c47d",
  backColor: "#cc0000",
  color: "white"
},
{
  id: 3, 
  text: "Mark", 
  start: "2019-03-28T00:00:00", 
  end: "2019-03-28T00:00:00", 
  resource: "D", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138"
},
{ 
  id: 3, 
  text: "Dylan", 
  start: "2019-03-29T00:00:00", 
  end: "2019-03-29T00:00:00", 
  resource: "E", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#3c78d8" 
},
{ 
  id: 4, 
  text: "Bob", 
  start: "2019-03-30T00:00:00", 
  end: "2019-03-30T00:00:00", 
  resource: "F" 
}
];

db.Scheduler
  .remove({})
  .then(() => db.Scheduler.collection.insertMany(scheduler))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//   const mongoose = require("mongoose");
// const db = require("../models");

// This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/docdoc"
// );

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
console.log(db);
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
