const { Contact } = require("../../models");
const listContacts = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const { _id } = req.user;
    const skip = page * limit - limit;
    const result = await Contact.find(
      { owner: _id },
      "_id name phone email owner",
      { skip: skip, limit: +limit }
    ).populate("owner", "_id email");
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
