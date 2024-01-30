//Write a program that receives a list of variable names written in underscore_case
//and convert them to camelCase.
//The input will come from a textarea inserted into the DOM (see code below to
//insert the elements), and conversion will happen when the button is pressed

const final_array = [];
const x = function (...arr) {
  for (let i = 0; i < arr.length; i++) {
    let [a, b] = arr[i].split("_");
    first_string = a.toLowerCase();

    second_string =
      b.toLowerCase().charAt(0).toUpperCase() + b.toLowerCase().slice(1);
    final_string = first_string + second_string;
    console.log(final_string.padEnd(20) + "*".repeat(i)); //20 is the total length of the string
  }
};

x(
  "underscore_case",
  "first_name",
  "Some_Variable",
  "calculate_AGE",
  "delayed_departure"
);
