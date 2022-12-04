const { input } = process.env;
const numbers = input.split('\n');
let totalPoints = 0;
console.log(numbers)

const playPointDict = {
    'A': 1, // rock
    'B': 2, // paper
    'C': 3, // scissors
}
const play2playDict = {
    'X': 'lose',
    'Y': 'draw',
    'Z': 'win',
}

const playSet = {
    'A': {
        'win': 'B',
        'draw': 'A',
        'lose': 'C',
    },
    'B': {
        'win': 'C',
        'draw': 'B',
        'lose': 'A',
    },
    'C': {
        'win': 'A',
        'draw': 'C',
        'lose': 'B',
    },
}

for(let i = 0; i < numbers.length; i++) {
    let playPoints = 0;
    if (numbers[i].includes(' ')) {
        const [rival, play] = numbers[i].split(' ');
        const result = play2playDict[play];
        console.log('result:', result)
        if (result === 'win') {
            playPoints += 6;
        }
        if (result === 'draw') {
            playPoints += 3;
        }
        const youPlay = playSet[rival][result];
        console.log('rivalPlays:', rival)
        console.log('youPlay:', youPlay)
        playPoints += playPointDict[youPlay];

        
        console.log('playPoints:', playPoints)
        console.log('----------------')
        totalPoints += playPoints;
    }
}

console.log("totalPoints:", totalPoints);
