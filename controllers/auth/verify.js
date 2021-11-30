const { User } = require("../../models");
const { NotFound } = require("http-errors");
const verify = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });
    if (!user) {
      throw new NotFound();
    }
    await User.findByIdAndUpdate(user._id, {
      verificationToken: null,
      verify: true,
    });
    res.status(200).json({
      status: "success",
      code: 200,
      message: "Verification successful",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = verify;
