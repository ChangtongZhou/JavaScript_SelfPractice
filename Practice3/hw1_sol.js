// What would the following lines of code output to the console? And explain why.
var foo = {bar: {deep: 'pony', dangerousSetInnerHTML: 'lol'}};
var {bar: {deep, dangerousSetInnerHTML: sure}} = foo;
console.log(deep); // pony
console.log(sure); // lol

// --------------------------------------------------------------------------------
function es6 () {
  var left = 10;
  var right = 20;
  if (right > left) {
    [left, right] = [right, left];
  }
  console.log(`left: ${left}, right: ${right}`);
}
// Output: left = 20, right = 10;

// --------------------------------------------------------------------------------
var {foo} = {bar: 'baz'};
console.log(foo); // undefined

// --------------------------------------------------------------------------------
var key = 'such_dynamic'
var {[key]: foo} = {such_dynamic: 'bar'}; // {such_dynamic: foo} = {such_dynamic: 'bar'}
console.log(foo); // bar
// b/c [key] is treated as a variable

// --------------------------------------------------------------------------------
var [a] = [];
console.log(a); // undefined
var [b=10] = [undefined]
console.log(b); // 10
var [c=10] = [];
console.log(c); // 10

// --------------------------------------------------------------------------------
function getCoords () {
  return {
    x: 10,
    y: 22
  }
}
var {x, y} = getCoords();
console.log(x); // 10
console.log(y); // 22

// --------------------------------------------------------------------------------
function random ({ min=1, max=300 }) {
  return Math.floor(Math.random() * (max - min)) + min
}
console.log(random({})) // 215
console.log(random({max: 24})) // 7

// --------------------------------------------------------------------------------
// To concatenate two strings through spread
let str1 = "abc";
let str2 = "def";
let str3 = [...str1, ...str2].join("");
console.log(str3);

// --------------------------------------------------------------------------------
// To combine multiple arrays through spread
let a1 = [1, 3, 5];
let a2 = [2, 4, 9];
let a3 = [0, 1, 2];
let a4 = [...a1, ...a3, ...a2];

// --------------------------------------------------------------------------------
// To select certain parameters over the others in a function
function foo(a, b, c, d, e) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
}
var args = [1, 2];
foo(-1, ...args, 3, ...[4]);
// -1
// 1
// 2
// 3
// 4

// --------------------------------------------------------------------------------
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // {a: 3, b: 4}

// --------------------------------------------------------------------------------
function compare(a, b) {
    return a - b;
}

let result = compare(...[1, 2]);
console.log(result); // -1
