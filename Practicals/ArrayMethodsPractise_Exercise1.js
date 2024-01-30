const account1 = {
  movements: [12, 34, 56, 78, 90],
  age: 45,
  createdOn: 2024,
};

const account2 = {
  movements: [90, 78, 34, 78, 90],
  age: 46,
  createdOn: 2026,
};

const account3 = {
  movements: [89, 234, 78, 45678],
  age: 46,
  createdOn: 2026,
};

const account4 = {
  movements: [78, -45, 765, 900, 555],
  age: 40,
  createdOn: 2021,
};

const accounts = [account1, account2, account3, account4];

// .........Find the total amount of movements of all accounts ..........

const new_account_movemnets = accounts.map((acc) => acc.movements);
console.log(new_account_movemnets);

const flattened_map = new_account_movemnets.flat();
console.log(flattened_map);

const sum_reduced = flattened_map.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum_reduced);

//Putting it in one function only

const final_sum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((x) => x > 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(final_sum);

// ORRRRRRRconst

const final_sum1 = accounts
  .flatMap((acc) => acc.movements)

  .filter((x) => x > 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(final_sum1);
