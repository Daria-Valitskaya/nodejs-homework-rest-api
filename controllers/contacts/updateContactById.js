const contactModel = require("../../models");
const { NotFound } = require("http-errors");
const updateContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactModel.updateContactById(contactId, req.body);
    if (!result) {
      throw new NotFound(`Contact ${contactId} not found`);
    }
    res.status(201).json({
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
module.exports = updateContactById;
