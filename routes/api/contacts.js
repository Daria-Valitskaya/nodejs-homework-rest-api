const express = require("express");

const {
  contactValidation,
  validationOnChangeFields,
  statusValidationSchema,
} = require("../../joiValidation");
const { validation, authenticate } = require("../../middlewares");
const router = express.Router();
const { contactsControllers } = require("../../controllers");

router.get("/", authenticate, contactsControllers.listContacts);

router.get("/:contactId", authenticate, contactsControllers.getContactById);

router.post(
  "/",
  authenticate,
  validation(contactValidation),
  contactsControllers.addContact
);

router.delete("/:contactId", authenticate, contactsControllers.deleteContact);

router.put(
  "/:contactId",
  authenticate,
  validation(validationOnChangeFields),
  contactsControllers.updateContactById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validation(statusValidationSchema),
  contactsControllers.updateStatusContact
);
module.exports = router;
