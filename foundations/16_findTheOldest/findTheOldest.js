const getAge = (yearOfBirth, yearOfDeath) => {
	if (!yearOfDeath) {
		yearOfDeath = new Date().getFullYear();
	}
	return yearOfDeath - yearOfBirth;
};

const findTheOldest = function (peopleArray) {
	return peopleArray.reduce((oldest, currentPerson) => {
		const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const youngerAge = getAge(
			currentPerson.yearOfBirth,
			currentPerson.yearOfDeath
		);

		return oldestAge > youngerAge ? oldest : currentPerson;
	});
};

// Do not edit below this line
module.exports = findTheOldest;
