const router = require("express").Router();
const doctorRoutes = require("./doctors");

// Book routes
router.use("/doctors", doctorRoutes);


module.exports = router;
