function sqInRect(lng, wdth) {
    if (lng === wdth) {
        return null;
    }
    let arr = [];
    let minNum;
    let maxNum;
    arr.push(Math.min(lng, wdth));
    while (lng != wdth) {
        minNum = Math.min(lng, wdth);
        maxNum = Math.max(lng, wdth);
        lng = minNum;
        wdth = maxNum - minNum;
        arr.push(Math.min(lng, wdth));
    }
    return arr;
}

console.log(sqInRect(5, 3));