const repeatString = function (str, num) {
	if (num < 0) return "ERROR";

	let repeatStr = "";
	for (let i = 0; i < num; i++) {
		repeatStr += str;
	}
	return repeatStr;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
