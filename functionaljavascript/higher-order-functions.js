function repeat(operation, num) {
	if (num <= 1) {
		operation();
	} else {
		return repeat(operation, --num);
	}
}

module.exports = repeat;

/* Official Solution

function repeat(operation, num) {
	if (num <= 0) return;
	operation();
	return repeat(operation, --num);
}

module.exports = repeat;

*/