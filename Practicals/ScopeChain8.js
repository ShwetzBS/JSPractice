"use strict";

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName} you are ${age} years old`;
    console.log(output);

    //......BLOCK SCOPE........

    if (birthYear >= 1986 && birthYear <= 1996) {
      var millinial = true;
      const isit = "yes";
      console.log(`So you are a millenial`);

      function add(x, y) {
        return x * y;
      }
    }
  }
}
//add(2, 3); // Will not work as it is block scoped . It belongs just in the if {} block . bUT THIS IS ONLY WHEN YOU USE USE STRICT
