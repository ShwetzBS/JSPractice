const lufthansa = {
  flightName: "Lufthansa",
  iataCode: "LUF",
  bookings: [],
  bookflight(flightNum, passengerName) {
    console.log(
      `${passengerName} has booked ${flightNum} on flight ${this.flightName} with iatacode ${this.iataCode}`
    );
    this.bookings.push({
      flight: `${this.flightName}${this.iataCode}`,
      Name: `${passengerName}`,
    });
  },
};

const copyFunction = lufthansa.bookflight;

//copyFunction("LHS", "Shweta"); // ..........This will not work as this keyword in function bookflight will be undefined cuz you arent using an object to call anything

copyFunction.call(lufthansa, "LHS", "Sarah");
console.log(lufthansa);

//............You can do it this way too...

const params = ["RHS", "SHWETA"];
copyFunction.call(lufthansa, ...params);
console.log(lufthansa);

//Apply method also works but usually not used .It accepts parameters just as arrays

copyFunction.apply(lufthansa, params);
console.log(lufthansa);
