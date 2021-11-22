const { User } = require("../../models");
const { Unauthorized } = require("http-errors");
const currentUser = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new Unauthorized();
    }
    const { email, subscription } = req.user;
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        user: {
          email,
          subscription,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = currentUser;
