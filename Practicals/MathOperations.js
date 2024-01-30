console.log(Math.sqrt(25));
console.log(8 ** (1 / 3)); //Cube Root

// Max Operation

console.log(Math.max(1, 4, 5, 67, 89));
console.log(Math.max(1, 2, 3, "90", 78)); //Does Parsing internally //90
console.log(Math.max(56, 78, "90px", 89)); //NaN ..it can't parse 90px to 90
console.log(Math.max("58px", 90, 78)); //NaN

console.log(Math.PI * Number.parseFloat("4.5px") ** 2);

//.............ROUNDING ..............

console.log(Math.trunc(99.9)); //99
console.log(Math.round(23.3)); //23
console.log(Math.trunc(34.5)); //34
console.log(Math.round(23.8)); //24

// ......CEILING ..... TAKES UPPER VALUE

console.log(Math.ceil(99.9)); //100
console.log(Math.ceil(24.1)); //25

// ...........FLOOR .................. TAKES LOWER VALUE OF THE INPUT NUMBER

console.log(Math.floor(99.9)); //99
console.log(Math.floor(24.1)); //24

// .....ALL METHODS DO TYPE COERSION ..........

console.log(Math.floor("23.89px")); //NaN

console.log(Math.floor("23.9")); //23 ... Did type Coersion Internally

console.log((2.34).toFixed(3)); //2.340 ...This is string output  cuz toFixed() gives the output as a String
console.log(+(99.9).toFixed(0)); // 100
