const router = require("express").Router();
const TodoController = require("../controller/todo.controller");
router.post("/storetodo", TodoController.createTodo);
router.post("/gettodo", TodoController.getTodo);
router.post("/delete", TodoController.deleteItem);
module.exports = router;
