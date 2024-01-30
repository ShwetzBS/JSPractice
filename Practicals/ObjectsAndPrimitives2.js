const jessica = {
  name: "Jessica",
  age: 30,
  friends: ["Bob", "Marley"], //Array is basically an object
};

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.friends.push("Jade");
jessicaCopy.friends.push("Puby");
jessica.name = "Jesicanew";

console.log(jessica.friends);
console.log(jessicaCopy.friends);
console.log(jessica.name);
console.log(jessicaCopy.name);

//...........OUTPUT...............

// ['Bob', 'Marley', 'Jade', 'Puby']
//  ['Bob', 'Marley', 'Jade', 'Puby']
// Jesicanew
// Jessica

//The primitive data types change their values completely irrespective
// but the object friends changes in both similarly
//Mainly because objects.assign creates a shallow copy not deep .
