function digital_root(n) {
    let newN = n.toString();
    let newArray = newN.split("");
    let res = 0;
    for (let i = 0;i < newArray.length;i++) {
        res += parseInt(newArray[i]);
    }
    if (res < 10) {
        return res;
    }
    return digital_root(parseInt(res));
}
// console.log(digital_root(7));
// console.log(digital_root(15));
// console.log(digital_root(44));
// console.log(digital_root(123));
console.log(digital_root(854));