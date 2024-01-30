console.log("Hello");
setTimeout(() => {
  console.log("Timer"), 0;
});
Promise.resolve(console.log("Starting promise 1"))
  .then((res) => {
    for (let i = 0; i <= 100000; i++) {}
    console.log("Promise 2");
    return "Shwta";
  })
  .then((res) => console.log(res));

//   Hello
// Starting promise 1
// Promise 2
// Shwta
// Timer
