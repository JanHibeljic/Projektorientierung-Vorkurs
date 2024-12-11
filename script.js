let contacts = [
  // JSON = JavaScript Object Notation
  {
    firstName: "Ale",
    surname: "Muffer",
    adress: "Musterstr",
  },
];

// Beschreibung, wie ein Objekt aussehen soll
// Vorlage
// Schablone
class Contact {
  firstName;
  lastName;
}

//new Contact();
//{
//  firstName: undefined,
//  lastName: undefined,
//}
function addContact(fN, lN) {
  let myContact = new Contact();
  myContact["firstName"] = fN;
  myContact["firstName"] = lN;
  contacts.push(myContact);
  debugger;
}

addContact("Jan", "Hibeljic");
addContact("Feli", "Schenk");
addContact("Luk", "Schenk");
