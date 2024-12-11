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
class Contacts {
  firstName;
  lastName;
}

function addContact(firstName, lastName) {
  contacts.push({
    firstName: firstName,
    lastName: lastName,
  });
}

addContact("Jan", "Hibeljic");
addContact("Feli", "Schenk");
addContact("Luk", "Schenk");
