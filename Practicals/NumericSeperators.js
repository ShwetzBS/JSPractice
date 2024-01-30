//....  Numeric Seperators give readability...

const bigNumber = 14_000; //Basically _ will be ignored
console.log(bigNumber);

const x = 1_35_000;
console.log(x);

console.log(3.14_456); //3.14456

// ........... CHECK ............. IMP
//console.log(3._1456); //Syntax error (Numeric sepertos arent allowed here)
//console.log(_3.14) ; //Error
//console.log(3.14_); //Error
//console.log(3_.14); //Error
//console.log(3.14__89); //Error ..we cant place 2(__) in a row

// console.log(Number('3.14_78')) ; NaN

// ..............IMP..............
//console.log(Number.parseInt(45_00)); 4500 ...

console.log(Number.parseInt(45_00)); //4500
console.log(parseInt(34_00)); //3400
