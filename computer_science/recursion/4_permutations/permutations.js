const permutations = function(array, currentPosition  = 0, allPermutations = []) {
    // base case
    if (currentPosition === array.length) {
        allPermutations.push([...array]);
        return allPermutations;
    }

    // recursion case
    for (let candidateIndex = currentPosition; candidateIndex < array.length; candidateIndex++) {
        [array[currentPosition], array[candidateIndex]] = [array[candidateIndex], array[currentPosition]];
        
        permutations(array, currentPosition + 1, allPermutations);
        [array[candidateIndex], array[currentPosition]] = [array[currentPosition], array[candidateIndex]];
    }
    return allPermutations;
};
  
// Do not edit below this line
module.exports = permutations;
