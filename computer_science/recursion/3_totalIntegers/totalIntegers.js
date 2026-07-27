const totalIntegers = function (object) {
    if (typeof object !== "object" || object === null) return;
    
    let accumulator = 0;
    for (const key in object) {
        const value = object[key];
        
        if (Number.isInteger(value)) {
            accumulator++;
        }
        
        if (typeof value === "object" && value !== null) {
            accumulator += totalIntegers(value);
        }
    }
    return accumulator;
};

// Do not edit below this line
module.exports = totalIntegers;
