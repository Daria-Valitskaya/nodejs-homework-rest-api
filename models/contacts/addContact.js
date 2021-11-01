const fs = require("fs/promises");
const readList = require("./readList");
const crypto = require("crypto");
const contactsPath = require("./contactsPath");

async function addContact(name, email, phone) {
  const contacts = await readList();
  const newContact = { id: crypto.randomUUID(), name, email, phone };

  contacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = addContact;
