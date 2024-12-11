class Contact {
  firstName;
  lastName;
  phone;

  constructor(fN, lN, phone) {
    this.firstName = fN;
    this.lastName = lN;
    this.phone = phone;
    console.log("new contact created");
  }

  printFullName() {
    console.log(`${this.firstName}, ${this.lastName}`);
    //hier this. benutzen damit firstName und lastName aus der Klasse verwendet wird
  }

  call() {
    window.location.href = "tel:" + this.phone;
  }
}
