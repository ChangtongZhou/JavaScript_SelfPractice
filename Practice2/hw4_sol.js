/**
Write a JS function: 

o	there are unlimited numbers of 1c, 5c, 25c, 50c
o	pick 48 coins to have 1 dollar
o	identify 2 solutions
o	print out 2 solutions, each of which has 48 coins.

**/

//enumeration problem （枚举算法）:
// Method.1: brute force
// e.g.
// i + 5j + 25k + 50l = 100
// i + j + k + l = 48

function getCoin1(){
	let i = 0, j = 0, k = 0, l = 0;
	let round = 2;
	for (i = 0; i <= 100; i++) { // at most 100 one cent
		for (j = 0; j <= 20; j++) { // at most 20 five cents
			for (k = 0; k <= 4; k++) { // at most 4 twenty-five cents
				for (l = 0; l <= 2; l++) { // at most 2 fifty cents
					if (round <= 0) {
						break;
					}

					if ((i + j + k + l) === 48 && (i + 5 * j + 25 * k + 50 * l) === 100) {
						console.log(`1c: ${i}, 5c: ${j}, 25c: ${k}, 50c: ${l}`);
						round--;
					}
				}
			}
		}
	}
}




// Method.2: brute force
function getCoin2() {
	let i = 0, j = 0, k = 0, l = 0;
	let round = 2;
	for (i = 0; i <= 100; i++) { // at most 100 one cent
		for (j = 0; j <= 20; j++) { // at most 20 five cents
			for (k = 0; k <= 4; k++) { // at most 4 twenty-five cents
				l = 48 - i - j - k;
				if (round <= 0) {
					break;
				}

				if ((i + 5 * j + 25 * k + 50 * l) === 100) {
					console.log(`1c: ${i}, 5c: ${j}, 25c: ${k}, 50c: ${l}`);
					round--;
				}
				
			}
		}
	}
}

// getCoin1();
// console.log("--------------------------------");
// getCoin2();

// function getADollar (coins, target) {
// 	let res = [];
// 	console.log("start");
// 	dfs (coins, 0, target, [], res);
	
// }


// function dfs(coins, startIndex, target, combo, res) {
    
    
// 	if(combo.length === 48) {
// 		if(target === 0) {
// 			res.push(Object.assign([], combo)); 
// 			console.log("res now is: ", res);
// 		}
		
// 	} 

//     for (let i = startIndex; i < coins.length; i++) {
//     	if (coins[i] > target) break;
// 		combo.push(coins[i]);
// 		dfs(coins, i, target - coins[i], combo, res);
//     }
    
//     combo.splice(0, -1);
// }

// getADollar([1, 5, 25, 50], 100);