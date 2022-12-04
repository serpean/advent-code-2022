const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
function distributedGifts(packOfGifts, reindeers) {
    const totalWeight = packOfGifts.reduce((acc, curr) => acc + curr.length, 0)
    const totalCapacity = reindeers.reduce((acc, curr) => acc + (2 * curr.length), 0)
    return Math.floor(totalCapacity / totalWeight)
}
console.log(distributedGifts(packOfGifts, reindeers)) // 2