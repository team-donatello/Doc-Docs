const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://heroku_5qwh04fh:5i8lm8mti0phg2rl5nrmpmo13t@ds155634.mlab.com:55634/heroku_5qwh04fh"
  // "mongodb://localhost/Doc-Docs"
);

const doctor = [
  {
    name: "Jon",
    username: "Jon123",
    password: "Jon@123",
    date: new Date(Date.now())
  },  
  {
    name: "Bob",
    username: "Bob123",
    password: "Bob@123",
    date: new Date(Date.now())
  },  
  {
    name: "Tom",
    username: "Tom123",
    password: "Tom@123",
    date: new Date(Date.now())
  },  
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

const scheduler = [{
  id: 1,
  text: "Dylan Dusenberrry",
  start: "2019-04-02T00:00:00",
  end: "2019-04-02T00:00:00",
  resource: "A",
  doctorname: "Bob123"
},
{
  id: 2, 
  text: "Blake Endicott",
  start: "2019-04-03T00:00:00",
  end: "2019-04-03T00:00:00",
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
  start: "2019-04-04T00:00:00", 
  end: "2019-04-04T00:00:00", 
  resource: "D", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138",
  doctorname: "Bob123"
},
{ 
  id: 4, 
  text: "William", 
  start: "2019-04-05T00:00:00", 
  end: "2019-04-05T00:00:00", 
  resource: "E", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#3c78d8",
  doctorname: "Bob123" 
},
{ 
  id: 5, 
  text: "Eddie Chavez", 
  start: "2019-04-06T00:00:00", 
  end: "2019-04-06T00:00:00", 
  resource: "F",
  doctorname: "Bob123" 
},
{ 
  id: 6, 
  text: "Sara", 
  start: "2019-04-07T00:00:00", 
  end: "2019-04-07T00:00:00", 
  resource: "G", 
  barColor: "#38761d", 
  barBackColor: "#93c47d", 
  backColor: "#cc0000",
  doctorname: "Bob123" 
},
{ 
  id: 7, 
  text: "Tom", 
  start: "2019-04-08T00:00:00", 
  end: "2019-04-08T00:00:00", 
  resource: "H", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138",
  doctorname: "Bob123" 
},
{ 
  id: 8, 
  text: "Dylan", 
  start: "2019-04-09T00:00:00", 
  end: "2019-04-09T00:00:00", 
  resource: "I", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#6aa84f",
  doctorname: "Bob123" 
},
{
  id: 9,
  text: "Bob",
  start: "2019-04-10T00:00:00.001",
  end: "2019-04-10T00:00:00.001",
  resource: "A",
  doctorname: "Jon123"
},
{
  id: 10, 
  text: "Andrew Moriarty",
  start: "2019-04-11T00:00:00",
  end: "2019-04-11T00:00:00",
  resource: "C",
  barColor: "#38761d",
  barBackColor: "#93c47d",
  backColor: "#cc0000",
  color: "white",
  doctorname: "Jon123"
},
{
  id: 11, 
  text: "Blake Endicott", 
  start: "2019-04-12T00:00:00", 
  end: "2019-04-12T00:00:00", 
  resource: "D", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138",
  doctorname: "Jon123"
},
{ 
  id: 12, 
  text: "Wills", 
  start: "2019-04-13T00:00:00", 
  end: "2019-04-13T00:00:00", 
  resource: "E", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#3c78d8",
  doctorname: "Jon123" 
},
{ 
  id: 13, 
  text: "Nikunj Timberlake", 
  start: "2019-04-14T00:00:00", 
  end: "2019-04-14T00:00:00", 
  resource: "F",
  doctorname: "Jon123"
},
{ 
  id: 14, 
  text: "Marky Mark", 
  start: "2019-04-15T00:00:00", 
  end: "2019-04-15T00:00:00", 
  resource: "G", 
  barColor: "#38761d", 
  barBackColor: "#93c47d", 
  backColor: "#cc0000",
  doctorname: "Jon123" 
},
{ 
  id: 15, 
  text: "Mark", 
  start: "2019-04-16T00:00:00", 
  end: "2019-04-16T00:00:00", 
  resource: "H", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138",
  doctorname: "Jon123" 
},
{ 
  id: 16, 
  text: "Dylan", 
  start: "2019-04-17T00:00:00", 
  end: "2019-04-17T00:00:00", 
  resource: "I", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#6aa84f",
  doctorname: "Jon123" 
},
{
  id: 17,
  text: "Bob",
  start: "2019-04-18T00:00:00",
  end: "2019-04-18T00:00:00",
  resource: "A",
  doctorname: "Jon123"
},

{
  id: 26, 
  text: "Warne",
  start: "2019-04-06T00:00:00",
  end: "2019-04-06T00:00:00",
  resource: "C",
  barColor: "#38761d",
  barBackColor: "#93c47d",
  backColor: "#cc0000",
  color: "white",
  doctorname: "Jon123"
},
{
  id: 27, 
  text: "Clark", 
  start: "2019-04-05T00:00:00", 
  end: "2019-04-05T00:00:00", 
  resource: "D", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138",
  doctorname: "Jon123"
},
{ 
  id: 28, 
  text: "Gayle", 
  start: "2019-04-06T00:00:00", 
  end: "2019-04-06T00:00:00", 
  resource: "E", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#3c78d8",
  doctorname: "Jon123" 
},
{ 
  id: 29, 
  text: "Warner", 
  start: "2019-04-05T00:00:00", 
  end: "2019-04-05T00:00:00", 
  resource: "F",
  doctorname: "Jon123"
},
{ 
  id: 30, 
  text: "Marky", 
  start: "2019-04-06T00:00:00", 
  end: "2019-04-06T00:00:00", 
  resource: "G", 
  barColor: "#38761d", 
  barBackColor: "#93c47d", 
  backColor: "#cc0000",
  doctorname: "Jon123" 
},
{ 
  id: 31, 
  text: "Ponting", 
  start: "2019-04-05T00:00:00", 
  end: "2019-04-05T00:00:00", 
  resource: "H", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138",
  doctorname: "Jon123" 
},
{ 
  id: 32, 
  text: "MaxWell", 
  start: "2019-04-06T00:00:00", 
  end: "2019-04-06T00:00:00", 
  resource: "I", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#6aa84f",
  doctorname: "Jon123" 
},
{
  id: 33,
  text: "Taylor",
  start: "2019-04-05T00:00:00",
  end: "2019-04-05T00:00:00",
  resource: "A",
  doctorname: "Jon123"
},
{
  id: 18, 
  text: "Sara",
  start: "2019-04-04T00:00:00",
  end: "2019-04-04T00:00:00",
  resource: "C",
  barColor: "#38761d",
  barBackColor: "#93c47d",
  backColor: "#cc0000",
  color: "white",
  doctorname: "Tom123"
},
{
  id: 19, 
  text: "Mark", 
  start: "2019-04-05T00:00:00", 
  end: "2019-04-05T00:00:00", 
  resource: "D", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138",
  doctorname: "Tom123"
},
{ 
  id: 20, 
  text: "Dylan", 
  start: "2019-04-06T00:00:00", 
  end: "2019-04-06T00:00:00", 
  resource: "E", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#3c78d8",
  doctorname: "Tom123" 

},
{ 
  id: 21, 
  text: "Bob", 
  start: "2019-04-04T00:00:00", 
  end: "2019-04-04T00:00:00", 
  resource: "F",
  doctorname: "Tom123" 
},
{ 
  id: 22, 
  text: "Sara", 
  start: "2019-04-05T00:00:00", 
  end: "2019-04-05T00:00:00", 
  resource: "G", 
  barColor: "#38761d", 
  barBackColor: "#93c47d", 
  backColor: "#cc0000",
  doctorname: "Tom123" 
},
{ 
  id: 23, 
  text: "Nikunj Timberlake", 
  start: "2019-04-04T00:00:00", 
  end: "2019-04-04T00:00:00", 
  resource: "H", 
  barColor: "#f1c232", 
  barBackColor: "#f1c232", 
  backColor: "#e69138",
  doctorname: "Tom123" 
},
{ 
  id: 24, 
  text: "Andrew Moriarty", 
  start: "2019-04-06T00:00:00", 
  end: "2019-04-06T00:00:00", 
  resource: "I", 
  barColor: "#cc0000", 
  barBackColor: "#ea9999", 
  backColor: "#6aa84f",
  doctorname: "Tom123" 
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

const ptSeed = [
  {
    name: "Blake Endicott",
    age: 21,
    gender: "Male",
    height: 69,
    weight: 180,
    heartrate: 69,
    bloodpressure: "120/80",

    medications: [
      "Zolpidem, ",
      "THC, ",
      "Lisinopril, "
    ],

    conditions: [
      "Insomnia, ",
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

    nextappt: "01/01/2020",

    email: "mbe083@gmail.com",

    phone: 8473129335
  },
  {
    name: "Mark",
    age: 22,
    gender: "Male",
    height: 59,
    weight: 140,
    heartrate: 65,
    bloodpressure: "120/80",

    medications: [
      "Zolpidem, ",
      "THC"      
    ],

    conditions: [
      "Insomnia, ",
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

    bill: 2000,

    nextappt: "01/01/2020",

    email: "mar866@gmail.com",

    phone: 8473129543
  },
  {
    name: "William",
    age: 23,
    gender: "Male",
    height: 62,
    weight: 150,
    heartrate: 66,
    bloodpressure: "122/85",

    medications: [
      "Zolpidem, ",
      "THC"      
    ],

    conditions: [
      "Insomnia, ",
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

    bill: 2000,

    nextappt: "01/01/2020",

    email: "will83@yahoo.com",

    phone: 8403129567
  },
  {
    name: "Sara",
    age: 23,
    gender: "Female",
    height: 62,
    weight: 150,
    heartrate: 66,
    bloodpressure: "122/85",

    medications: [
      "Zolpidem, ",
      "THC"      
    ],

    conditions: [
      "Insomnia, ",
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

    bill: 2000,

    nextappt: "01/01/2020",

    email: "sara@yahoo.com",

    phone: 8403349567
  },
  {
    name: "Tom",
    age: 23,
    gender: "Male",
    height: 62,
    weight: 150,
    heartrate: 66,
    bloodpressure: "122/85",

    medications: [
      "Zolpidem, ",
      "THC"      
    ],

    conditions: [
      "Insomnia, ",
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

    bill: 2000,

    nextappt: "01/01/2020",

    email: "tom33@yahoo.com",

    phone: 8402347678
  },    
  {
    name: "Dylan Dusenberrry",
    age: 27,
    gender: "Female",
    height: 67,
    weight: 170,
    heartrate: 47,
    bloodpressure: "120/80",

    medications: [
      "Vyvanse, ",
      "Norco, ",
      "Humira, "
    ],

    conditions: [
      "Rheumatoid Arthritis, ",
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

    nextappt: "01/02/2020",

    email: "dyland@gmail.com",

    phone: 6304561222
  },
  {
    name: "Dylan",
    age: 27,
    gender: "Female",
    height: 67,
    weight: 170,
    heartrate: 47,
    bloodpressure: "120/80",

    medications: [
      "Vyvanse, ",
      "Norco, ",
      "Humira"
    ],

    conditions: [
      "Rheumatoid Arthritis, ",
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

    nextappt: "01/02/2020",

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
    bloodpressure: "134/82",

    medications: [
      "Xanax, ",
      "Lyrica, ",
      "Xyzal"
    ],

    conditions: [
      "PTSD, ",
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

    nextappt: "01/03/2020",

    email: "echavez85@gmail.com",

    phone: 8152120674
  },
  {
    name: "Bob",
    age: 43,
    gender: "Male",
    height: 67,
    weight: 225,
    heartrate: 72,
    bloodpressure: 134/82,

    medications: [
      "Xanax, ",
      "Lyrica, ",
      "Xyzal"
    ],

    conditions: [
      "PTSD, ",
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

    email: "bob@gmail.com",

    phone: 3223233232
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
      "Atorvastatin, ",
      "Pantoprazole, ",
      "Propranolol, ",
      "Quinapril, ",
      "Fentanyl"
    ],

    conditions: [
      "Hypertension, ",
      "Tachycardia, ",
      "Hip Dysplasia, ",
      "High Cholesterol, ",
      "GERD"
    ],

    allergies: [
      "Grass, ",
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
    name: "Wills",
    age: 22,
    gender: "Male",
    height: 67,
    weight: 225,
    heartrate: 72,
    bloodpressure: 134/82,

    medications: [
      "Xanax, ",
      "Lyrica, ",
      "Xyzal"
    ],

    conditions: [
      "PTSD, ",
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

    email: "wills@gmail.com",

    phone: 8152898989
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
      "Memantine, ",
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
      "Memantine, ",
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
  },
  {
    name: "Clark",
    age: 25,
    gender: "Male",
    height: 72,
    weight: 158,
    heartrate: 80,
    bloodpressure: 130/90,

    medications: [
      "Memantine, ",
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

    email: "pharmacyschool@gmail.com",

    phone: 3316457049
  },
  {
    name: "Warne",
    age: 25,
    gender: "Male",
    height: 72,
    weight: 158,
    heartrate: 80,
    bloodpressure: 130/90,

    medications: [
      "Memantine, ",
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
  },
  {
    name: "Clark",
    age: 25,
    gender: "Male",
    height: 72,
    weight: 158,
    heartrate: 80,
    bloodpressure: 130/90,

    medications: [
      "Memantine",
      
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

    bill: 1000,

    nextappt: 01/06/2020,

    email: "claek12@gmail.com",

    phone: 3316433049
  },
  {
    name: "Gayle",
    age: 40,
    gender: "Male",
    height: 75,
    weight: 178,
    heartrate: 80,
    bloodpressure: 130/90,

    medications: [
      "Memantine, ",
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

    bill: 3000,

    nextappt: 01/06/2020,

    email: "gayle12@gmail.com",

    phone: 3316997049
  },
  {
    name: "Warner",
    age: 35,
    gender: "Male",
    height: 62,
    weight: 1758,
    heartrate: 80,
    bloodpressure: 130/90,

    medications: [
      "Memantine, ",
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

    email: "Warner123@gmail.com",

    phone: 3316457044
  },
  {
    name: "Marky",
    age: 25,
    gender: "Male",
    height: 72,
    weight: 158,
    heartrate: 80,
    bloodpressure: 130/90,

    medications: [
      "Memantine, ",
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
  },
  {
    name: "Ponting",
    age: 42,
    gender: "Male",
    height: 68,
    weight: 158,
    heartrate: 80,
    bloodpressure: 130/90,

    medications: [
      "Memantine, ",
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

    email: "ponting1234@gmail.com",

    phone: 3316457777
  },
  {
    name: "MaxWell",
    age: 42,
    gender: "Male",
    height: 68,
    weight: 158,
    heartrate: 80,
    bloodpressure: 130/90,

    medications: [
      "Memantine, ",
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

    email: "maxwell1234@gmail.com",

    phone: 3316457722
  },
  {
    name: "Taylor",
    age: 42,
    gender: "Male",
    height: 68,
    weight: 158,
    heartrate: 80,
    bloodpressure: 130/90,

    medications: [
      "Memantine, ",
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

    email: "taylor1234@gmail.com",

    phone: 3316459988
  }
];
// console.log(db);
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

  
