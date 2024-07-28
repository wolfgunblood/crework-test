const Tasks = require("../models/Tasks");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const asyncWrapper = require("../middleware/async");

const getAllTasks = async (req, res) => {
  const jobs = await Tasks.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Tasks.findOne({ _id: taskId });

  if (!task) {
    return next(createCustomError(`No todo with ID ${taskId}`, 404));
  }
  return res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Tasks.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  const task = await Tasks.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No todo with id : ${taskID}`, 404));
  }

  return res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const {
    user: { userId },
    params: { id: taskId },
  } = req;

  const todo = await Tasks.findOne({ _id: taskId, createdBy: userId });

  if (!todo) {
    return next(Error(`No todo with ID ${taskId}`, 404));
  }
  todo = await Tasks.deleteOne({ _id: taskId, createdBy: userId });
  return res.status(200).send("task deleted!!!");
});

module.exports = {
  getTask,
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
};
