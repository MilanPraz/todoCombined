const todos = require("./mongoose.schema");

async function postTodos(data) {
  return await todos.updateOne(
    {
      todos: data.todos,
      priority: data.priority,
      completed: data.completed,
    },
    {
      todos: data.todos,
      priority: data.priority,
      completed: data.completed,
    },
    {
      upsert: true,
    }
  );
}

async function putTodos(data, id) {
  const filter = {_id: id};
  const update = {
    todos: data.todos,
    priority: data.priority,
    completed: data.completed,
  };
  return await todos.findByIdAndUpdate(filter, update, {new: true});
}

async function getTodos() {
  const result = await todos.find({});
  const response = [];
  for (const todo of result) {
    response.push(todo);
  }
  return response;
}

async function deleteTodos(status) {
  try {
    const deletedTodos = await todos.deleteMany({completed: true});
    return deletedTodos;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while deleting completed tasks");
  }
}

module.exports = {
  postTodos,
  putTodos,
  getTodos,
  deleteTodos,
};
