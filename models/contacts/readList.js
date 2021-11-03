const fs = require("fs/promises");
const contactsPath = require("./contactsPath");

async function readList() {
  const result = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(result);
}
module.exports = readList;
