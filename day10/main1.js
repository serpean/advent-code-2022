const input = process.env.input;
const lines = input.split('\n');

let cycle = 1
let registerX = 1

const reportingValues = {}

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(' ')) {
        const [_, value] = lines[i].split(' ')
        registerX += parseInt(value)
        cycle += 2
    } else {
        cycle++;
    }
    reportingValues[cycle] = registerX
}
console.log(reportingValues)

const sum = [20, 60, 100, 140, 180, 220].reduce((acc, cycle) => {
    if (reportingValues[cycle] === undefined) {
        return acc + cycle * reportingValues[cycle - 1]
    }
    return acc + cycle * reportingValues[cycle]
}, 0)
console.log(sum)