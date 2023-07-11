const mongoose = require("mongoose");

const todosScheme = mongoose.Schema(
  {
    // title: {
    //   type: String,
    //   required: true,
    // },
    todos: {
      type: String,
      required: true,
    },
    priority: {
      type: Boolean,
      default: null,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {versionKey: false}
);

module.exports = mongoose.model("todos", todosScheme);
