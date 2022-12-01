// read file input1.txt
const fs = require('fs');
const input = fs.readFileSync('input1.txt', 'utf8');
// split input into array of numbers by new line
const numbers = input.split('/n');
// loop through numbers
let top = 0;
for (let i = 0; i < numbers.length; i++) {
    // sum until you find a empty line
    console.log(numbers[i]);
}
