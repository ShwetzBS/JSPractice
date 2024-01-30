const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};

Car.prototype.brake = function () {
  console.log(this.speed - 5);
};

const bmw = new Car("bmw", 120);
const mercedes = new Car("mercedes", 95);

bmw.accelerate();
mercedes.accelerate();
bmw.brake();
mercedes.brake();
