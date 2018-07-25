/**
  Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
  For example,
  •	Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
  •	Given word1 = “coding”, word2 = “practice”, return 3.
  •	Given word1 = "makes", word2 = "coding", return 1.
  Note:
  You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
*/

let words = ["practice", "makes", "perfect", "coding", "makes"];

function shortestDistance (words, word1, word2) {
  let idx1 = -1, idx2 = -1;
  let min = Number.MAX_VALUE;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      idx1 = i;
      if (idx2 != -1) {
        min = Math.min(min, Math.abs(idx1 - idx2));
      }
    } else if (words[i] === word2) {
      idx2 = i;
      if (idx1 != -1) {
        min = Math.min(min, Math.abs(idx1 - idx2));
      }
    }
  }
  return min;
}

console.log(shortestDistance(words, "coding", "practice"));
console.log(shortestDistance(words, "makes", "coding"));
