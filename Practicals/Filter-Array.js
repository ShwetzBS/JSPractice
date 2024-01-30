const values = [10, 20, -90, -89];

//Filtering only those values who are >0

const fileterdValues = values.filter(function (x) {
  return x > 0;
});
console.log(fileterdValues);

//..............For each.............//
const newArray = [];
values.forEach(function (m) {
  if (m > 0) newArray.push(m);
});

console.log(newArray);
