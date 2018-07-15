function mapSum(str) {
  let dict = {};
  let res = {};
  // method 1, return an object like a dictionary that has each letter with their corresponding num value
  let num = 1;
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    let letter = String.fromCharCode(i);
    dict[letter] = num;
    num++;
  }

  let arr = str.split(" ");
  let sarr = arr.map(s => s.split(""));

  sarr.forEach(function(s){
    let sum = 0;
    console.log(`s: ${s}`);
    s.forEach(function(letter) {
      // console.log(`letter: ${letter}`);
      if (letter in dict) {
        sum += dict[letter];
      }
    });
    // console.log(`sum: ${sum}`);
    if (!(res.hasOwnProperty(sum))) {
      res[sum] = [];
    }
    res[sum].push(s.join(""));
  });
  console.log(res);

  // method 2, return an array of objects that has each letter with their corresponding num value
  // let a = Array(122- 97 + 1).fill().map((_, idx) => 97 + idx); // 122: 'z'.charCodeAt(0), 97: 'a'.charCodeAt(0)
  // let new_arr = a.map((num, idx) =>{
  //   var dict = {};
  //   dict[String.fromCharCode(num++)] = idx+1;
  //   return dict;
  // })
  // console.log(new_arr);

}


let str = "abc cde adb dfb def ee abcd cc";
mapSum(str);
