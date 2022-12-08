const input = process.env.input;
const lines = input.split('\n');

const trees = Array.from({length: lines.length + 2}, (_, i) => []);
// fill first row with #
for (let i = 0; i < lines.length + 2; i++) {
    trees[0][i] = '#';
}
for (let i = 0; i < lines.length; i++) {
  const rowOfTrees = lines[i].split('')
  for (let j = 0; j < lines.length + 2; j++) {
    // fill first column and last with #
    if (j === 0 || j === lines.length + 1) {
        trees[i + 1][j] = '#';
    } else {
        trees[i + 1][j] = rowOfTrees[j - 1];
    }
  }
}
// fill last row with #
for (let i = 0; i < lines.length + 2; i++) {
    trees[lines.length + 1][i] = '#';
}
// console.log(trees);

function inc(i) {
    return i + 1;
}
function decrement(i) {
    return i - 1;
}

function idem(i) {
    return i;
}

function isVisibleInGrid(grid, i, j, funcI, funcJ) {
    let auxI = i;
    let auxJ = j;
    while (grid[funcI(auxI, 1)][funcJ(auxJ)] !== '#') {
        if (trees[funcI(auxI)][funcJ(auxJ)] >= trees[i][j]) {
            return false;
        }
        auxI = funcI(auxI);
        auxJ = funcJ(auxJ);
    }
    return true;
}
function isTopVisible(grid, i, j) {
    return isVisibleInGrid(grid, i, j, decrement, idem);
}
function isBottomVisible(grid, i, j) {
    return isVisibleInGrid(grid, i, j, inc, idem);
}
function isRightVisible(grid, i, j) {
    return isVisibleInGrid(grid, i, j, idem, inc);
}
function isLeftVisible(grid, i, j) {
    return isVisibleInGrid(grid, i, j, idem, decrement);
}


const visibilityGrid = Array.from({length: lines.length}, (_, i) => []);
for (let i = 1; i < lines.length + 1; i++) {
    for (let j = 1; j < lines.length + 1; j++) {
        if (isTopVisible(trees, i, j) ||
            isBottomVisible(trees, i, j) ||
            isRightVisible(trees, i, j) ||
            isLeftVisible(trees, i, j)) {
            visibilityGrid[i - 1][j - 1] = 1;
        } else {
            visibilityGrid[i - 1][j - 1] = 0;
        }
    }
}
// console.log(visibilityGrid);
// count the number of 1s
let count = 0;
for (let i = 0; i < visibilityGrid.length; i++) {
    for (let j = 0; j < visibilityGrid.length; j++) {
        if (visibilityGrid[i][j] === 1) {
            count++;
        }
    }
}
console.log("count:", count);