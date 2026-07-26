const contains = function (object, searchValue) {
	for (const key in object) {
		const value = object[key];
        
		if (Object.is(value, searchValue)) {
			return true;
		}

        if (typeof value == "object" && value !== null) {
            if (contains(value, searchValue)) {
                return true;
            }
        }
	}
    return false;
};

// Do not edit below this line
module.exports = contains;
