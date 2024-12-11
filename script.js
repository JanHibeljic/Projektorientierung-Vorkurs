class Contact {
  firstName;
  lastName;

  constructor(fN, lN) {
    this.firstName = fN;
    this.lastName = lN;
    console.log("new contact created");
  }
}
// Beschreibung, wie ein Objekt aussehen soll
// Vorlage
// Schablone

let contacts = [
  // JSON = JavaScript Object Notation
  new Contact("Jessica", "Moldovan"),
];

function addContact(fN, lN) {
  let myContact = new Contact(fN, lN);
  contacts.push(myContact);
}

addContact("Jan", "Hibeljic");
addContact("Feli", "Schenk");
addContact("Luk", "Schenk");
