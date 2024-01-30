const map = new Map([
  ["USA", "USD"],
  ["India", "INR"],
  ["Pakisthan", "PKR"],
  ["Germany", "Pounds"],
]);

map.forEach(function (value, key, m) {
  console.log(`${key} : ${value}`);
});

//....SETS........

const sets = new Set([1, 2, 3, 4, 5, 4, 4, 5, 7]);
console.log(sets);

//Sets foreach by default takes in key and value even though key and value both are the same incase of sets.Its not a map
sets.forEach(function (value, key, set) {
  console.log(`Value ${value} and key ${key}`);
});
