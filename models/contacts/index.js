const readList = require("./readList");
const getContactById = require("./getContactById");
const listContacts = require("./listContacts");
const removeContact = require("./removeContact");
const addContact = require("./addContact");
const updateContactById = require("./updateContactById");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  readList,
  updateContactById,
};
