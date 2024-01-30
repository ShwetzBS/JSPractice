console.log("Set Timeout Function");
const Ingredients = ["Papaya", "Apple", "Mango"];
const x = setTimeout(
  (ing1, ing2) => console.log(`The ingredients are ${ing1} and ${ing2}`),
  3000,
  ...Ingredients
);

console.log("Done");

if (Ingredients.includes("Papaya")) {
  clearTimeout(x);
}
