"use strict";

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const sentence = `${firstName} is ${age} years old`;
  }
  return sentence;
}

const firstName = "Shweta";
console.log(calcAge(1994));

// Throws error saying sentence is not defined as we didn't call the function printAge()
