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
Shoe.createdAny(); // true
s1.equals(s2); // false
```



