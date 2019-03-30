const express = require("express");
const bodyParser = require('body-parser');
var app = express();

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.engine(
//   "html",

// );
// app.set('view engine', "html");

require("./routes/api/reminderemail")(app);
require("./routes/api/confirmationemail")(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Doc-Docs");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;