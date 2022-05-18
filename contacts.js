const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.parse("./db/contacts.json");
console.log(contactsPath);
// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contacts.json, []);
}

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
