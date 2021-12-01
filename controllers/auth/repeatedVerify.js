const { User } = require("../../models");
const { BadRequest } = require("http-errors");
const { sendGridMail } = require("../../helpers");
const repeatedVerify = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw new BadRequest("missing required field email");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new NotFound();
    }
    if (user.verify) {
      throw new BadRequest("Verification has already been passed");
    }
    const { verificationToken } = user.verificationToken;
    const repeatedMail = {
      to: email,
      subject: "Confirmation of registration",
      html: `<a href='http://localhost:3000/api/auth/verify/${verificationToken}'>Please verify your email</a>`,
    };

    await sendGridMail(repeatedMail);

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Verification email sent",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = repeatedVerify;
