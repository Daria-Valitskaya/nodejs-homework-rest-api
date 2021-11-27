const { User } = require("../../models");
const { Unauthorized, BadRequest } = require("http-errors");
const fs = require("fs/promises");
const path = require("path");
const avatarDir = path.join(__dirname, "../../public/avatars");

const updateAvatar = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new BadRequest("Enter the file");
    }
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;

    try {
      const fileName = `${_id}_${originalname}`;
      const resultUpload = path.join(avatarDir, fileName);

      await fs.rename(tempUpload, resultUpload);
      const avatar = path.join("/avatars", fileName);
      const result = await User.findByIdAndUpdate(
        _id,
        { avatarURL: avatar },
        { new: true }
      );
      if (!result) {
        throw new Unauthorized(`Contact ${_id} not authorized`);
      }
      res.status(200).json({
        status: "success",
        message: "Success update avatar",
        code: 200,
        data: {
          avatarURL: avatar,
        },
      });
    } catch (error) {
      await fs.unlink(tempUpload);
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updateAvatar;
