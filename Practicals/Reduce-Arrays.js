const balance = [20, 89, 90];

const finalAmount = balance.reduce(function (
  accumulator,
  currentValue,
  index,
  original_array
) {
  return accumulator + currentValue;
},
0);

console.log(finalAmount);
