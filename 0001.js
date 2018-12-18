function spinWords(str){
    let copyStr = str.split(' ');
    for (let i = 0;i < copyStr.length;i++) {
        if (copyStr[i].length >= 5) {
            copyStr[i] = copyStr[i].split('').reverse().join('');
        }
    }
    return copyStr.join(' ');
}
console.log(spinWords('Hey fellow warriors')); //Hey wollef sroirraw
console.log(spinWords('This is a test')); //This is a test
console.log(spinWords('This is another test')); //This is rehtona test