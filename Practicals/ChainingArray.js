const dogData = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (dogArray) {
  const finalValue = dogArray
    .map(function (element) {
      return element <= 2 ? 2 * element : 16 + element * 4;
    })
    .filter(function (ele) {
      return ele > 18;
    })
    .reduce(function (acc, elem, index, originalarray) {
      return acc + elem / originalarray.length;
    }, 0);
  console.log(finalValue);
};
calcAverageHumanAge(dogData);
