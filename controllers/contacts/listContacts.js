const { BadRequest } = require("http-errors");
const { Contact } = require("../../models");
const listContacts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const { _id } = req.user;

    if (isNaN(page) || isNaN(limit)) {
      throw new BadRequest();
    }
    const skip = Number(page) * Number(limit) - Number(limit);
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
