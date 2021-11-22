const { User } = require("../../models");
const { NotFound } = require("http-errors");
const subscriptionUpdate = async (req, res, next) => {
  try {
    const { subscription, email } = req.body;
    const result = await User.findOneAndUpdate(
      { email },
      { subscription },
      { new: true }
    );
    if (!result) {
      throw new NotFound(`Contact ${email} does not found`);
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = subscriptionUpdate;
