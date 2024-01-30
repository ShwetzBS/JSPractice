const jonas = {
  firstname: "jonas",
  year: 2002,
  calcAge: function () {
    console.log(2024 - this.year);
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`); //Arrow function
  },
};

jonas.greet();
// .... Output ..
//Hey undefined ---mainly cuz arrow functions don't have this keyword
