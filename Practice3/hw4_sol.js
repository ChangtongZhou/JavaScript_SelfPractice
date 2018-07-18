// Discuss possible ways to write a function isInteger(x) that determines if x is an integer.
function isInteger(x) {
  if (x === parseInt(x, 10)){  // 10 here means base 10
    return true
  }else {
    return false;
  }
}

// Method 2:
function isInteger2(x) {
  return typeof x === 'number' && (x % 1 === 0);
}

// console.log(isInteger(1); // true
// console.log(isInteger("sure")); // false
// console.log(isInteger(1.1)); // false

// --------------------------------------------------------------------------------
// Write a sum function which will work properly when invoked using either syntax below.
function sum(x, y) {
  if (typeof y === "undefined") {
    return function(y) {
      return x+y;
    };
  }
  return x+y;

}
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3)(4));  // Outputs 5

// --------------------------------------------------------------------------------
// What will the following code output to the console:

console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
// output: 3628800
// Explain your answer.
// original function:
(function f(n) {
  return (function(){
    if(n>1) {
      n*f(n-1);
    }else {
      n
    };
  })
})(10);

// Closure Recursion:
/**
  f(10)
    10*f(9)
      10*9*f(8)
        10*9*8*f(7)
          10*9*8*7*f(6)
            ........
              10*9*8*7*6*.....1
  => 10! = 3628800
*/

// --------------------------------------------------------------------------------
// Consider the code snippet below. What will the console output be and why?
(function(x) {
    return (function(y) {
        		console.log(x);
    	    })(2)
})(1);
// output: 1, because of iFFE
