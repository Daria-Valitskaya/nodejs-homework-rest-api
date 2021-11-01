const readList = require("./readList");

async function listContacts() {
  return await readList();
}

module.exports = listContacts;
