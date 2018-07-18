// Object-Oriented Programming
//
// Using ES2015, define the classes of Shape, TwoDShape, and Triangle as in 6-oop-inheritance.js.

class Shape {
  constructor() {
    this.name = 'Shape';
  }

  toString1() {
    return this.name;
  }
}

class TwoDShape extends Shape{
  constructor() {
    super();
    this.name = '2D shape';
  }

  toString2() {
    return this.name+" in toString2";
  }

}

class Triangle extends TwoDShape{
  constructor(side, height) {
    super();
    this.name = 'Triangle';
    this.side = side;
    this.height = height;
  }

  getArea() {
    return this.side * this.height / 2;
  }
}


var my = new Triangle (5, 10);

console.log(`my.name = ${my.name}`);
console.log(`my.getArea() = ${my.getArea()}`);
console.log(my.toString2());

var mstr = my.toString1();
console.log(mstr);

var two = new TwoDShape();
console.log(`two.name = ${two.name}`);
console.log(`two.toString1() = ${two.toString1()}`);
console.log(`two.getArea() = ${two.getArea()}`); // two.getArea is not a function defined in TwoDShape
