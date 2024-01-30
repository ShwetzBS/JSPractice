//Kind of a constructor function
const Vehicle = function (name, modelName) {
  this.vehicleName = name;
  this.vehicleModel = modelName;
};

//Creating instances of Vehicle object

const ford = new Vehicle("Ford", "123XB");
const kia = new Vehicle("Sonet", "SONET2009");

//Creating a function which will by default be a part of Vehicle Object

Vehicle.prototype.printVehicle = function () {
  return this.vehicleName + " " + this.vehicleModel;
};

console.log(ford.printVehicle()); //Ford 123XB

// proto property

console.log(kia.__proto__);
console.log(Vehicle.prototype.isPrototypeOf(ford)); //true
//.....................console.log(ford.prototype.isPrototypeOf(Vehicle)); //Error
console.log(Vehicle.prototype.isPrototypeOf(Vehicle)); //false

console.log(ford.hasOwnProperty("printVehicle")); //false
