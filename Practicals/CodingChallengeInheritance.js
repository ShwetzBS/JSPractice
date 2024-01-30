const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(`${this.speed + 20 - 0.01 * this.charge}`);
};

Car.prototype.brake = function () {
  console.log(`${this.speed - 5}`);
};

const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const obj1 = new ElectricCar("Ford", 120, "90");
obj1.chargeBattery(90);
obj1.accelerate();
obj1.brake();
