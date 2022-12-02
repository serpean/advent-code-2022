const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, 'input1.txt'), 'utf8');
const numbers = input.split('\n');

const stack = {}

for (let i = 0; i < numbers.length; i++) {
    let sum = 0;
    let j = i;

    while (numbers[j] && numbers[j] !== '') {
        sum += parseInt(numbers[j]);
        j++;
    }
    stack[sum] = 1;
}

console.log(Object.keys(stack).slice(-3));
console.log(Object.keys(stack).slice(-3).reduce((acc, curr) => acc + parseInt(curr), 0));