const express = require("express");

const {
  contactValidation,
  validationOnChangeFields,
  statusValidationSchema,
} = require("../../joiValidation");
const { validation } = require("../../middlewares");
const router = express.Router();
const { contactsControllers } = require("../../controllers");

router.get("/", contactsControllers.listContacts);

router.get("/:contactId", contactsControllers.getContactById);

router.post("/", validation(contactValidation), contactsControllers.addContact);

router.delete("/:contactId", contactsControllers.deleteContact);

router.put(
  "/:contactId",
  validation(validationOnChangeFields),
  contactsControllers.updateContactById
);

router.patch(
  "/:contactId/favorite",
  validation(statusValidationSchema),
  contactsControllers.updateStatusContact
);
module.exports = router;
