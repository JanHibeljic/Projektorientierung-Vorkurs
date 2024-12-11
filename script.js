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

  constructor(fN, lN) {
    this.firstName = fN;
    this.lastName = lN;
    console.log("new contact created");
  }
}

function addContact(fN, lN) {
  let myContact = new Contact(fN, lN);
  contacts.push(myContact);
}

addContact("Jan", "Hibeljic");
addContact("Feli", "Schenk");
addContact("Luk", "Schenk");
