const reverseString = function (string) {
	let wordReversed = "";
	for (let i = string.length - 1; i >= 0; i--) {
		wordReversed += string[i];
	}
	return wordReversed;
};

console.log(reverseString("hello world"));

// Do not edit below this line
module.exports = reverseString;
