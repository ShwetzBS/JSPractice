const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1 . Loop over the 'dogs' array containing dog objects, and for each dog, calculate
//the recommended food portion and add it to the object as a new property. Do
//not create a new array, simply loop over the array. Forumla:
//recommendedFood = weight ** 0.75 * 28. (The result is in grams of
//food, and the weight needs to be in kg)

dogs.forEach(
  (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 0.28))
);
//console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
//little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
//the owners array, and so this one is a bit tricky (on purpose)

dogs
  .filter((dog) => dog.owners.includes("Sarah"))
  .map((ele) =>
    ele.curFood >= (ele.curFood <= ele.recommendedFood * 0.1) &&
    ele.curFood >= ele.recommendedFood * 0.1
      ? console.log("Eating fine")
      : console.log("Not eating fine")
  );

// Create an array containing all owners of dogs who eat too much
//('ownersEatTooMuch') and an array with all owners of dogs who eat too little
//('ownersEatTooLittle')

const eatingTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .map((ele) => ele.owners)
  .flat();
console.log(eatingTooMuch);

const eatingTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .map((ele) => ele.owners)
  .flat();
console.log(eatingTooLittle);

//Create a shallow copy of the 'dogs' array and sort it by recommended food
//portion in an ascending order (keep in mind that the portions are inside the
//array's objects �)

const dogsCopySorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopySorted);
