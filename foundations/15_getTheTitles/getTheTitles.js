const getTheTitles = function (books) {
	// --- Solution 1: Using for...of loop ---
	// let titlesArray = [];
	// for (let book of books) {
	//     titlesArray.push(book.title);
	// }
	// return titlesArray;

	// --- Solution 2: Using map ---
	return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
