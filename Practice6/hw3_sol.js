/**
Reverse Integer
Given a 32-bit signed integer, reverse digits of an integer.
Example 1:
Input: 123
Output:  321
Example 2:
Input: -123
Output: -321
Example 3:
Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range.
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
Please use exception handling to deal with integer overflows.

*/


// check integer bit size
function reverseInt (num) {
  try{
    let res = 0;
    let prev = 0;
    let n = Math.abs(num);
    let max = 2147483647;

    // Note: parseInt((res - n % 10)/10) != prev
    // is used to check if the reverse overflowed or not.
    // The values of (rev_num - curr_digit)/10 and
    // prev_rev_num must be same if there was no
    // problem.

    while ( n > 0) {
      res = res * 10 + n % 10; // move last digit of n to the front
      if (num >= max || parseInt((res - n % 10)/10) != prev || res > max) throw new Error();
      else {
        prev = res;
      }
      n = Math.floor(n/10); // remove last digit
    }

    return num < 0 ? -res : res;

  } catch(e) {
    console.log("Your number has to be within 32-bit integer range");
    return 0;
  }
}

console.log(reverseInt(-2147483647));
console.log(reverseInt(2147483647));
console.log(reverseInt(2147483648));
console.log(reverseInt(8643847412));
console.log(reverseInt(123));
console.log(reverseInt(-123));
console.log(reverseInt(120));
