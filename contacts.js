const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");
console.log(contactsPath);

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contData = JSON.parse(data);
  console.log(contData);
  return contData;
};

function getContactById(contactId) {
  fs.readFile(contactId, [id]);
}

function addContact(name, email, phone) {
  // ...твой код
}

function removeContact(contactId) {
  fs.unlink(path, callback);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
