const boardPassengers = function (n, wait) {
  setTimeout(function () {
    pergroup = 34;
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups,each with ${pergroup} passengers`);
  }, wait * 1000); //1000 ms
  //settime takes 2 parameters , one is a function which needs to be excuted after the time mentioned in the second parameter
  //Set timeout is a callback function basically
  console.log(`will start boarding in ${wait} seconds`);
};

let pergroup = 1000;
boardPassengers(10, 2);

//Evn though pergroup is initialised twice ie once outside function (global scope) and once inside setimeout it gets the value of 34 not 1000 (local scope)
