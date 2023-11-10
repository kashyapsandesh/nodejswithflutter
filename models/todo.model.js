const db = require("../config/db");
const mongoose = require("mongoose");
const userModel = require("./user.model");
const { Schema } = mongoose;
const todoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: userModel.modelName,
  },
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
});

const todoModel = db.model("todo", todoSchema);
module.exports = todoModel;
