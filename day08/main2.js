const input = process.env.input;
const lines = input.split('\n');

const trees = Array.from({length: lines.length}, (_, i) => []);

for (let i = 0; i < lines.length; i++) {
  const rowOfTrees = lines[i].split('')
  for (let j = 0; j < lines.length; j++) {
    trees[i][j] = rowOfTrees[j];
  }
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

function scoreInGrid(grid, i, j, funcI, funcJ) {
    let score = 0;
    let auxI = i;
    let auxJ = j;

    do  {
        // console.log("i, j                  ", i, j)
        // console.log("auxI, auxJ            ", auxI, auxJ)
        // console.log("current", auxI,  grid[auxI])
        auxI = funcI(auxI);
        auxJ = funcJ(auxJ);

        if (grid[auxI] && grid[auxI][auxJ]) {
            score++;
        }
    } while (grid[auxI] && grid[auxI][auxJ] && grid[auxI][auxJ] < grid[i][j]);

    return score;
}
function topScore(grid, i, j) {
    return scoreInGrid(grid, i, j, decrement, idem);
}
function bottomScore(grid, i, j) {
    return scoreInGrid(grid, i, j, inc, idem);
}
function rightScore(grid, i, j) {
    return scoreInGrid(grid, i, j, idem, inc);
}
function leftScore(grid, i, j) {
    return scoreInGrid(grid, i, j, idem, decrement);
}


const scoreGrid = Array.from({length: lines.length}, (_, i) => []);
for (let i = 0; i < trees.length; i++) {
    const innerRow = trees[i];
    for (let j = 0; j < innerRow.length; j++) {
        // console.log("scores for:", i, j, trees[i][j])
        const top = topScore(trees, i, j)
        // console.log("TOP SCORE:", top);
        const bottom = bottomScore(trees, i, j)
        // console.log("BOTTOM SCORE:", bottom);
        const right = rightScore(trees, i, j)
        // console.log("RIGHT SCORE:", right);
        const left = leftScore(trees, i, j)
        // console.log("LEFT SCORE:", left);
        // console.log("score:", top * bottom * right * left)
        // console.log("-----------------")

        scoreGrid[i][j] = top * bottom * right * left;
    }
}
// top score
let maxScore = 0;
for (let i = 0; i < scoreGrid.length; i++) {
    const innerRow = scoreGrid[i];
    for (let j = 0; j < innerRow.length; j++) {
        if (scoreGrid[i][j] > maxScore) {
            maxScore = scoreGrid[i][j];
        }
    }
}

console.log("score:", maxScore);