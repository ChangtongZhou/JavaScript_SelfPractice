function getOne(num) {
	if (num === 1) return 0;
	if (num % 2 === 0) {
		return getOne(num/2)+1;
	} else if (num % 2 !== 0) {
		return getOne(num*3+1) + 1;
	}
}

console.log(getOne(3));