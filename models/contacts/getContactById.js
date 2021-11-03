const readList = require("./readList");

async function getContactById(contactId) {
  const contacts = await readList();
  const result = contacts.find(
    (contact) => String(contact.id) === String(contactId)
  );
  return result;
}

module.exports = getContactById;
