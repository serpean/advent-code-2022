const input = process.env.input;
const rucksacks = input.split('\n');
console.log(rucksacks)
// map from a to z with priority form 1 to 26
const lowerAlphabetWithPriorityMap = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i)).reduce((acc, curr, i) => {
    acc[curr] = i + 1;
    return acc;
}, {});
// map form A to Z with priority form 27 to 52
const upperAlphabetWithPriorityMap = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i)).reduce((acc, curr, i) => {
    acc[curr] = i + 27;
    return acc;
}, {});
// merge the two maps
const alphabetWithPriorityMap = {
    ...lowerAlphabetWithPriorityMap,
    ...upperAlphabetWithPriorityMap,
}
let totalSum = 0;
for(let i = 0; i < rucksacks.length; i++) {
    // split in half
    const left = rucksacks[i].slice(0, rucksacks[i].length / 2);
    const right = rucksacks[i].slice(rucksacks[i].length / 2);
    console.log('left:', left)
    console.log('right:', right)
    // find common letter
    const commonLetter = left.split('').find(letter => right.includes(letter));
    const letterPriority = alphabetWithPriorityMap[commonLetter];
    totalSum += letterPriority;
}
console.log("totalSum:", totalSum);