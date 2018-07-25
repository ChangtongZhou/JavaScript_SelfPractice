/**
  Missing Ranges

  Given a sorted integer array where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

  For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"].

*/

function findMissingRanges(nums, lower, upper) {
  let res = [];
  let str;
  if (nums.length < 1) return [lower, upper];
  let c = lower;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > c) {
      let diff = nums[i] - c - 1;
      if (diff > 0) {
        str = `${c}->${nums[i]-1}`;
      } else {
        str = `${c}`;
      }
      res.push(str);
      c = nums[i] + 1;
    } else if (nums[i] === c) {
      c++;
    }
  }

  if (c === upper) {
    res.push(`${upper}`);
  } else if (c < upper) {
    res.push(`${c}->${upper}`);
  }

  return res;
}

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));
