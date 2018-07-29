let html_p = document.getElementById('sprial_result');

function spiralOrder(n) {
  let res = [];
  for (let k = 0; k < n; k++) {
    res.push([]);
  }

  if (!n || n < 1) return res;

  let i = 0, len = n, elem = 1;
  let dir = 0;

  while ( i <= len) {
    if (dir === 0) { // move right
      for (let j = i; j <= len-1; j++) {

        res[i][j] = elem++;
      }
      dir = 1;
    }
    if (dir === 1) { // move down
      for (let j = i+1; j <= len-1; j++) {
        res[j][len-1] = elem++;
      }
      dir = 2;
    }
    if (dir === 2) { // move left
      for( let j = len-2; j >= i; j--) {
        res[len-1][j] = elem++;
      }
      dir = 3;
    }
    if (dir === 3) { // move up
      for (let j = len-2; j >= i+1; j--) {
        res[j][i] = elem++;
      }
      dir = 0;
    }

    i++;
    len--;
  }

  // html_p.innerHTML = res;
  html_p.appendChild(document.createTextNode(res));
  console.log(res);

  return res;

}
