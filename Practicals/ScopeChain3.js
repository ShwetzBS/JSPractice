"use strict";

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const sentence = `${firstName} is ${age} years old`;
  }

  printAge();
  return sentence;
}

const firstName = "Shweta";
console.log(calcAge(1994));

// Throws error even after calling printAge() as sentence is in the scope of printage , can't be accessed by calcAge function
