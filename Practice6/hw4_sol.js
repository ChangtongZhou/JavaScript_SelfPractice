// The following recursive code will cause a stack overflow if the array list is too large.
// How can you fix this and still retain the recursive pattern?

// var list = readHugeList();

let list = [1, 2, 3, 4];

// var nextListItem = function() {
//     var item = list.pop();
//
//     if (item) {
//         // process the list item...
//         console.log(item);
//         nextListItem();
//     }
// };


// nextListItem();

// Use Memoization
let nextListItem = function(theList) {
  let memo_store = {};
  let list = theList;
  let index = list.length - 1;

  return function getItem() {

    console.log(`list: ${list}`);
    let item;
    if (memo_store[index]) {
      item = memo_store[index];
    } else {
      let item = list.pop();
      index--;
      if(item) {
        memo_store[index] = item;
        console.log(memo_store[index]);
        nextListItem(list);
      }
    }
    // return item;
  }
  // return getItem;
}

console.log(nextListItem(list)());
