console.log(add(2, 3));
console.log(exp1(2, 3));
console.log(arrow(3, 4));

function add(x, y) {
  return x + y;
}

const exp1 = function (a, b) {
  return a + b;
};

const arrow = (a, b) => {
  return a + b;
};

// ...............OUTPUT.................

//5
//  Cannot access 'exp1' before initialization  ---mainly because its assigned to a 'const' and not initialised is its default behavouir
