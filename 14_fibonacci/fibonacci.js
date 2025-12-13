const fibonacci = function (position) {
	let index = typeof position !== "number" ? parseInt(position) : position;
	if (index < 0) return "OOPS";
	if (index === 0) return index;

	const sequence = [0, 1];
	for (let currentIndex = 2; currentIndex <= index; currentIndex++) {
		sequence[currentIndex] =
			sequence[currentIndex - 1] + sequence[currentIndex - 2];
	}

	return sequence[index];
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
