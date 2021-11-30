const { Conflict } = require("http-errors");
const { User } = require("../../models");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { sendGridMail } = require("../../helpers");
const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new Conflict(`Email ${email} in use`);
    }

    const avatarURL = gravatar.url(email, { protocol: "http" });
    const verificationToken = nanoid();

    const newUser = new User({ email, avatarURL, verificationToken });

    newUser.setPassword(password);
    await newUser.save();
    const mail = {
      to: email,
      subject: "Confirmation of registration",
      html: `<a href='http://localhost:3000/api/auth/verify/${verificationToken}'>Please verify your email</a>`,
    };
    await sendGridMail(mail);
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
