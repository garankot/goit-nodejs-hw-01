const fs = require("fs/promises");
const path = require("path");
const uuid = require("uuid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contData = JSON.parse(data);
    return contData;
  } catch (error) {
    console.error(error);
  }
};

// listContacts();

const getContactById = async (id) => {
  try {
    const allContacts = await listContacts();
    const contact = allContacts.find((contact) => contact.id === id);
    return contact ? contact : null;
  } catch (error) {
    console.error(error);
  }
};

const addContact = async (name, email, phone) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

const removeContact = async (contactId) => {
  try {
    await fs.unlink(path, callback);
  } catch (error) {}
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
