const x = ["shweta", "mohito", "abhishek", "tanay"];
//We can sort an array of strings only not numbers

x.sort();
console.log(x); //[ 'abhishek', 'mohito', 'shweta', 'tanay' ]

//...............FOR NUMBERS ..........

const nos = [10, 78, 90, 67];
nos.sort((a, b) => {
  // for descending
  if (a > b) return 1; // a>b return -1
  if (b > a) return -1; // b>a return 1
});
console.log(nos); //[ 10, 67, 78, 90 ]--ascending

//ORRR

const numbers = [90, 89, 87, 56];
numbers.sort((a, b) => a - b); //---for descending b-a
console.log(numbers); //[ 56, 87, 89, 90 ] --ascending
