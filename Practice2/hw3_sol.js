//A programmer wrote following code. Please write the actually code after JavaScript hoisting and explain why. 

//-------------------
var x;

if (x !== 3) { 
	console.log(y); // undefined
	var y = 5; 
	if (y === 5) {
		var x = 3;
	}
	console.log(y); // 5
}
if (x === 3) {
	console.log(y); //5
}
//-------------------
// Ans:
var x;
var y;
if (x !== 3) {
	console.log(y);
	y = 5;
	if (y === 5) {
		x = 3;
	}
	console.log(y)
}

if (x === 3) {
	console.log(y);
}



//-------------------
var x = 3;
if (x === 3) {
	var x = 2; 
	console.log(x); // 2
} 
console.log(x);// 2
//-------------------
// Ans:
var x = 3;
if (x === 3) {
	x = 2;
	console.log(x);
}
console.log(x);
