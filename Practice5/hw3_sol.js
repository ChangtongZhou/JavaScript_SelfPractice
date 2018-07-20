/**
  Regex practice:
*/
// example 1
const myString = "99 bottles of beer on the wall " +
"take 1 down and pass it around -- " +
"98 bottles of beer on the wall.";

// const match = myString.match(/[\-0-9a-z.]/ig);
// console.log(match); // split the string character by character into an array
// explaination: means start at the beginning of the string and match - find digit 0-9 and character a-z and '.'
// =============================================================================================================

// const match = myString.match(/[^\-0-9a-z.]/);
// console.log(match);
// output:
// [ ' ',
//   index: 2,
//   input: '99 bottles of beer on the wall take 1 down and pass it around -- 98 bottles of beer on the wall.' ]
// =============================================================================================================

// const match = myString.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);
// console.log(match);
// Output:
// [ '99',
//   index: 0,
//   input: '99 bottles of beer on the wall take 1 down and pass it around -- 98 bottles of beer on the wall.' ]
// =============================================================================================================

// const match = myString.match(/[0-9]+/);
// console.log(match);
// Output:
// [ '99',
//   index: 0,
//   input: '99 bottles of beer on the wall take 1 down and pass it around -- 98 bottles of beer on the wall.' ]

// =============================================================================================================
// =============================================================================================================
// example 2
// const stuff =
// 	'hight: 9\n' +
// 	'medium: 5\n' +
// 	'low: 2\n';
//
// const levels = stuff.match(/:\s*[0-9]/g);
// console.log(levels); // [ ': 9', ': 5', ': 2' ]

// =============================================================================================================

// const messyPhone = '(505) 555-1515';
// const neatPhone = messyPhone.replace(/\D/g, '');
// console.log(neatPhone); // 5055551515
// explaination: \D Find a non-digit character and replace it with ''

// =============================================================================================================

// const field = ' something ';
// const valid = /\S/.test(field);
// console.log(valid); // true
// explaination: \S: Find a non-whitespace character

// =============================================================================================================
// const input = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
// const match = input.match(/\d{5}.*/);
// console.log(match);
// Output:
// [ '55532. Phone: 555-555-2525.',
//   index: 37,
//   input: 'Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.' ]

// =============================================================================================================
// const equation = "(2 + 3.5) * 7";
// const match = equation.match(/\(\d \+ \d\.\d\) \* \d/);
// console.log(match);
// Output: [ '(2 + 3.5) * 7', index: 0, input: '(2 + 3.5) * 7' ]

// const text = "Visit oreilly.com today!";
// const match = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
// console.log(match);
// Output: [ 'oreilly.com', index: 6, input: 'Visit oreilly.com today!' ]
// explaination:
// i: Perform case-insensitive matching
// ?=n: Matches any string that is followed by a specific string n

// =============================================================================================================
// const promo = "Opening for XAAX is the dynamic GOOG! At the box office now!";
// const bands = promo.match(/(?:[A-Z])(?:[A-Z])\2\1/g);
// console.log(bands);
// Output: null

// =============================================================================================================
// const input = "One two three";
// input.replace(/two/, '($`)'); 		// "One (One ) three"
// input.replace(/\w+/g, '($&)'); 		// "(One) (two) (three)"

// =============================================================================================================

// const input = "It was the best of times, it was the worst of times";
// const beginning = input.match(/^\w+/g); 		// "It"
// const end = input.match(/\w+$/g); 			// "times"
// const everything = input.match(/^.*$/g); 		// sames as input
// const nomatch1 = input.match(/^best/ig);
// const nomatch2 = input.match(/worst$/ig);
// console.log(beginning); // [ 'It' ]
// console.log(end); // [ 'times' ]
// console.log(everything); // [ 'It was the best of times, it was the worst of times' ]
// console.log(nomatch1); // null
// console.log(nomatch2); // null

// =============================================================================================================
const input = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input.match(/^\w+/mg); 		// ["One", "Two", "Three", "Four"]
const endings = input.match(/\w+$/mg); 		// ["line", "lines", "lines", "Four"]

const inputs = [
"john@doe.com", 				// nothing but the email
"john@doe.com is my email", 			// email at the beginning
"my email is john@doe.com", 			// email at the end
"use john@doe.com, my email", 		// email in the middle, with comma afterward
"my email:john@doe.com.", 			// email surrounded with punctuation
];

const emailMatcher =
/\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));
// returns [
// "<a href="mailto:john@doe.com">john@doe.com</a>",
// "<a href="mailto:john@doe.com">john@doe.com</a> is my email",
// "my email is <a href="mailto:john@doe.com">john@doe.com</a>",
// "use <a href="mailto:john@doe.com">john@doe.com</a>, my email",
// "my email:<a href="mailto:john@doe.com>john@doe.com</a>.",
// ]
