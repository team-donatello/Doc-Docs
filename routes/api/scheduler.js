const router = require("express").Router();
const schedulerController = require("../../controllers/schedulerController");

// Matches with "/api/books"
router.route("/")
  .get(schedulerController.findAll)
  .post(schedulerController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(schedulerController.findById)
  .put(schedulerController.update)
  .delete(schedulerController.remove);

module.exports = router;
