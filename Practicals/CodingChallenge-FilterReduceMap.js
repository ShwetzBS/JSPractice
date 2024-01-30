const data1 = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (dogArray) {
  const humanage = dogArray.map(function (x) {
    if (x <= 2) return 2 * x;
    else return 16 + x * 4;
  });
  const filteredAdult = humanage.filter(function (x) {
    return x >= 18;
  });
  const averageAge = data1.reduce(
    (accumulator, currentVale) => accumulator + currentVale,
    0
  );
  const avg = averageAge / data1.length;

  console.log(humanage);
  console.log(filteredAdult);
  console.log(avg);
};

console.log(calcAverageHumanAge(data1));
