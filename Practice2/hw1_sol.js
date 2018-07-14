// JavaScript Homework #1 - Scope

// Below are some JavaScript scope related questions.

// 1.
function f() {
    var a = 10;
    if (a > 5) {
        a = 7;
    }
    console.log(a);
}

// When executed, what value will be logged?
/*
    ans: 7, b/c 'var' takes the latest value
*/

// 2. 
function f() {
    if(true) {
        var a = 5;
    }
    console.log(a);
}
f();
// What value will be logged by function f?
/*
    ans: 5
*/

// 3.
function f() {
    a = 3;
}
f();
console.log(a);
/*
    ans: 3
*/

// 4.
var a = 5;
function first() {
    a = 6;
}

function second() {
    console.log(a);
}
first();
second();

// What value of a will be logged?
/*
    ans: 6
*/

// 5. 
var a = 5;
function f() {
    var a = 7;
    console.log(a);
}
/*
    ans: 7 
*/

// 6.  ????
var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a);
/*
    ans: 1, b/c function b will be hoisted to the top before var a = 1, function has higher hoist priority
*/




