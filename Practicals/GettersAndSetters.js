class GetterSetter {
  constructor(name, age_nj, education) {
    this._age = age_nj;
    this._name = name;
    this._education = education;
  }

  get age() {
    console.log("Returning age");
    return this._age;
  }

  set age(age_name) {
    console.log("Setting age");
    if (age_name > 18) {
      this._age = age_name;
    } else {
      this._age = 98;
    }
  }

  calccPrintFullname() {
    return this._name + " " + this._education;
  }
}

const obj1 = new GetterSetter("Shweta", 90, "None");

obj1.age = 8;
console.log(obj1.age);
console.log(obj1._name);
console.log(obj1._education); // setters and getters are considered as poperty hence no ()
console.log(obj1.calccPrintFullname());
