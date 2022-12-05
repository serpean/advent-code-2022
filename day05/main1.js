const input = process.env.input;
const lines = input.split('\n');

class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        return this.stack.pop();
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}

// console.log(lines);
const inputDivisorLineNumber = lines.reduce((acc, curr, i) => curr === '' ? i : acc, 0);
// console.log(inputDivisorLineNumber);
// split each line in chunks of 3 characters
const midStack = lines.slice(0, inputDivisorLineNumber-1).map(line => line.match(/.{1,4}/g));
const stacks = lines[inputDivisorLineNumber - 1].split(' ').filter(x => x !== '').map((x, i) => new Stack());

// loop midStack in reverse order and push stacks
for (let i = midStack.length - 1; i >= 0; i--) {
    const stack = midStack[i];
    for (let j = 0; j < stack.length; j++) {
        const item = stack[j].trim();
        if (item !== '') {
            stacks[j].push(item);
        }
    }
}
// console.log(stacks)
// process from 
const movements = lines.slice(inputDivisorLineNumber + 1).map(line => line.match(/\d+/g));
// console.log("movements", movements);
for (let i = 0; i < movements.length; i++) {
    const movement = movements[i];
    console.log(movement)
    const qty = parseInt(movement[0]);
    const fromStack = stacks[movement[1] - 1];
    console.log(movement[1])
    console.log(movement[1] - 1)
    console.log(stacks[movement[1] - 1])
    const toStack = stacks[movement[2] - 1];
    for (let j = 0; j < qty; j++) {
        if (!fromStack.isEmpty()) {
            const item = fromStack.pop();
            toStack.push(item);
        }     
    }
}


console.log(stacks.map(stack => stack.top().match(/\w/g)).join(''));