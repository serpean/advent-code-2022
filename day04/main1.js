const input = process.env.input;
const pairs = input.split('\n');

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    contains(interval) {
        return this.start <= interval.start && this.end >= interval.end;
    }
}
let totalNum = 0;
for (let i = 0; i < pairs.length; i++) {
    const [leftPair, rightPair] = pairs[i].split(',');
    const leftInterval = new Interval(...leftPair.split('-').map(x => parseInt(x)));
    const rightInterval = new Interval(...rightPair.split('-').map(x => parseInt(x)));
    if (leftInterval.contains(rightInterval) || rightInterval.contains(leftInterval)) {
        totalNum++;
    }
}
console.log(totalNum);
