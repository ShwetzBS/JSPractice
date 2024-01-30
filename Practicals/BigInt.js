console.log(Number.MAX_SAFE_INTEGER); //9007199254740991 --This is the biggest number JS can possible store .Bigger than this it will lose presicion

// BigInt was introduced in ES2020 and it is a primitive value
// Use'n' or BigInt() to declare
console.log(345485900978879910073576388181878162991n); //345485900978879910073576388181878162991n
console.log(BigInt(345485900978879910073576388181878162991)); //345485900978879928076452900651367661568n  //Gives a small warning

// ...................IMPORTANT ..............

// For Operations using BigInt you can't mix BigInt with normal numbers

const huge = 56788900n;
const normal_number = 23;
//console.log(huge * normal_number); //Error - Cannot mix BigInt and other types, use explicit conversions

console.log(huge * BigInt(normal_number)); //This works

console.log(20n > 15); //true
console.log(20n === 20); //false === doesnt do type coersion
console.log(20n == 20); //true --- == does type coersion

// Math operations don't work on BigInt ..eg Math.sqrt(25n) --error

console.log(huge + `is amazing `); //56788900is amazing  -- see the n after the bigInt number is missing

console.log(10n / 3n); //3n --returns the closest
//console.log(10n / 3); ...Cannot mix BigInt and other types, use explicit conversions

console.log(10 / 3); //3.3333333333333335
