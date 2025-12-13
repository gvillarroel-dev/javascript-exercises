const palindromes = function (str) {
	const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

	let cleanedString = str
		.toLowerCase()
		.split("")
		.filter((char) => validCharacters.includes(char))
		.join("");

	const reversedStrnig = cleanedString.split("").reverse().join("");

	return cleanedString === reversedStrnig;
};

console.log(palindromes("A car, a man, a maraca"));

// Do not edit below this line
module.exports = palindromes;
