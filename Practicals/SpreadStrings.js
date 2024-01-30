const string_literls = "Shweta";
console.log(...string_literls); //S h w e t a

const store_array = [...string_literls, "", "P"];
console.log(store_array);
//[
//   'S', 'h', 'w',
//   'e', 't', 'a',
//   '',  'P'
// ]

//..........Not Allowed.... Throws an error......................

//const not_allowed =`This is a ${...string_literls}`; //Not allowed
//.........Works in browsers :prompt
// const ingredients = [
//   prompt("Enter ingredient 1"),
//   prompt("Enter ingredient 2"),
//   prompt("Enter ingredient 3"),
// ];

const ingredient_list = ["salt", "sugar", "cheese"];

function makedisg(ing1, ing2, ing3) {
  console.log(`Here is your pasta made with ${ing1} , ${ing2} ,${ing3}`);
}

makedisg(...ingredient_list);
