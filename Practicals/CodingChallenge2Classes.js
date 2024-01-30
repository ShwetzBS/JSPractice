class CarCl {
  constructor(make, speed) {
    this._make = make;
    this._speed = speed;
  }

  set speedUS(speedVal) {
    this._speed = speedVal * 1.6;
  }

  get speedUs() {
    return this._speed / 1.6;
  }

  accelerate() {
    console.log(`${this._make} at ${this._speed + 10}`);
  }

  brake() {
    console.log(`Speed is now ${this._speed - 5}`);
  }
}

const obj1 = new CarCl("ford", 120);
obj1.speedUS = 230;
console.log(obj1.speedUS);
console.log(obj1.accelerate());
console.log(obj1.brake());
