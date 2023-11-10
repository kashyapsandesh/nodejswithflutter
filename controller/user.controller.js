const UserService = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.checkUser(email);

    const sucess = await UserService.registrationUser(email, password);
    res.json({
      status: true,
      sucess: "Sucessfully create a user",
    });
  } catch (error) {
    res.json({
      status: false,
      sucess: "user cant create ",
    });
    console.log(error.json);
  }
};
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.checkUser(email);
    if (!user) {
      throw new Error("user doesn't exist");
    }

    const isMatch = user.comparePassword(password);
    if (isMatch === false) {
      throw new Error("user entered password is incorrect");
    }
    let tokenData = { id: user.id, email: user.email };
    const token = await UserService.generateJwttoken(
      tokenData,
      "secretekey",
      "1h"
    );
    res.status(200).json({
      status: true,
      token: token,
    });
  } catch (error) {}
};
