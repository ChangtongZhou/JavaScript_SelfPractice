

JavaScript Homework #3 – Function Scope

What will the codes below output to the console and why?


function f(){
  var a = b = 3;
}

f();

console.log("a defined? " + (typeof a !== 'undefined')); // false, b/c value 3 is not assigned to a directly
console.log("b defined? " + (typeof b !== 'undefined')); // true

///////////////////////////////////////////////////////////////////////////////////////////////
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

foo1(); // {bar: 'hello'}
foo2(); // undefined, b/c if there is no `{` after `return`, JS will atomatically add a `;` after `return` and cause undefined error 

///////////////////////////////////////////////////////////////////////////////////////////////
Imagine you have this code:

var a = [1, 2, 3];

a) Will this result in a crash? // No, it won't

a[10] = 99;
b) What will this output? 
console.log(a[6]); // undefined

var num = 10,
    name = "Addy Osmani",
    obj1 = {
      value: "first value"
    },
    obj2 = {
     value: "second value"
    },
    obj3 = obj2;
 
function change(num, name, obj1, obj2) {
    num = num * 10;
    name = "Paul Irish";
    obj1 = obj2;
    obj2.value = "new value";
    console.log(`num: ${num}, name: ${name}, obj1.value: ${obj1.value}, obj2.value: ${obj2.value}, obj3.value: ${obj3.value}`)
}
 
change(num, name, obj1, obj2);
 
console.log(num); // 10 b/c this is deep copy, and this num is different from the one that is a parameter of the funciton change()
console.log(name); // Addy Osmani b/c this is deep copy, and this name is different from the one that is a parameter of the funciton change()
console.log(obj1.value); // first value
console.log(obj2.value); // new value
console.log(obj3.value); // new value

