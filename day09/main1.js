const input = process.env.input;
const lines = input.split('\n');

const abs = (a) => a < 0 ? -a : a;
const inc = (a) => a + 1;
const dec = (a) => a - 1;
const idem = (a) => a;
const dirMap = {
    'U': [idem, dec],
    'D': [idem, inc],
    'L': [dec, idem],
    'R': [inc, idem],
}

class Table {

    constructor() {
        this.rowsH = [[0, 0]];
        this.rowsT = [[0, 0]];
    }

    move(dir, steps) {
        for (let i = 0; i < steps; i++) {
            const [hx, hy] = this.rowsH[this.rowsH.length - 1];
            const [xFun, yFun] = dirMap[dir];
            const [nextHx, nextHy] = [xFun(hx), yFun(hy)];
            this.rowsH.push([nextHx, nextHy]);
            const [tx, ty] = this.rowsT[this.rowsT.length - 1];                
            const nextTx = tx + (hx - tx);
            const nextTy = ty + (hy - ty);
            if (nextHx === nextTx && nextHy === nextTy) {
                this.rowsT.push([nextTx, nextTy]);
            } else {
                this.rowsT.push([nextTx, nextTy]);
            }
        }
    }

    getUniqueTailPositions() {
        const set = new Set();
        for (let i = 0; i < this.rowsT.length; i++) {
            const [x, y] = this.rowsT[i];
            set.add(`${x},${y}`);
        }
        return set;
    }

    toString() {
        console.log("Head", "Tail")
        for (let i = 0; i < this.rowsH.length; i++) {
            console.log(this.rowsH[i], this.rowsT[i]);
        }
    }

}
const table = new Table();
for (let i = 0; i < 2; i++) {
    const [dir, steps] = lines[i].split(' ');
    table.move(dir, steps);
    console.log(table.toString())
}
console.log(table.getUniqueTailPositions().size);
