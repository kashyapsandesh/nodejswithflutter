const express = require("express");
const app = express();
const todoRoute = require("./routes/todo.route");
const userRoute = require("./routes/user.route");
const bodyparser = require("body-parser");
//body-parser is use to listen the res.body in 
app.use(bodyparser.json());
app.use("/", userRoute), app.use("/", todoRoute);

module.exports = app;
