---
description: 'Promise, JSON'
---

# 7-23 Lec

## Promise

* Represents the eventual completion of an async operation
  * 'token' / 'proxy'/'promise'
  * it contains resulting value, as a result.
* Must be in one of these states:
  * pending: initial
  * fulfilled: success
  * rejected: failture
* It is guaranteed that a promise object will either succeed or fail
* In es6, promise is a new data type 
  * e.g `let p = new Promise(.....);`

e.g.

```javascript
// e.g. 1
let axios = require('axios');
var data = 'start';

let p = axios.get('url');
p.then(function(res) {
    data = res.data;
    console.log(data);
    console.log(res.status); // e.g. 200
});

p.catch(err => console.log(err));
console.log(data);

// e.g. 2
let axios = require('axios');
var data = 'start';

axios.get('url')
.then(function(res) {
    data = res.data;
    console.log(data);
    console.log(res.status); // e.g. 200
});
.catch(err => console.log(err));

console.log(data);

// e.g. 3
// Chain the promises


// e.g. 4 general structure to create promise
let p = new Promise(fn);
function fn (resolve, reject) {
    execute async op;
    if op successful: {call resolve()}
    else {call reject()}
}
// OR
let p = new Promise((resolve, reject) => {
    setTimeout (function() {
        resolve("Success!");
    }, 250);
});

p.then((successMsg) => {
    console.log("Yay!" + successMsg) }
})

console.log('Async op is done');


```

## JSON

* JavaScript Object Notation
* A simplified form of XML and lightweight
* Language independent
* self describing
* Used to transport data between a server and its clients \(web page\)
* Used to store data
  * such as in NoSQL databases

e.g.

* Data is in name/value pairs
* Data is separated by commas
* Curly braces hold objects
* Square brackets hold arrays
* No constrictions between each object

JSON and JS objects:

* The JSON format, representing in a string, is syntactically identical to the code for creating JS objects.
* As such, it is very easy to convert them to and from JS objects
* Convert it to a JS object:
  * `let obj = JSON.parse(text)`
* Convert a JS object to JSON:
  * `let jsonText = JSON.stringify(obj); // result has no white space`

Interact with server vid HTTP:

* New HTTP request will convert response data automatically to JSON object, instead of JSON String

## Large Scale Development:

* **Module** system and namespace introduced in es6

### Modules \(in ES6\):

* Module: a single, entire JS file and can be imported by another
* A module file might contain a class definition, a set of related classes, a library of utility functions, or just a script of code to execute 
* Module:

  * contents is not wrapped in any special construct
  * Use export/import for each js file

  e.g.1 export and import

```javascript
// in ex1.js
export class Person{
    ...
}

// or 
class Person{
    ...
}
// export 

// in ex2.js
import * as obj from './path_to_ex1.js'
// OR
import {....., ....., .....} from './path_to_ex1.js
```

e.g.2 module.exports and require

see code example

### Namespace: 

Used to differentiate same name variables among different js files.

