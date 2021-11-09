const contactModel = require("../../models");
const { NotFound } = require("http-errors");
const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactModel.removeContact(contactId);
    if (!result) {
      throw new NotFound(`Contact ${contactId} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteContact;
