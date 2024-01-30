const arr = [31, 68, 99, 56];
//Check if atleast one element is divisble by 2 say

const check = arr.some((x) => x % 5 === 0);
console.log(check);

//EVERY

const check1 = arr.every((x) => x % 2 === 0);
console.log(check1);
