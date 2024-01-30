const jessica = {
  name: "Jessica",
  age: 30,
  friends: ["Bob", "Marley"], //Array is basically an object
};

const jessica2 = {
  name: "jessica2",
  age: 80,
  friends: ["loner", "boner"],
};

jessica2 = Object.assign({}, jessica); //Error assignment to a constant variable
