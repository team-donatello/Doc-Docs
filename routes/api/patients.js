const router = require("express").Router();
const patientController = require("../../controllers/patientController");

// Matches with "/api/books"
router.route("/")
  .get(patientController.findAll)
  .post(patientController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(patientController.findById)
  .put(patientController.update)
  .delete(patientController.remove);

module.exports = router;
