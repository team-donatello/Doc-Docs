const router = require("express").Router();
const patientController = require("../../controllers/patientController");

<<<<<<< HEAD
// Matches with "/api/books"
=======
// Matches with "/api/patients"
>>>>>>> master
router.route("/")
  .get(patientController.findAll)
  .post(patientController.create);

<<<<<<< HEAD
// Matches with "/api/books/:id"
=======
// Matches with "/api/patients/:id"
>>>>>>> master
router
  .route("/:id")
  .get(patientController.findById)
  .put(patientController.update)
  .delete(patientController.remove);

module.exports = router;
