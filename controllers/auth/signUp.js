const { Conflict } = require("http-errors");
const { User } = require("../../models");

const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new Conflict(`Email ${email} in use`);
    }
    const newUser = new User({ email });
    newUser.setPassword(password);
    newUser.save();
    res.status(201).json({
      status: "success",
      code: 201,
      message: "Register success",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = signUp;
