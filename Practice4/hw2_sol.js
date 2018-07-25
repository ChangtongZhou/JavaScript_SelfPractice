/**
  Object-Oriented Programming

  Problem 1:
  1.	Create a class called shape that has the property type and a getType() method.
  2.	Define a Triangle() class who is a subclass of shape. Triangle() class should have three own properties—a, b, and c, representing the lengths of the sides of a triangle.
  3.	Add a new method to its prototype called getPerimeter() to get a triangle's perimeter.
  4.	Test your implementation with the following code:
  > var t = new Triangle(1, 2, 3);
  > t.constructor === Triangle;

  true
  > shape.prototype.isPrototypeOf(t);
        true
  > t.getPerimeter();
       6
  > t.getType();

  "triangle"
  5.	Loop over t showing only own properties and methods (none of the prototype's).
*/

class Shape {
  constructor(type) {
    this.type = type;
  }

  getType() {
    return this.type;
  }

}

class Triangle extends Shape {
  constructor (a, b, c){
    super();
    this.type = 'Triangle';
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }
}

var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle);
console.log(Shape.prototype.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());

/**
Problem 2:
Make the following code work:
> [1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();

[2, 4, 1, 8, 9, 6, 5, 3, 7]

*/

Array.prototype.shuffle = function() {
  let len = this.length, i;
  while (len) {
    i = Math.floor(Math.random() * len--);
    [this[len], this[i]] = [this[i], this[len]];
  }
  return this;
}
// [1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle());
