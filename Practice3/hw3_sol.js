// Look at following codes about passing values into functions. Indicate what’s the output and why
function f(x) {
  console.log(`inside f: x=${x}`);
  x = 5;
  console.log(`inside f: x=${x} (after assignment)`);
}
let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`);

/** output:
  before calling f: x=3
  inside f: x=3
  inside f: x=5 (after assignment)
  after calling f: x=3
*/

// --------------------------------------------------------------------------------
function f(o) {
  o.message = `set in f (previous value: '${o.message}')`; // set properites of o
}
let o = {
  message: "initial value"
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);

/** output:
  before calling f: o.message="initial value"
  after calling f: o.message="set in f (previous value: initial value)"
*/

// --------------------------------------------------------------------------------
function f(o) {
  o.message = "set in f";
  o = {
    message: "new object!"
  };
  console.log(`inside f: o.message="${o.message}" (after assignment)`); // here o is the new o with new object message
}
let o = {
  message: 'initial value'
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);

/** output:
  before calling f: o.message="initial value"
  inside f: o.message="new object!" (after assignment)
  after calling f: o.message="set in f"
*/
