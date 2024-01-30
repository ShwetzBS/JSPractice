const arr = new Array(5); //Creates empty array of size 5

arr.fill(1); // fills all the 5 positions of array to 1

console.log(arr); //[1,1,1,1,1]

const arr2 = new Array(5);
console.log(arr2.fill(2, 3)); // fill the index value from 3 till end with number 2 // [ <3 empty items>, 2, 2 ] --output

const arr3 = new Array(6);
console.log(arr3.fill(4, 1, 5)); // fill number 4 from index 1 to 5 (bit it will exclude 5 ,goes only till index 4) // [ <1 empty item>, 4, 4, 4, 4, <1 empty item> ] --output

const arr4 = [2, 3, 4, 5, 6];
console.log(arr4.fill(3, 4)); //[ 2, 3, 4, 5, 3 ]

//ARRAY.from()
