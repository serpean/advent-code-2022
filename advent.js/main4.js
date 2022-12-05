const boxes = [
    // { l: 1, w: 1, h: 1 },
    // { l: 3, w: 3, h: 3 },
    // { l: 2, w: 2, h: 2 }
    { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]

function fitsInOneBox(boxes) {
    const boxesMap = boxes.reduce((acc, curr, i) => {
        acc[i + 1] = curr;
        return acc;
    }, {});
    const boxesMapKeys = Object.keys(boxesMap);
    const sortedBoxesMapByLength = boxesMapKeys.sort((a, b) => boxesMap[a].l - boxesMap[b].l)
    const sortedBoxesMapByWidth = boxesMapKeys.sort((a, b) => boxesMap[a].w - boxesMap[b].w)
    const sortedBoxesMapByHeight = boxesMapKeys.sort((a, b) => boxesMap[a].h - boxesMap[b].h)
    const isValidOrder = sortedBoxesMapByLength.reduce((acc, curr, i) => {
        if (!acc) {
            return false;
        }
        const box = boxesMap[curr];
        const nextBox = boxesMap[sortedBoxesMapByLength[i + 1]];
        if (nextBox) {
            return box.l < nextBox.l && box.w < nextBox.w && box.h < nextBox.h;
        }
        return acc;
    }, true);
          
    return isValidOrder && sortedBoxesMapByLength.every((box, i) => box === sortedBoxesMapByWidth[i] && box === sortedBoxesMapByHeight[i]);
}

function fitsInOneBox(boxes) {
    const boxesMap = boxes.reduce((acc, curr, i) => {
        acc[i + 1] = curr;
        return acc;
    }, {});
    const boxesMapKeys = Object.keys(boxesMap);
    const sortedBoxesMapByLength = boxesMapKeys.sort((a, b) => boxesMap[a].l - boxesMap[b].l)
    const sortedBoxesMapByWidth = boxesMapKeys.sort((a, b) => boxesMap[a].w - boxesMap[b].w)
    const sortedBoxesMapByHeight = boxesMapKeys.sort((a, b) => boxesMap[a].h - boxesMap[b].h)
    console.log(sortedBoxesMapByLength)
    const isValidOrder = !sortedBoxesMapByLength.slice(0, -1).find((_, i) => {
        const box = boxesMap[sortedBoxesMapByLength[i]];
        const nextBox = boxesMap[sortedBoxesMapByLength[i + 1]];
        return box.l >= nextBox.l || box.w >= nextBox.w || box.h >= nextBox.h;
    });
          
    return isValidOrder && sortedBoxesMapByLength.every((box, i) => box === sortedBoxesMapByWidth[i] && box === sortedBoxesMapByHeight[i]);
}
  
console.log(fitsInOneBox(boxes)) // true