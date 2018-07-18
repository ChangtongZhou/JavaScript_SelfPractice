/**
  Design and implement a TwoSum class. It should support the following methods: add and find.

  •	add - Add the number to an internal data structure.
  •	find - Find if there exists any pair of numbers which sum is equal to the given input.
  •	remove – Remove all occurrences of the given number from the internal data structure and return the number of occurrences removed.

  For example,

  add(1);
  add(3);
  add(5);
  find(4) -> true
  find(7) -> false
*/

class TwoSum {
  constructor() {
    this.arr = []
  }

  add(num) {
    this.arr.push(num);
  }

  find(target) {
    let hashMap = {};
    for (let value of this.arr) {
      if (hashMap.hasOwnProperty(value)) {
        return true;
      }
      hashMap[target - value] = value;
    }
    return false;
  }

  remove(num) {
    let count = 0;
    for (let value of this.arr) {
      if (value === num) {
        let idx = this.arr.indexOf(value);
        this.arr.splice(idx, 1);
        count++;
      }
    }
    return count;
  }
}

let mySum = new TwoSum;
mySum.add(1);
mySum.add(3);
mySum.add(5);
mySum.add(3);
console.log(mySum.arr);

console.log(mySum.find(4));
console.log(mySum.find(7));
console.log(mySum.remove(3));
console.log(mySum.arr);
