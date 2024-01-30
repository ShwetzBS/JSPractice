// async function foo() {
//   const result1 = await new Promise((resolve) =>
//     setTimeout(() => resolve("1"))
//   );
//   return result1;
// }
// let output = foo();
// console.log("Output is" + JSON.stringify(output)); //{}

async function foo(name) {
  console.log(name, "start");
  console.log(name, "middle");
  console.log(name, "end");
  return "Testing";
}

const test = foo("name");
console.log(test); // return a promise
