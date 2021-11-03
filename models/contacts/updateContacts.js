const fs = require("fs/promises");

const contactsPath = require("./contactsPath");

async function updateContacts(data) {
  return await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
}

module.exports = updateContacts;
