const router = require("express").Router();
const doctorRoutes = require("./doctors");
const patientRoutes = require("./patients");
<<<<<<< HEAD
const schedulerRoutes = require("./scheduler");

// doctor routes
=======
// API routes
>>>>>>> master
router.use("/doctors", doctorRoutes);
router.use("/patients", patientRoutes);

// patient routes
router.use("/patients", patientRoutes);

//scheduler routes
router.use("/scheduler", schedulerRoutes);


module.exports = router;
