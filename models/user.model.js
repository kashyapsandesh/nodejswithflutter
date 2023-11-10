const db = require("../config/db");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;
const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,

    required: true,
  },
});

//function for bcrypt
userSchema.pre("save", async function () {
  try {
    var user = this;
    //initiallize salt to encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(user.password, salt);
    user.password = hashpassword;
  } catch (error) {}
});
userSchema.methods.comparePassword = async function (userPassword) {
  try {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
  } catch (error) {}
};

const userModel = db.model("user", userSchema);
module.exports = userModel;
