const pascal = function (counter) {
    if (counter < 1 || !Number.isInteger(counter)) return;
    if (counter === 1) {
        return [1];
    }

    const previousLine = pascal(counter - 1);
    const newLine = [];
    for (let i = 0; i < counter; i++) {
        let value = previousLine[i - 1] + previousLine[i];
        if (Number.isNaN(value)) {
            value = 1;
        
        }
        newLine.push(value);
    }
    return newLine;
};

// Do not edit below this line
module.exports = pascal;
