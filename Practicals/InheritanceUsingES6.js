class Person {
  constructor(fullname, age, birthYear, city) {
    this.fullname = fullname;
    this.age = age;
    this.birthYear = birthYear;
    this.city = city;
  }

  set fullname(full_name) {
    this._fullname = full_name;
  }

  set age(age_val) {
    if (age_val < 18) {
      console.log("Still a kid");
    } else {
      this._age = age_val;
    }
  }

  set birthYear(birth_date) {
    if (birth_date < 2023) {
      this._birthYear = birth_date;
    } else {
      console.log("Add a proper birth date");
    }
  }

  set city(city_name) {
    this._city = city_name;
  }

  get full_name() {
    return this._fullname;
  }
  get age() {
    return this._age;
  }
  get birthYear() {
    return this._birthYear;
  }
  get city() {
    return this._city;
  }

  printDetails() {
    return `${this.full_name}  ${this.age} ${this.city}`;
  }
}

class Student extends Person {
  constructor(full, age, birth, city, course, education) {
    super(full, age, birth, city);
    this.course = course;
    this.education = education;
  }

  calcAge() {
    return 2024 - this.age;
  }
}

const mikal = new Student("jello", 23, 2003, "goa", "be", "Bachelors");
console.log(mikal.printDetails());
console.log(mikal.calcAge());

//.....Check ....
mikal.age = 12;
console.log(mikal.age);
