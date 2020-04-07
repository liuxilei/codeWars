function pigIt(str) {
    let temp = str.split(" ");
    return temp.map(item => {
        if (!checkIsHasSpecialStr(item[0])) {
            item = item.substr(1) + item[0] + "ay";
        }
        return item;
    }).join(" ");
}


//特殊字符匹配
function checkIsHasSpecialStr(str) {
    var myReg = /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]/;
    return myReg.test(str)
}


console.log(pigIt('Pig latin is cool') === 'igPay atinlay siay oolcay');
console.log(pigIt('This is my string') === 'hisTay siay ymay tringsay');