const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (numbers) {
	return numbers.reduce(
		(accumulator, currentNumber) => accumulator + currentNumber,0);
};

const multiply = function (numbers) {
	return numbers.reduce((product, currentValue) => product * currentValue);
};

const power = function (base, exponent) {
	return base ** exponent;
};

const factorial = function (number) {
	let counter = 1;
	for (let i = number; i > 0; i--) {
		counter *= i;
	}
	return counter;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
