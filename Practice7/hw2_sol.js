/**
  1. Write a JavaScript program to list the properties of any given JavaScript object.
  Sample object:
  var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
  };
  Sample Output: name,sclass,rollno
*/

function getProps (obj) {
  console.log(Object.getOwnPropertyNames(obj));
}

var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12
};
//getProps(student);
//  returns an array of all properties (including non-enumerable properties except for those which use Symbol)
// found directly upon a given object.

// ===========================================================================================================

/**
  2. Write a JavaScript program to get the length (# of properties) of any given JavaScript object.
  Sample object :
  var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
  };
  Sample Output: 3
*/
function getPropsNum (obj) {
  console.log(Object.keys(obj).length);
}
// getPropsNum(student);

// ===========================================================================================================

// 3. Write a JavaScript function to print all the methods in any given JavaScript object.
var obj = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12,
  func1: function() {
    console.log("I am function 1");
  },
  func2: function() {
    console.log("I am function 2")
  }
}

function findFuncs (obj) {
  let props = Object.keys(obj);
  props.forEach((x) => {
    if (typeof obj[x] === 'function') {
      console.log(x);
    }
  })
}

// findFuncs(obj);

// ===========================================================================================================

// 4. Write a JavaScript function to parse any given URL into meaningful pieces.
function parseURL (url) {
  let match = url.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
  return match && {
    url: url,
    protocol: match[1],
    host: match[2],
    hostnmae: match[3],
    port: match[4],
    pathname: match[5],
    search: match[6],
    hash: match[7]
  }
}

// console.log(parseURL("http://example.com:3000/pathname/?search=test#hash"));
// ===========================================================================================================

// 5. Write a JavaScript function to retrieve all the names of any given object's own and inherited properties.

// ES5
function Person(name) {
  this.name = "Nicole";
}

function Student(studentId) {
  // Call constructor of superclass to initialize superclass-derived members.
  // Person.call(this, name);

  // Initialize subclass's own members.
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


let st = new Student(123);
// console.log(Object.getOwnPropertyNames(st));

// ES6
class Animal {
  constructor() {
    this.name = "animal";
  }
}

class Cat extends Animal{
  constructor(color) {
    super();
    this.color = color;
  }

}

let theCat = new Cat("white");
console.log(Object.getOwnPropertyNames(theCat));
// var person1 = new Person();
// var person1 = Object.create(Person);
// Person.prototype.age = 10;
// Person.prototype.school = "SJSU";

// function getAllPros(obj) {
//   for (let key in obj) {
//     console.log(key);
//   }
// }

// getAllPros(person1);
