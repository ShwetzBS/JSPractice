"use strict";

const Person = function (firstname, lastname) {
  this.fName = firstname;
  this.lName = lastname;
};

const newObject = new Person();
console.log(newObject); // Person { fName: undefined, lName: undefined }

const Person1 = function (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.printFullName = function () {
    return this.firstname + " " + this.lastname;
  };
};

const newObject1 = new Person1("Shweta", "Bhat");
console.log(newObject1); //Person { fName: 'Shweta', lName: 'Bhat' }
console.log(newObject1.firstname);
console.log(newObject1 instanceof Person1); //true

console.log(newObject1 instanceof Person); //false

console.log(newObject1.printFullName());
