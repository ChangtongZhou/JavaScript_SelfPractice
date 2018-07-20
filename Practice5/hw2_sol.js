let data = require('./coordinates.json');

function getDistance(x1, y1, x2, y2) {
  let xs = x1 - x2;
  let ys = y1 - y2;
  return Math.sqrt(xs*xs + ys*ys);
}


function sortByDistance(x, y){
  data.sort((a, b) => {
    let arrA = a.value.split(",");
    let arrB = b.value.split(",");
    return getDistance(arrA[0], arrA[1], x, y) - getDistance(arrB[0], arrB[1], x, y);
  })
}

// Testing:
sortByDistance(6, 33)
console.log(data);
console.log(`data size: ${data.length} \n`);

function testDistance(data, x, y){
  data.forEach(o => {
    let arrO = o.value.split(",");
    let dis = getDistance(arrO[0], arrO[1], x, y);
    console.log(`dis: ${dis}`);
  })
}
testDistance(data, 6, 33);
