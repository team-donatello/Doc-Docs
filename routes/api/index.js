const router = require("express").Router();
const doctorRoutes = require("./doctors");
const patientRoutes = require("./patients");
// API routes
router.use("/doctors", doctorRoutes);
router.use("/patients", patientRoutes);


module.exports = router;
