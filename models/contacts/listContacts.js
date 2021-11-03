const readList = require("./readList");

async function listContacts() {
  return readList();
}

module.exports = listContacts;
