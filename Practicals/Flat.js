const x = [1, 2, 3, 4, 5, 6, [7, 8, 9], ["a", "n", "p"]];

//Basically x is array inside array

const spread = x.flat();
console.log(spread);
//............OUTPUT...

// [1,   2,   3, 4, 5,6,   7,   8, 9, 'a','n', 'p' ]

//Checking for multidimentional ..

const arr2 = [[1, 2, 3, [8, 9, 0]]];

const spread1 = arr2.flat();
console.log(arr2); // [ [ 1, 2, 3, [ 8, 9, 0 ] ] ] It doesnt spread proprly

const spred3 = arr2.flat(2); //mention the depth ,by default it's 1
console.log(spred3); // [ 1, 2, 3, 8, 9, 0 ]

//..............COMPLEX..................

const obj1 = {
  name: "Shweta",
  age: 30,
  movements: ["panjim", "bangalore", "bargi"],
};
const obj2 = {
  name: "Mohit",
  age: 28,
  movements: ["panjim", "UK", "London", "Mumbai"],
};

const obj3 = {
  name: "Tanay",
  age: 30,
  movements: ["panjim", "Italy", "London", "Mumbai", "Coorg"],
};

const totalAccounts = [obj1, obj2, obj3];

const newArray = totalAccounts.map((x) => x.movements);

console.log(newArray); //[
//   [ 'panjim', 'bangalore', 'bargi' ],
//   [ 'panjim', 'UK', 'London', 'Mumbai' ],
//   [ 'panjim', 'Italy', 'London', 'Mumbai', 'Coorg' ]
//                       ]

//The output is an array of arrays .Lets make it flat

const flattenedArray = newArray.flat();

console.log(flattenedArray);

// [ 'panjim', 'bangalore', 'bargi',  'panjim', 'UK',     'London', 'Mumbai', 'panjim', 'Italy',  'London', 'Mumbai', 'Coorg']
