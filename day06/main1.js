const input = process.env.input;
const lines = input.split('\n');

class FIFOQueue {
    constructor() {
        this.queue = [];
    }
    push(item) {
        this.queue.push(item);
    }
    pop() {
        return this.queue.shift();
    }
    last() {
        return this.queue[this.queue.length - 1];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
    allElementsAreDifferent() {
        return this.queue.length === new Set(this.queue).size;
    }
    length() {
        return this.queue.length;
    }
}

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const letters = line.split('');
    console.log(marker(letters));
}

function marker(letters) {
    const queue = new FIFOQueue();
    for (let j = 0; j < letters.length; j++) {
        queue.push(letters[j]);
        if (queue.length() > 3) {
            if (queue.allElementsAreDifferent()) {
                return j + 1
            }

            queue.pop();
        }
    }
}
