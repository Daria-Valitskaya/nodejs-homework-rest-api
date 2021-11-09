const contactModel = require("../../models");
const listContacts = async (req, res, next) => {
  try {
    const result = await contactModel.listContacts();
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
