// let a = {};
// let b = { key: "b" };
// let c = { name: "c" };
// a[b] = 123;
// console.log(a);
// a[c] = 456;
// console.log(a);

let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "some value" };
console.log(obj1.key);
console.log(obj2.key);
console.log(obj3.key);
