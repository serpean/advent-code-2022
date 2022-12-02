const fs = require('fs');
const path = require('path');
const input = process.env.input;
const numbers = input.split('\n');
let totalPoints = 0;
console.log(numbers)

const rivalToPlayerTranslatorMap = {
    'A': 'X',
    'B': 'Y',
    'C': 'Z',
}

const winList = [
    'AY', // rock loses to paper
    'BZ', // paper loses to scissors
    'CX', // scissors loses to rock
]

const playPointDict = {
    'X': 1, // rock
    'Y': 2, // paper
    'Z': 3, // scissors
}

for(let i = 0; i < numbers.length; i++) {
    let playPoints = 0;
    if (numbers[i].includes(' ')) {
        const [rival, player] = numbers[i].split(' ');
        const key = `${rival}${player}`;
        if (winList.includes(key)) {
            playPoints += 6;
        } else if (rivalToPlayerTranslatorMap[rival] === player) {
            playPoints += 3;
        }
        playPoints += playPointDict[player];
        console.log('playPoints:', playPoints)
        totalPoints += playPoints;
    }
}

console.log("totalPoints:", totalPoints);
