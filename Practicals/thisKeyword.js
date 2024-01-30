console.log(this); //Window -- when you open script.js in browser

// Example-2
const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAge(1994);

//.........Output....

//30
//undefined --cuz the function isnt called by any specific object
