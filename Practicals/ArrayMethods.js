const arr = ["a", "b", "c", "d", "e"];
arr.splice(1, 2);
console.log(arr);

const arr2 = [1, 2, 3, 4, 5];
arr2.reverse();
console.log(arr2);

const arr3 = [2, 5, 67];
const arr4 = [7, "m", 8];
console.log(arr3.concat(arr4));
//Or
console.log(...arr3, ...arr4);
console.log(arr3, arr4);

const arr5 = ["a", "b", "c", "d"];
console.log(arr5.join("-"));
console.log(arr5);
