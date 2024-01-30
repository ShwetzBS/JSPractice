let john = { name: "John" };
let ben = { name: "Ben" };
let visitsCountObj = {};

visitsCountObj[ben] = 234;
visitsCountObj[john] = 123;
console.log(visitsCountObj);

//Nested Objeect

const onject1 = {
  lastName: "Bhat",
  object2: {
    fullname: "lastName+yes",
  },
};

console.log(onject1.lastName);
console.log(onject1.object2.fullname);
