// Consider the following code. What will the output be, and why?
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

/** output:
  1
  undefined
  2
*/
// Explaination:
// Because x is defined in catch block only, while y is treated as global object
