const readList = require("./readList");

const updateContacts = require("./updateContacts");

async function removeContact(contactId) {
  const contacts = await readList();
  const indx = contacts.findIndex((contact) => contact.id === contactId);
  if (indx === -1) {
    return null;
  }
  const removeContact = contacts.splice(indx, 1);
  await updateContacts(contacts);
  return removeContact;
}

module.exports = removeContact;
