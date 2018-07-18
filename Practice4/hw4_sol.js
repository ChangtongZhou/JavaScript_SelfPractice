/**
  In OOP, a singleton class is very useful and defined as a class that can only have a single instance.
  If more than one instance is created, the class should either return the same previously instantiated object, or an error.

  Using both ES5 and ES2015, implement a singleton classes and prove it is indeed singleton.

*/

// ES5
function Singleton() {
  if (!(this instanceof Singleton)) return new Singleton;
  if (Singleton.hasOwnProperty('singleton')) return Singleton.singleton;
  Object.defineProperty(Singleton, 'singleton', {
    value: this,
    enumerable: false,
    writable: false,
    configurable: false
  });
}

var a = Singleton(), b = new Singleton, c = new Singleton;
console.log(a === b); // true
console.log(b === c); // true
console.log(a === c); // true
console.log(a === Singleton.singleton); // true
console.log(b === Singleton.singleton); // true
console.log(c === Singleton.singleton); // true

// ES6
class Singleton {
  constructor() {
    if (Singleton.hasOwnProperty('singleton')) return Singleton.singleton;
    Object.defineProperty(Singleton, 'singleton', {
      value: this,
      enumerable: false,
      writable: false,
      configurable: false
    })
  }
}

const a = new Singleton, b = new Singleton, c = new Singleton;
console.log(a === b); // true
console.log(b === c); // true
console.log(a === c); // true
console.log(a === Singleton.singleton); // true
console.log(b === Singleton.singleton); // true
console.log(c === Singleton.singleton); // true
