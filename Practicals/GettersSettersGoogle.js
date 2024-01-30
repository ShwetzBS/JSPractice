class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length < 1) {
      throw new Error("Name must be at least 1 character long");
    }

    this._name = newName;
  }
}

const Person1 = new Person("Shweta");
Person1.name = "helli";
console.log(Person1.name);
