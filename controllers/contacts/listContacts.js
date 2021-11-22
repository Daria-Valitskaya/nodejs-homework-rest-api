const { Contact } = require("../../models");
const listContacts = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const result = await Contact.find({ owner: _id }).populate(
      "owner",
      "_id email"
    );
    res.json({
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
module.exports = listContacts;
