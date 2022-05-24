const operations = require("./contacts");
const yargs = require("yargs/yargs");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const data = await operations.listContacts();
      console.log("listContacts", data);
      break;

    case "get":
      const contactById = await operations.getContactById(id);
      console.log("contactById", contactById);
      break;

    case "add":
      const addNewContact = await operations.addContact(name, email, phone);
      console.log("addContact", addNewContact);
      break;

    case "remove":
      const deleteContactById = await operations.removeContact(id);
      console.log("deletedContact", deleteContactById);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
