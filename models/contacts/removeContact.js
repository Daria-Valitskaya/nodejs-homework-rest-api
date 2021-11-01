const fs = require("fs/promises");
const readList = require("./readList");
const contactsPath = require("./contactsPath");

async function removeContact(contactId) {
  const contacts = await readList();
  const result = contacts.reduce((newList, contact) => {
    if (String(contact.id) !== String(contactId)) {
      newList.push(contact);
    }
    return newList;
  }, []);
  return result;
}

module.exports = removeContact;
