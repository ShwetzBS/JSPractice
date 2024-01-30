function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.__proto__ = function move() {
  console.log("Moved");
};

function Rectangle() {
  console.log("Inrectangle");
}

Rectangle.__proto__ = Shape;
