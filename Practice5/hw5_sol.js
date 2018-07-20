/**
  1. Implement int sqrt(int x). Compute and return the square root of x.
*/

// 1) Guess some value g for y and test it.
// 2) Compute x / g.
// 3) If x / g is close enough to g, return g. Otherwise, try a better guess.

function sqrt(x, g) {
  if (!g) {
    g = x / 5.0; // initial guess at the square root
  }

  let ng = (g + (x/g))/2.0;
  if (g == ng) {
    return g;
  }

  return sqrt(x, ng);
}

// console.log(sqrt(42) === Math.sqrt(42));
// console.log(sqrt(6) === Math.sqrt(6));
// console.log(sqrt(100) === Math.sqrt(100));

/**
  2.  Given a binary array, find the maximum number of consecutive 1s in this array.
  Example 1:
  Input: [1,1,0,1,1,1]
  Output: 3
  Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
  Note:
  •	The input array will only contain 0 and 1.
  •	The length of input array is a positive integer and will not exceed 10,000
*/
function maxOnes(arr) {
  let allOnes = {};
  let res = arr.reduce((max, val) => {
    if (val === 0) {
      allOnes['1'] = 0;
    } else if(allOnes['1']){
      allOnes['1']++;
    } else{
      allOnes[val] = 1;
    }
    max = Math.max(max, allOnes['1']);
    return max;
  }, -1);
  return res;
}

// console.log(maxOnes([1,1,1,1,1,1,0,1,1,1,1,0,1,1,1]));

/**
  3. Write a function to find the longest common prefix string amongst an array of strings.
*/

function longestCommonPrefix(array){
    let sortedArr = array.sort(),
    a1= sortedArr[0],
    a2= sortedArr[sortedArr.length-1],
    len= a1.length,
    i= 0;
    while(i<len && a1.charAt(i)=== a2.charAt(i)) i++;
    return a1.substring(0, i);
}

// console.log(longestCommonPrefix(['abcdefgh', 'abba', 'abc', 'a']));
// console.log(longestCommonPrefix(['']));
// console.log(longestCommonPrefix(['ab']));
// console.log(longestCommonPrefix(['dsf', 'dsf']));
// console.log(longestCommonPrefix(['street', '', 'start']));

/**
  4. Write a program that outputs the string representation of numbers from 1 to n.
  But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
  For numbers which are multiples of both three and five output “FizzBuzz”.
*/

function fizzBuzz(n) {
  let res = [];
  if (n < 1) return res;
  let i = 1;
  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0){
      res.push("FizzBuzz");
    } else if (i % 3 === 0){
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(i.toString());
    }
    i++;
  }
  return res;
}

console.log(fizzBuzz(15));
