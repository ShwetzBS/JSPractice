const arr1 = [10, 20, 80, 90];

const callback = (x) => x % 2 === 0;

const checkRsult = arr1.every(callback);
console.log(checkRsult);
