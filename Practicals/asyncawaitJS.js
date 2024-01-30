//...........EXAMPLE 1...............
// async function x() {
//   return new Error("This is it");
// }

// const check = x();
// check.then((x) => console.log(x));

//.....EXAMPLE 2 .......

// const a = async function a() {
//   return new Promise((resolve, reject) => {
//     resolve("We are done");
//   });
// };

// async function getData() {
//   return a;
// }

// getData().then((x) => console.log(x));

// ........EXAMPLE 3 ..................

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Waiting for 5 sec");
    resolve("5 sec work done");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Waiting for 10 sec");
    resolve("10 sec work done");
  }, 10000);
});

async function handlePromise() {
  console.log("Inside handle p1");
  const x = await p1;
  console.log("Line 3");
  console.log(x);

  console.log("Line handle p2");
  const y = await p2;
  console.log("Line 5");
  console.log(y);
}

handlePromise();
