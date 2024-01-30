//Building a promise

const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve("You won");
  } else {
    reject("You did not win");
  }
});
console.log(typeof lotteryPromise); //object

//Basicaaly the promise constructor takes in one executor function
//On executing that function it passes two arguments to it : resolve an rejject which are functions too
//Whatever you pass in the resolve function it will be the return type of the promise which can be consumed with the then method .You call resolve
//when you think that your job is succesfull
//What you pass in reject() will be the return type to the catch block(that value of reject that you passed will be the value given to the catch)

//resolve and reject (pass and fail) parameter will be passed by the promise itself when it calls the executor function
//You have to provide an implementation/return value to the resolve and reject methods

lotteryPromise
  .then((state) => console.log(state))
  .catch((err) => console.error(err));
