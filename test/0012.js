function duplicateEncode(word) {
    let newArray = word.split('');
    let twoArray = word.split('');
    for (let i = 0; i < newArray.length; i++) {
        let m = 0;
        for (let j = 0; j < twoArray.length; j++) {
            if (newArray[i].toLocaleUpperCase() === twoArray[j].toLocaleUpperCase()) {
                m++;
            }
            if (j == (twoArray.length - 1)) {
                if (m >= 2) {
                    newArray[i] = ')';
                } else {
                    newArray[i] = '(';
                }
            }
            
        }
    }
    return newArray.join('');
}

console.log(duplicateEncode('(( @'));