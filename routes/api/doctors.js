const router = require("express").Router();
const doctorController = require("../../controllers/doctorController");

// Matches with "/api/books"
router.route("/")
  .get(doctorController.findAll)
  .post(doctorController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(doctorController.findById)
  .put(doctorController.update)
  .delete(doctorController.remove);

module.exports = router;
