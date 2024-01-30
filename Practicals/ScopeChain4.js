"use strict";

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const sentence = `${firstName} is ${age} years old`;
    console.log(sentence);
  }

  printAge();
}

//...........Works fine.............

// const firstName = "Shweta";
// calcAge(1994);

//..........Won't work if...........

calcAge(1994);
const firstNAme = "Shweta";
