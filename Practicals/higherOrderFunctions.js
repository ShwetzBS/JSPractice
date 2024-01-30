const replaceString = function (str) {
  str.replace(/ /g, "").toUpperCase();
  return str;
};

const upperString = function (str) {
  const [firstWord, ...others] = str.split(" ");
  return [firstWord.toLowerCase(), ...others].join(" ");
};

//Higher Order Functions
const higherOrderFunction = function (str, fn) {
  console.log(`Before calling function ${str} and function name is ${fn.name}`);
  console.log(`...After function called...`);
  console.log(`${fn(str)}`);
};

higherOrderFunction("JAVASCRIPT is fun Funn!!", upperString); // Basically upperString here is a callback function ie we dont call them manually ,JS engine does it when its their turn
