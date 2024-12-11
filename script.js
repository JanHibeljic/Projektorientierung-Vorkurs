let contacts = [
  // JSON = JavaScript Object Notation
  new Contact("Jessica", "Moldovan", "01234343434"),
  new Friend("Erika", "Mustermann"),
];

function addContact(fN, lN) {
  let myContact = new Contact(fN, lN);
  contacts.push(myContact);
}

addContact("Jan", "Hibeljic", "012343434345");
addContact("Feli", "Schenk", "012343434346");
addContact("Luk", "Schenk", "012343434347");
