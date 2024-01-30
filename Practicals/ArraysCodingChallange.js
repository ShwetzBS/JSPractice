// const dogsJuliaArray = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

const dogsJuliaArray = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const checkDogsAge = function (arrJulia, arrKate) {
  const newJuliaArray = arrJulia.slice();
  newJuliaArray.shift();
  newJuliaArray.splice(2, 2);
  const finalArray = newJuliaArray.concat(dogsKate);
  finalArray.forEach(function (element, index) {
    const check = element >= 3 ? "adult dog" : "puppy";
    console.log(`Dog number ${index + 1} is a ${check}`);
  });
};

checkDogsAge(dogsJuliaArray, dogsKate);
