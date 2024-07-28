const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTasks,
  deleteTask,
  getTask,
  updateTask,
} = require("../controllers/app");

router.route("/").post(createTask).get(getAllTasks);
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;
