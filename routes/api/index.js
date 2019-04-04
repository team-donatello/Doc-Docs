const router = require("express").Router();
const doctorRoutes = require("./doctors");
const patientRoutes = require("./patients");
const schedulerRoutes = require("./scheduler");
const confirmationmailRoutes = require("./confirmationmail");

// doctor routes
router.use("/doctors", doctorRoutes);
router.use("/patients", patientRoutes);

// patient routes
router.use("/patients", patientRoutes);

//scheduler routes
router.use("/scheduler", schedulerRoutes);

router.use("/confirmationmail", confirmationmailRoutes);


module.exports = router;
