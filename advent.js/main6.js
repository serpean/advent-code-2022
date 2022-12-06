function createCube(size) {
    const topCube = [...Array(size).keys()].map(i => " ".repeat(size - i - 1) + "/\\".repeat(i + 1) + "_\\".repeat(size));
    const bottomCube = [...Array(size).keys()].map(i => " ".repeat(i) + "\\/".repeat(size - i) + "_/".repeat(size));
    const cube = [...topCube, ...bottomCube];
    return cube.join("\n");
}

console.log(createCube(1))
console.log(createCube(2))
console.log(createCube(3))