const fs = require("fs/promises");

const contactsPath = require("./contactsPath");

async function updateContacts(newContacts) {
  const contact = JSON.stringify(newContacts);
  await fs.writeFile(contactsPath, contact);
}

module.exports = updateContacts;
