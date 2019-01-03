function isIsogram(str) {
    let arr = str.split('');
    let newArray = arr.map(item => item.toLowerCase());
    let middleArray = [];
    for (let i = 0;i < newArray.length; i++) {
        if (middleArray.indexOf(newArray[i]) == -1) {
            middleArray.push(newArray[i]);
        }
    }
    console.log(middleArray, newArray);
    if (middleArray.length == newArray.length) {
        return false;
    } else {
        return true;
    }
}
cosnole.log(isIsogram('Dermatoglyphics'));