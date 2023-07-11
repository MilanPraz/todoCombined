const {
  putTodos,
  postTodos,
  getTodos,
  deleteTodos,
} = require("../model/database");

async function httpPostTodos(req, res) {
  const data = req.body;
  if (data.todos || data.priority || data.completed) {
    return res.status(200).json(await postTodos(data));
  }
}

async function httpPutTodos(req, res) {
  const data = req.body;
  const id = req.params.id;
  if ((data.todos || data.priority || data.completed, id)) {
    return res.status(200).json(await putTodos(data, id));
  }
}

async function httpGetTodos(req, res) {
  return res.status(200).json(await getTodos());
}

async function httpDeleteTodos(req, res) {
  const status = req.params.status;
  if (status === "completed") {
    return res.status(200).json(await deleteTodos(status));
  }
}

module.exports = {
  httpPostTodos,
  httpPutTodos,
  httpGetTodos,
  httpDeleteTodos,
};
