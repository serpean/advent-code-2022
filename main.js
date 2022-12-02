// npm start -- day=01 scenario=1 file=demo.txt
// parse args
const args = process.argv.slice(2);
const argsMap = {};
args.forEach(arg => {
    const [key, value] = arg.split('=');
    argsMap[key] = value;
});
if (!argsMap.day) {
    console.log('Please provide a day');
    return;
}
if (!argsMap.scenario) {
    console.log('Please provide a scenario');
    return;
}
const file = argsMap.file || 'input.txt';
console.log('file:', file);

const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');
const input = fs.readFileSync(path.join(__dirname, `day${argsMap.day}`, `${file}`), 'utf8');
const child = spawn('node', [path.join(__dirname, `day${argsMap.day}`, `main${argsMap.scenario}.js`)], {
    stdio: 'inherit',
    env: {
        input,
        ...process.env,
    }
});


child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
