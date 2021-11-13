const Joi = require("joi");
const statusValidationSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
module.exports = statusValidationSchema;
