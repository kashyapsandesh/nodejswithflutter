const TodoModel = require("../models/todo.model");
class TodoServices {
  static async createTodo(userId, title, des) {
    const createTodo = new TodoModel({
      userId,
      title,
      des,
    });
    return await createTodo.save();
  }

  static async getTodoData(userId) {
    const createTodo = await TodoModel.find({ userId });
    return createTodo;
  }

  static async deleteTodoItem(id) {
    const deleteTodo = await TodoModel.findOneAndDelete({ _id: id });
    return deleteTodo;
  }
}
module.exports = TodoServices;
