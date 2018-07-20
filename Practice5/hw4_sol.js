// Write a function to enforce the following password rules. The main check should be done through RegExp. If a given password passes all the rules the function returns true; Otherwise false.
// These are the rules:
// •	at least one uppercase letter
// •	at least one number
// •	at least one lowercase letters
// •	only letters and numbers
// •	length is between 6 and 10

var tests = [
  '123',         // false, too short
  '01234567890', // false, too long
  'A1aA1a',      // true
  '123456',
  'abcdef',
  '123abc',
  '123ABC',
  '%sfsdf898A',
  '89sfdsAAsdCfsBB'
];

for(var test in tests) {
  if(tests[test].match(/^(?=.+[a-z])(?=.+[A-Z])(?=.+\d)\w{6,10}$/)) {
    console.log(tests[test] + " true");
  } else {
    console.log(tests[test] + " false");
  }
}
