var shape = {
  x: 0,
  y: 0,
  move: function (x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
  },
};

// rectangle - object created from shape
var rectangle = Object.create(shape);
console.log(rectangle);
console.dir(shape);

//rectangle properties
rectangle.width = 10;
rectangle.height = 20;

// rectangle method
rectangle.area = function () {
  return this.width * this.height;
};
