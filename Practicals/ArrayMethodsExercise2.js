// Find the count of movements which are atleast 1000 rs

const account1 = {
  movements: [12, 34, 56, 78, 1990],
  age: 45,
  createdOn: 2024,
};

const account2 = {
  movements: [90, 1378, 34, 78, 90],
  age: 46,
  createdOn: 2026,
};

const account3 = {
  movements: [89, 234, 1278, 45678],
  age: 46,
  createdOn: 2026,
};

const account4 = {
  movements: [78, -45, 765, 12900, 555],
  age: 40,
  createdOn: 2021,
};

const accounts = [account1, account2, account3, account4];

const greaterThan1000 = accounts
  .flatMap((x) => x.movements)
  .filter((x) => x >= 1000).length;

console.log(greaterThan1000);

//ORRRRRRRRRRRRRRRRRRR

const greaterThan = accounts
  .flatMap((x) => x.movements)
  .reduce((acc, currentValue) => (currentValue >= 1000 ? acc + 1 : acc), 0);
console.log(greaterThan); //5

//..............VERRRY IMPPP..............

const greaterThanCheck = accounts
  .flatMap((x) => x.movements)
  .reduce((acc, currentValue) => (currentValue >= 1000 ? acc++ : acc), 0);
console.log(greaterThanCheck); /// .............0............. cuz of post increment acc++ . Instead use ++acc
