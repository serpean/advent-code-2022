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
}
let i = 0;
while(i < rucksacks.length) {
    const firstBag = rucksacks[i];
    const secondBag = rucksacks[i + 1];
    const thirdBag = rucksacks[i + 2];
    const commonElement = firstBag.split('').find(letter => secondBag.includes(letter) && thirdBag.includes(letter));
    const letterPriority = alphabetWithPriorityMap[commonElement];
    totalSum += letterPriority;
    i += 3;
}
console.log("totalSum:", totalSum);