function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise is resolved");
    }, 2000);
  });
}

// async function in javascript
async function fun1() {
  // res holds the value after a promise is resolved
  const res = await resolveAfter2Seconds();
  console.log(res);
  console.log("After statements");
}

// calling the function
fun1();
