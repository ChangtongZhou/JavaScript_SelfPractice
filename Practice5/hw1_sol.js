// 1.	Write a JavaScript function to get the first element of an array.
function getFirst(arr) {
  if (arr && arr.length > 0) {
    return arr[0];
  } else {
    return null;
  }
}

// console.log(getFirst(a))

// 2.	Write a JavaScript function to filter false, null, 0 and blank values from an array.
function filterArray (arr) {
  return arr.filter(x => x);
}

let newArray = filterArray([0, 1, 2, 3, 'ate', '', false]);
console.log(newArray);
