const { Contact } = require("../../models");
const { NotFound } = require("http-errors");
const updateContactById = async (req, res, next) => {
  try {
    const id = req.user._id;
    const contactId = req.params;
    const result = await Contact.findOneAndUpdate({ contactId, id }, req.body, {
      new: true,
    });
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
