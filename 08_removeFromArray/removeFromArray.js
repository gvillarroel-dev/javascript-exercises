const removeFromArray = function (array, ...args) {
	let newArray = [];

	array.map((item) => {
		// if the element is NOT in the passed arguments, then it is added to the new array
		if (!args.includes(item)) {
			newArray.push(item);
		}
	});

	return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
