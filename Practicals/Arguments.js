const add = function (a, b) {
  console.log(arguments); // [2,3,4,5,6,7]
  console.log(a + b); // 2+3 =5
};

add(2, 3, 4, 5, 6, 7);

function addition(a, b) {
  console.log(arguments); // [10,20,89,90]
  return a + b; // 10+20 =30
}

console.log(addition(10, 20, 89, 90));

var addArrow = (a, b) => {
  console.log(arguments); //emptynarray
  console.log(a + b); //7+2 =9
};

addArrow(2, 7, 8, 9);
