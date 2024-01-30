const x = "abrakadabra";
x.replace("a", "x");
console.log(x);
// Keeps x the same cuz its immutable

//Rather do this
const b = "Chappa";
const d = b.replace("p", "a");
console.log(d);

//Replaces only the first appearance
