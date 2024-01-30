class ClassWithStaticMethod {
  constructor(age, education) {
    this._age = age;
    this._education = education;
  }

  static method() {
    console.log(`This keyord doesnt work hre`);
  }
}

const test_static = new ClassWithStaticMethod(20, "Bachelors");
ClassWithStaticMethod.method();
