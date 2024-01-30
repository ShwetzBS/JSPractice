const items1 = ["gas", "lighter", "oil", "veggies"];
const item2 = ["utensils", "cutlery", "knife"];

const [pizza, , risoto, ...foodItems] = [...items1, ...item2];
console.log(pizza, risoto, foodItems);
