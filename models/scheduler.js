const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schedulerSchema = new Schema({  
  id: { type: String, required: true },  
  text: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  resource: { type: String },
  barColor: { type: String },
  barBackColor: { type: String },
  backColor: { type: String },
  color: { type: String },
  doctorname: { type: String }
});

const Scheduler = mongoose.model("Scheduler", schedulerSchema);

module.exports = Scheduler;

