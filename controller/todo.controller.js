const TodoServices = require("../services/todo.services");
exports.createTodo = async (req, res, next) => {
  try {
    const { userId, title, des } = req.body;
    let todo = await TodoServices.createTodo(userId, title, des);

    res.json({ status: true, success: todo });
  } catch (error) {}
};
exports.getTodo = async (req, res, next) => {
  try {
    const { userId } = req.body;
    let todo = await TodoServices.getTodoData(userId);
    console.log(todo);

    res.json({ status: true, success: todo });
  } catch (error) {}
};

exports.deleteItem = async (req, res, next) => {
  try {
    const { id } = req.body;
    let deleted = await TodoServices.deleteTodoItem(id);
    console.log(deletedItem);

    res.json({ status: true, success: deleted });
  } catch (error) {}
};
