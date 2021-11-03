const Joi = require("joi");
const joiSchemaOneField = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).optional(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .optional(),

  phone: Joi.string().optional(),
}).or("name", "email", "phone");

module.exports = joiSchemaOneField;
