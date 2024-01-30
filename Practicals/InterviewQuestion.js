var x = 10;
let a = 20;
const c = 30;

function check() {
  console.log(x);

  console.log(a);
  console.log(c);

  var x = 20;
  let a = 4;
  const c = 90;
}

check();
console.log(x);
console.log(a);
console.log(c);
