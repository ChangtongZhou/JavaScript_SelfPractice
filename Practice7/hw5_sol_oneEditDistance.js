/**
  Given two strings S and T, determine if they are both one edit distance apart.
*/

// Thought:
/**
  Method 1:
  1. 两个字符串的长度之差大于1，那么直接返回 False
  2. 两个字符串的长度之差等于1，那么长的那个字符串去掉一个字符，剩下的应该和短的字符串相同
  3. 两个字符串的长度之差等于0，那么两个字符串对应位置的字符只能有一处不同。
*/

function isOneEditDistance(s, t) {
  if (s === t) return false;
  let diff = Math.abs(s.length - t.length);
  if ( diff > 1) return false;
  for (let i =0; i < Math.min(s.length, t.length); i++) {
    if (s.charAt(i) !== t.charAt(i)) {
      if (diff === 0) return s.substring(i+1) === t.substring(i+1);
      if (diff === 1) {
        if (s.length > t.length) return s.substring(i+1) === t.substring(i);
        else return s.substring(i) === t.substring(i+1);
      }
    }
    return false;
  }
  return true;
}

/**
  Method 2:
  如果遇到不同的时候，这时我们看两个字符串的长度关系，如果相等，那么我们比较当前位置后的字串是否相同，
  如果s的长度大，那么我们比较s的下一个位置开始的子串，和t的当前位置开始的子串是否相同，
  反之如果t的长度大，那么我们比较t的下一个位置开始的子串，和s的当前位置开始的子串是否相同。
  如果循环结束，都没有找到不同的字符，那么此时我们看两个字符串的长度是否相差1

*/
console.log(isOneEditDistance("ab", "acb"));
console.log(isOneEditDistance("cab", "ad"));
console.log(isOneEditDistance("1203", "1213"));
