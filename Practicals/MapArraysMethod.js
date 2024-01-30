const INR = [56, 78, 90, 89];
const returnedMap = INR.map((m) => m * 85);
console.log(INR);
console.log(...returnedMap);

//...If we had to use for each......//

const emptyArray = [];
for (const x of INR) {
  const y = x * 86; // says cant access x before initialisation
  emptyArray.push(y);
}
console.log(emptyArray);

//MAP does give the element,index,originl array in its function callback

const arr1 = [34, 67, 89, 90];
const finalString = arr1.map(function (element, index, arr) {
  return `The element at position ${index + 1} is ${element}`;
});
console.log(finalString); //This is am array
