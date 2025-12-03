const sumAll = function (num1, num2) {
	if (
		num1 < 0 ||
		num2 < 0 ||
		!Number.isInteger(num1) ||
		!Number.isInteger(num2)
	) {
		return "ERROR";
	}

	let min = num1 < num2 ? num1 : num2; // can also use Math.min(num1, num2)
	let max = num1 > num2 ? num1 : num2; // can also use Math.max(num1, num2)
	let acc = 0;

	for (let i = min; i <= max; i++) {
		acc += i;
	}
	return acc;
};

console.log(sumAll(4, 1));

// Do not edit below this line
module.exports = sumAll;
