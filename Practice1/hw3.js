console.log(0.1 + 0.2);
// 0.30000000000000004
// This is the problem of floating point calculations. 0.1 and 0.2 and 0.3
// are not exactly representable in Javascript floats, and internally, computers
// use a format (binary floating-point with base 2) that cannot accurately represent
// a decimal number that is base 10

// How to fix it?
+(0.1 + 0.2).toFixed(1); // 0.3
// Explain: the numbers are added together, returning the erroneous floating number,
// then set using toFixed as a string "0.3". Finally the + symbol casts the string
// back to a valid number, so it can be worked with again.

console.log((0.1 + 0.2 == 0.3));
// false
// JS uses 64-bit floating point representation, which is the same as Java's double.
// 0.1 + 0.2 is bigger than the rational number 0.3

console.log(1 +  "2" + "2");
// 122
// Here "+" means concatination, not a unary plus

console.log(1 +  +"2" + "2");
// 32
// Here "+" before 2 casts the string to a valid number, it becomes a unary plus

console.log(1 +  -"1" + "2");
// 02
// Here "-" before 1 casts the string to a valid number, it becomes a unary minus

console.log(+"1" +  "1" + "2");
// 112
// Here the first + is treated as a string concatination, since the second 1 is also a string

console.log( "A" - "B" + "2");
// NaN2
// "A" and "B" are not integers, use unary operations between them will return NaN

console.log( "A" - "B" + 2);
// NaN
// Any string that is not an integer, use unary operations between them will return NaN
// Also, NaN + a number is also NaN

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1
// || returns true if either operand is true, if both false, returns false
// Here 0 is falsy, 1 is truthy, so return 1

console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1
// Here 1 and 2 are both true, return the first truthy operand, so return 1

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0
// returns true if both operands are true, otherwise, returns false
// Here 0 is false, 1 is true, so return 0

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// The && logical operator will return the last value if all other values are truthy
// else it will return the first falsy value

console.log(false == '0')
// true
// check the same value

console.log(false === '0')
// false
// Same value but different type
