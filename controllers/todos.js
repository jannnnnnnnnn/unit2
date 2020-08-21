const Todos = require("../data/todo");

const show = (req, res, next) => {
  console.log("todo is", Todos);
  res.render("index", { todos: Todos.todos });
};
const create = (req, res, next) => {
  Todos.todos.push(req.body);
  console.log("created new ", Todos);

  res.redirect("/");
};
module.exports = {
  show,
  create,
};
