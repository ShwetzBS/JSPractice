const Person = function (firstname, lastname, birthyear) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.birthyear = birthyear;
};

Person.prototype.calcAge = function () {
  return 2024 - this.birthyear;
};

//Firstname ,lastname and birthyear is common between persson and student
const Student = function (firstname, lastname, birthyear, course) {
  Person.call(this, firstname, lastname, birthyear);
  this.course = course;
};

//Now we want the Student to have this function calcage in its prototype

Student.prototype = Object.create(Person.prototype); // initially student.prototype will be empty -------(1)

//If we wrote this before (1) then the line 1 would have overridden this and the prototype would be empty
Student.prototype.introduction = function () {
  return `Hi I am ${this.firstname} with course ${this.course}`;
};

const newObj = new Student("Mikal", "Davis", 30, "Mechanical");
console.log(newObj.introduction());
console.log(newObj.calcAge());
