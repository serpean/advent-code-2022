const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// the highest sum of gifts to distribute
// visiting a maximum of 3 cities
// is 20: [12, 3, 5]

// the highest sum would be [12, 7, 11]
// but it exceeds the limit of 20 gifts and he
// would have to leave a city half-way.

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    const sortGiftsCities = giftsCities.sort((a, b) => a - b);
    const maxSumUntilIndex = giftsCities.map((_, i) => []);
    for (let i = 0; i < sortGiftsCities.length; i++) {
        for (let j = 0; j < maxCities; j++) {
            if (i === 0 || j === 0) {
                maxSumUntilIndex[i][j] = sortGiftsCities[i] > maxGifts ? 0 : sortGiftsCities[i];
            } else {
                let aux = 1;
                let prevMax = maxSumUntilIndex[i - aux][j - 1];
                while (i > aux && prevMax + sortGiftsCities[i] > maxGifts){
                    aux++;
                    prevMax = maxSumUntilIndex[i - aux][j - 1];
                }

                maxSumUntilIndex[i][j] = prevMax + sortGiftsCities[i] > maxGifts ? 0 : prevMax + sortGiftsCities[i];
            }
        }
    }
    return maxSumUntilIndex.reduce((acc, curr) => Math.max(acc, curr.reduce((acc, curr) => Math.max(acc, curr), 0)), 0);
}

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    const sortGiftsCities = giftsCities.sort((a, b) => a - b);
    const maxSumUntilIndex = giftsCities.map((_, i) => []);
    for (let i = 0; i < sortGiftsCities.length; i++) {
        for (let j = 0; j < maxCities; j++) {
            if (i === 0 || j === 0) {
                maxSumUntilIndex[i][j] = sortGiftsCities[i] > maxGifts ? 0 : sortGiftsCities[i];
            } else {
                let aux = 1;
                let prevMax = maxSumUntilIndex[i - aux][j - 1];
                while (i > aux && prevMax + sortGiftsCities[i] > maxGifts){
                    aux++;
                    prevMax = maxSumUntilIndex[i - aux][j - 1];
                }

                maxSumUntilIndex[i][j] = prevMax + sortGiftsCities[i] > maxGifts ? 0 : prevMax + sortGiftsCities[i];
            }
        }
    }
    return maxSumUntilIndex.reduce((acc, curr) => Math.max(acc, curr.reduce((acc, curr) => Math.max(acc, curr), 0)), 0);
}

console.log("100 == ", getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4))

console.log("20 == ", getMaxGifts(giftsCities, maxGifts, maxCities)) // 20 (12 + 3 + 5)

console.log("20 == ", getMaxGifts([12, 3, 11, 5, 7], 20, 3)) // 20
console.log("0 == ", getMaxGifts([50], 15, 1)) // 0
console.log("50 == ", getMaxGifts([50], 100, 1)) // 50
console.log("70 == ", getMaxGifts([50, 70], 100, 1)) // 70
console.log("100 == ", getMaxGifts([50, 70, 30], 100, 2)) // 100
console.log("100 == ", getMaxGifts([50, 70, 30], 100, 3)) // 100
console.log("100 == ", getMaxGifts([50, 70, 30], 100, 4)) // 100