/**
  Event loop practice:
*/

// 1. What is the result of the following code? Explain your answer.
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
// printing();

/** Ans:
  1
  4
  3
  2
*/

// 2. Guess the output sequence and why?
// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }

/** Ans:
  4
  4
  4
  4
*/
// Explaination:
// index   task queue
// i = 0, setTimeout()
// i = 1, setTimeout()
// i = 2, setTimeout()
// i = 3, setTimeout()
// i = 4

// 3. Guess the output sequence and why?
// way1
for (var i = 0; i < 4; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 0)
  })(i)
}

// way2

for (var i = 0; i < 4; i++) {
  setTimeout(function(i_local) {
    return function() { console.log(i_local); }
  }(i), 500);
}

// ...............................................
for (var i = 0; i < 4; i++) {
  setTimeout((function(i_local) {
    return function() { console.log(i_local); }
  })(i), 500);
}
/** Ans:
  0
  1
  2
  3
*/

// 4. Guess the output sequence and why?
// console.log("Before the timeout");
// setTimeout(function() { console.log("In the timeout function"); }, 0);
// console.log("After the timeout");
/** Ans:
  Before the timeout
  After the timeout
  In the timeout function
*/

// 5. Used by Google and Amazon: what will the following code output?
// const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

/** Ans:
  Index: 4, element: undefined
  Index: 4, element: undefined
  Index: 4, element: undefined
  Index: 4, element: undefined
*/

// Explaination:
// index     task queue
// i = 0     [setTimeout()]
// i = 1     [setTimeout(), setTimeout()]
// i = 2     [setTimeout(), setTimeout(), setTimeout()]
// i = 3     [setTimeout(), setTimeout(), setTimeout(), setTimeout()]
// i = 4

// 6. Write a stop timer that starts with a given number of seconds,
// and stops after the number reaches zero
// (for each second, you can console.log the current number).

function stopTimer (n) {
  let timer = setInterval(() => {
    console.log(`current num: ${n--}`);
    if (n < 0) clearInterval(timer);
  }, 1000);
}

stopTimer(5);
