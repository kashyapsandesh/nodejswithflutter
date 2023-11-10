const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

class UserService {
  static async registrationUser(email, password) {
    try {
      const createUser = new userModel({ email, password });
      const saveUser = await createUser.save();
      console.log("user value sucessfully saved in database");
      return saveUser;
    } catch (error) {}
  }
  static async checkUser(email) {
    try {
      return await userModel.findOne({ email });
    } catch (error) {}
  }
  static async generateJwttoken(tokenData, secretekey, jwt_expire) {
    return jwt.sign(tokenData, secretekey, { expiresIn: jwt_expire });
  }
}
module.exports = UserService;
