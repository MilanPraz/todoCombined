const {
  httpPostTodos,
  httpPutTodos,
  httpGetTodos,
  httpDeleteTodos,
} = require("../controller/todos.controller");
const express = require("express");
const todosRouter = express.Router();

todosRouter.post("/", httpPostTodos);
todosRouter.put("/:id", httpPutTodos);
todosRouter.get("/", httpGetTodos);
todosRouter.delete("/:status", httpDeleteTodos);

module.exports = todosRouter;
