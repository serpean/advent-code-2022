const boxes = [
    // { l: 1, w: 1, h: 1 },
    // { l: 3, w: 3, h: 3 },
    // { l: 2, w: 2, h: 2 }
    { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]
// 79
function fitsInOneBox(boxes) {
    const boxesMap = boxes.reduce((acc, curr, i) => {
        acc[i + 1] = curr;
        return acc;
    }, {});
    const boxesMapKeys = Object.keys(boxesMap);
    const sortedBoxesMapByLength = boxesMapKeys.sort((a, b) => boxesMap[a].l - boxesMap[b].l)
    const sortedBoxesMapByWidth = boxesMapKeys.sort((a, b) => boxesMap[a].w - boxesMap[b].w)
    const sortedBoxesMapByHeight = boxesMapKeys.sort((a, b) => boxesMap[a].h - boxesMap[b].h)
    const isValidOrder = !sortedBoxesMapByLength.slice(0, -1).find((_, i) => {
        const box = boxesMap[sortedBoxesMapByLength[i]];
        const nextBox = boxesMap[sortedBoxesMapByLength[i + 1]];
        return box.l >= nextBox.l || box.w >= nextBox.w || box.h >= nextBox.h;
    });
          
    return isValidOrder && sortedBoxesMapByLength.every((box, i) => box === sortedBoxesMapByWidth[i] && box === sortedBoxesMapByHeight[i]);
}
// 76
// function fitsInOneBox(boxes) {
//     const boxesMap = boxes.reduce((acc, curr, i) => {
//         acc[i + 1] = curr;
//         return acc;
//     }, {});
//     const boxesMapKeys = Object.keys(boxesMap);
//     const sortArray = ['l', 'w', 'h'].map((key) => {
//         return boxesMapKeys.sort((a, b) => boxesMap[a][key] - boxesMap[b][key])
//     });
//     const isValidOrder = !sortArray[0].slice(0, -1).find((_, i) => {
//         const box = boxesMap[sortArray[0][i]];
//         const nextBox = boxesMap[sortArray[0][i + 1]];
//         return box.l >= nextBox.l || box.w >= nextBox.w || box.h >= nextBox.h;
//     });
          
//     return isValidOrder && sortArray[0].every((box, i) => box === sortArray[1][i] && box === sortArray[2][i]);
// }
  
console.log(fitsInOneBox(boxes)) // true