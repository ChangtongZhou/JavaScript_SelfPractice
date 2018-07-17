---
description: UNIT IV - Object and OOP
---

# 7-16 Lec

## OOP:

* Object:
  * A container that can represent data for software
  * Has property as state - value, type
  * Has method as behavior - function
  * private vs. public
* Class / Instance:
  * Classes are in fact "special [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)", and just as you can define [function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) and [function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function), the class syntax has two components: [class expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class) and [class declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class).
* Relationship / Reference: 
  * any kind of associations between two instances/classes
  * You can use reference
    * Inheritance - single/multiple:
      * Child class can access to all the visible properties and functions of their parent class
* OOP vs. OOD:
  * JS Object, out of box, is not truely OOP even in ES6
* An important difference between **function declarations** and **class declarations** is that function declarations are [hoisted](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) and class declarations are not. You first need to declare your class and then access it, otherwise code throw a [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
* Why OOD:
  * for code reusability

## Different kind of objects

* A native object:
  * Data types like arrays, functions, dates, and Regex
* A host object:
  * see lecture 补充
* A user-defined object:
  * customized object by your own

## Creating Object \(Instance\)

## New Operator:

* Don't use on primitive data types: number, string, boolean
* Must be followed by a function invocation
* A function used in this way is called a constructor
* Built-in constructors for native types

## Getting and Setting properties

## Everything is Object, internally

* Every variable can be considered as an object
* For example strings and arrays have member function

## Class in ES6:

```javascript
class Shoe {
    constructor(brand, model, size) {
        this.brand = brand; // instance variable
        this.model = model;
        this.size = size;
        Shoe.count++; // static variable, one per class
    }
    
    // Apply only on class
    static createdAny(){
        return Shoe.count > 0;
    }
    
    // Apply on instance
    equals(obs) {
        return obj instanceof Shoe &&
                this.brand === obj.brand &&
                this.model === obj.model &&
                this.size 
    }
}

Shoe.count = 0; // static variable
let s1 = new Shoe ('Nike', 'Free 5', 12); // instance
let s2 = new Shoe ('Nike', 'Free 6', 15);
Shoe.createdAny(); // true, static function
s1.equals(s2); // false, instance function
```

### Define a subclass in ES6:

```javascript
class RunningShoe extends Shoe{
    constructor(brand, model, size, type) {
        super(brand, model, size); // get parent's constructor
        this.type = type;
        this.miles = 0;
    }
    addMiles(miles) {
        this.miles = miles;
    }
    shouldReplace() {
        return this.miles >= 500;
    }
}

let rs = new RunningShoe ('Nike', 'Free 6', 15, 'lightweight trainer');
rs.addMiles(100);
console.log(rs.brand); // 'Nike'

```

## Constructor function in ES5 

* **Constructor pattern**: 
  * Use a 'Constructor' function, which extends system-defined constructors, such as Array and Object

```javascript
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = jobb;
    this.sayName = function(){
        console.log(this.name);
    }
}

var person1 = new Person ("Nicole", 22, "Software Engineer");
var person2 = new Person ("Gred", 27, "Doctor");
```

* See lecture 补充
* **Prototype Pattern**:
  * Prototype is System defined property for each js defined function
  * Each function is created with a prototype properties and functions
  * Can be used for shared properties
  * Declaration:

```javascript
function Person(){};
Person.prototype.name = "Nicole";
Person.prototype.age = 22;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

var person1 = new Person();
person1.sayName(); // Nicole

var person2 = new Person();
person2.sayName() // Nicole
console.log(person1.sayName === person2.sayName); // true
```

* **Access Values:**
  * Steps to retrieve a value from a property of an object \(such as Person.name\):
    * If a property with the given name exists on the object/instance , return its value
    * Otherwise, go to the object's prototype, if the property exists there, return its value
    * Keeps looking until it reaches the end of prototype chain
* **Update Values**:

```javascript
function Person(){};
Person.prototype.name = "Nicole";
Person.prototype.age = 22;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

var person1 = new Person();
person1.name = "Rucy"; 
console.log(person1.name); // Rucy
var person2 = new Person();
console.log(person2.sayName); // Nicole
```

* **Delete Values:**

```javascript
function Person(){};
Person.prototype.name = "Nicole";
Person.prototype.age = 22;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

var person1 = new Person();
person1.name = "Rucy"; 
delete person1.name;
console.log(person1.name); // Nicole
```

* **Another way of set prototypes:**

```javascript
// Less safe, it might be overwritten by an existing object property
Person.prototype = {
    name: "Nicole",
    age: 22;
    job: "Software Engineer",
    sayName: function() {
        console.log(name);
    }
}
```

* **Inheritance:**
  * Achieved by "Prototype Chaining" because the properties and methods in a prototype is ''inherited" to its instance
  * `TwoDShape.prototype = new Shape(); // here Shape is parent, TwoDShape is child`
  * `Triangle.prototype = new TwoDShap(); // here TowDShape is parent, Triangle is child`

##  



