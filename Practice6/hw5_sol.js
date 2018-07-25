/**
  LC. 186 Reverse Words in a String II

  Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.

  The input string does not contain leading or trailing spaces and the words are always separated by a single space.

  For example,

  Given s = "the sky is blue",

  return "blue is sky the".

  Could you do it in-place without allocating extra space?

  We have updated the function signature to accept a character array, so please reset to the default code definition by clicking on the reload button above the code editor.
  Also, Run Code is now available!


*/

/** sol:
  1. reverse every character of each letter when encounter a white space (except the last letter) in str
  2. reverse every character of the last letter in str
  3. swap every character from start and end at the same time until start and end pointer meets
*/

function reverseString2 (s) {
  str = s.split('');
  
  let i = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[j]=== ' ') {
      swap(str, i, j-1);
      i = j+1;
    }
  }

  swap(str, i, str.length-1);
  swap(str, 0, str.length-1);
  return str.join('');
}

function swap(str, i, j){
  while (i < j) {
    let tmp = str[i];
    str[i] = str[j];
    str[j] = tmp;
    i++;
    j--;
  }
}

console.log(reverseString2("the sky is blue"));
