class Contact extends Person {
  phone;

  constructor(fN, lN, phone) {
    super(fN, lN); // verwenden wenn eine übergeordnete Klasse existiert
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
