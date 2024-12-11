let contacts = [
  // JSON = JavaScript Object Notation
];

function addContact(firstName, lastName) {
  contacts.push({
    firstName: firstName,
    lastName: lastName,
  });
}

addContact("Jan", "Hibeljic");
addContact("Feli", "Schenk");
addContact("Luk", "Schenk");
