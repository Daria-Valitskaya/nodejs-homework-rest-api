const { Contact } = require("../../models");
const { NotFound } = require("http-errors");
const updateStatusContact = async (req, res, next) => {
  try {
    const { id } = req.user._id;
    const { contactId } = req.params;
    const { favorite } = req.body;
    const result = await Contact.findOneAndUpdate(
      { contactId, id },
      { favorite },
      {
        new: true,
      }
    );
    if (!result) {
      throw new NotFound(`Contact ${contactId} does not have a favorite field`);
    }
    res.status(200).json({
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
module.exports = updateStatusContact;
