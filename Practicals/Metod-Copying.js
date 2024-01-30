const jonas = {
  firstname: "Jonas",
  year: 2002,
  calcAge: function () {
    console.log(2024 - this.year);
  },
};

const matilda = {
  firstname: "Matilda",
  year: 2013,
};

//Assigning a new property in the matilda object . We are assigning  a new function to the object matilda

matilda.calcAge = jonas.calcAge;

console.log(matilda); // matilda will have firstname and calcage

matilda.calcAge(); /// 2024- matilda.year

// Example 2

const f = jonas.calcAge; // The f will contain the function body of jonas calcage
f(); // undefined ..cuz this.year will not know what does this point to which object
