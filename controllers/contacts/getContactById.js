const { Contact } = require("../../models");

const { NotFound } = require("http-errors");
const getContactById = async (req, res, next) => {
  try {
    const id = req.user._id;
    const { contactId } = req.params;
    const result = await Contact.findOne({ contactId, id });
    if (!result) {
      throw new NotFound(`Contact ${contactId} not found`);
    }
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

module.exports = getContactById;
