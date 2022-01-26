function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
  this.calcPerimeter = function() {
    return this.sides * this.sideLength
    };
  };

// Write your code below here

const square = new Shape("square", 4, 5);
console.log(square);
console.log(square.calcPerimeter());

const triange = new Shape('triangle', 3, 3);
console.log(triange);
console.log(triange.calcPerimeter());