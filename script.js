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
