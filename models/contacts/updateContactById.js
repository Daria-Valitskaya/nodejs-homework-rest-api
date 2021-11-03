const readList = require("./readList");
const updateContacts = require("./updateContacts");

async function updateContactById(contactId, body) {
  const contacts = await readList();

  const idx = contacts.findIndex(
    (item) => String(item.id) === String(contactId)
  );
  if (idx === -1) {
    return null;
  }

  const brandNewContact = { ...contacts[idx], ...body };
  contacts[idx] = brandNewContact;
  await updateContacts(contacts);
  return brandNewContact;
}
module.exports = updateContactById;
