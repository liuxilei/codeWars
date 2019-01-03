function calc(expr) {
    if (!expr) {
        return 0;
    }
    let newArr = expr.split(' ');
    if (newArr.length == 1) {
        return parseFloat(newArr[0]);
    }
    for (let i = 0; i < newArr.length; i++) {
        console.log(i);
        if (newArr[i] == '+' || newArr[i] == '-' || newArr[i] == '*' || newArr[i] == '/') {
            //console.log(`${newArr[i - 2]} ${newArr[i]} ${newArr[i - 1]}`);
            newArr[i] = eval(`${newArr[i - 2]} ${newArr[i]} ${newArr[i - 1]}`);
            newArr.splice(i - 2, 2);
            i = i - 2;
            console.log(newArr, i);
        }
        if (i == newArr.length - 1) {
            return newArr[i];
        }
    }
}

console.log(calc('5 1 2 + 4 * + 3 -'));

function calc(expr) {
    var result = [];
    var atoms = expr.split(/\s+/);
    var operators = ['+', '-', '*', '/'];
    for (var i = 0; i < atoms.length; i++) {
        switch (atoms[i]) {
            case '+': result.push(result.pop() + result.pop()); break;
            case '-': result.push(-result.pop() + result.pop()); break;
            case '*': result.push(result.pop() * result.pop()); break;
            case '/': result.push(1 / (result.pop() / result.pop())); break;
            default: result.push(parseFloat(atoms[i]));
        }
    }
    return result.pop() || 0;
}

