const contacts = require("./contacts");
const argv = require("yargs").argv;
// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const data = await contacts.listContacts();
      console.log("listContacts", data);
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
//написати функцію яка викликає listContacts, getContactById, removeContact, addContact
