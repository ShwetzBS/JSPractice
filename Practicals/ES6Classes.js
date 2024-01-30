class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //............This method will be added to the proto property of Person and not to the Person object itself
  printFullName() {
    return this.firstName + " " + this.lastName;
  }
}

Person.prototype.greet = function () {
  return `Hey !! ${this.firstName}`;
};

const person1 = new Person("Mohit", "Bidikar");
console.log(person1.printFullName());
console.log(person1.greet());
