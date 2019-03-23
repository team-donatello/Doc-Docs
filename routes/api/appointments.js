const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentController");


router.route("/")
  .get(appointmentController.findAll)
  .post(appointmentController.create);


router
  .route("/:id")
  .get(appointmentController.findById)
  .put(appointmentController.update)
  .delete(appointmentController.remove);

module.exports = router;
