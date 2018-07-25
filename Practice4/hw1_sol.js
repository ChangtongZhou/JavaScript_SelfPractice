// What will the code below ouput to the console and why?
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // bar
        console.log("outer func:  self.foo = " + self.foo); // bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // undefined, b/c 'this' here is pointing to the inner function
            console.log("inner func:  self.foo = " + self.foo); // bar
        }());
    }
};
myObject.func();
/**
  Output:
  outer func:  this.foo = bar
  outer func:  self.foo = bar
  inner func:  this.foo = undefined
  inner func:  self.foo = bar
*/

// -----------------------------------------------------------------------------------
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        			return this._name;
    			}
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); // 'undefined', b/c 'this' here points to global object
console.log(hero.getSecretIdentity()); // 'John Doe'

// What is the issue with this code and how can it be fixed.
// Ans: "this" refers to the global object, because the function gets invoked at the global scope
// How to fix:
// Use .bind
var hero = {
  _name: 'John Doe',
  getSecretIdentity: function() {
    return this._name;
  }
}

// Way 1:
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// Way 2:
var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity.call(hero));
console.log(hero.getSecretIdentity());

// -----------------------------------------------------------------------------------
// Assuming d is an “empty” object in scope, say:

var d = {};

// …what is accomplished using the following code?

[ 'zebra', 'horse' ].forEach(function(k) {
				d[k] = undefined;
});
/**
  Output: d = {'zebra': undefined, 'horse': undefined}
*/

// -----------------------------------------------------------------------------------
// What is the output out of the following code? Explain your answer.

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123; // Object.prototype.toString.call(b); => [object object]
// a["object object"] = 123
a[c]=456;
// a["object object"] = 456

console.log(a[b]); // 456, b/c the object keys after getting stringified overwrite each other
// so the key is always treated as a string.
