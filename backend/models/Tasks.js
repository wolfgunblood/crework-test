const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "must provide title"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "Hello World!!!",
    },
    status: {
      type: String,
      enum: {
        values: ["todo", "in-progress", "under-review", "finished"],
        message: "{VALUE} is not supported",
      },
      required: [true, "Please provide status"],
    },
    priority: {
      type: String,
      enum: {
        values: ["low", "medium", "urgent"],
        message: "{VALUE} is not supported",
      },
      default: "low",
    },
    deadline: { type: Date },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tasks", TaskSchema);
