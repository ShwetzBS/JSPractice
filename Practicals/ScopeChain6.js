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
    }

    console.log(millinial);
    console.log(isit); // Will not work
  }

  printAge();
}

const firstName = "Shweta";

console.log(calcAge(1994));

//.............. Doesn't work as const isit variable is BLOCK SCOPED ......
