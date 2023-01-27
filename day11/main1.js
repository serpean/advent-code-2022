const input = process.env.input;
const lines = input.split('\n');

// Monkey 0:
//   Starting items: 79, 98
//   Operation: new = old * 19
//   Test: divisible by 23
//     If true: throw to monkey 2
//     If false: throw to monkey 3
class Monkey {
    constructor(id, startingItems, operation, test, throwToTrue, throwToFalse) {
        this.id = id;
        this.items = startingItems;
        this.operation = operation;
        this.test = test;
        this.throwToTrue = throwToTrue;
        this.throwToFalse = throwToFalse;
    }

    throwTo(monkey) {
        const newItems = this.operation(this.items);
        if (this.test(newItems)) {
            monkey.items.push(newItems);
        }
    }

    testBy() {

    }
}