const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, 'input1.txt'), 'utf8');
const numbers = input.split('\n');
let top = 0;
console.log(numbers)



for (let i = 0; i < numbers.length; i++) {
    let sum = 0;
    let j = i;
    console.log("i", i, numbers[i], numbers[i] !== '');

    while (numbers[j] && numbers[j] !== '') {
        console.log("j", j, numbers[j], numbers[j] !== '');
        sum += parseInt(numbers[j]);
        j++;
    }


    if (sum > top) {
        top = sum;
    }
}

console.log(top);