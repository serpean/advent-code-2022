const input = process.env.input;
const lines = input.split('\n');

let cycle = 1
let registerX = 1

const CRT = []
let CRTpos = 1;

for (let i = 0; i < lines.length ; i++) {
    if (lines[i].includes(' ')) {
        const [_, value] = lines[i].split(' ')
        draw()
        draw()
        registerX += parseInt(value)
        cycle += 2
    } else {
        draw()
        cycle++;
    }

}

function draw() {
    console.log("registerX", registerX)
    console.log("CRTpos", CRTpos)
    if (CRTpos >= registerX && CRTpos < registerX + 3) {
        CRT.push("#")
    } else {
        CRT.push(".")
    }
    CRTpos = (CRTpos + 1) % 40
    if (CRTpos === 1) {
        CRT.push("\n")
    }
}

console.log(CRT.join(''))