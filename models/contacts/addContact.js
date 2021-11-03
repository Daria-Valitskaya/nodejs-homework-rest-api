const readList = require("./readList");
const crypto = require("crypto");
const updateContacts = require("./updateContacts");

async function addContact(data) {
  const contacts = await readList();
  const newContact = { id: crypto.randomUUID(), ...data };

  contacts.push(newContact);

  await updateContacts(contacts);

  return newContact;
}

module.exports = addContact;
