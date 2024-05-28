/*
function calc(a, operation, b) {
    if (operation === '+') {
        return a + b;
    }
    if (operation === '-') {
        return a - b;
    }
    if (operation === '*') {
        return a * b;
    }
    if (operation === '/') {
        return a / b;
    }

}
console.log(calc(7, '+', 5));
console.log(calc(7, '-', 5));
console.log(calc(7, '*', 5));
console.log(calc(7, '/', 5));
*/

/*
function calcObj(a, operation, b) {
    const mathFunctions = {
        name: 'Jonas',
        'first name': 'Jonaitis',        //galima tureti ir toki rakta (key)
        age: 99,
        '+': 'labas',
    }
    return a / b;
}
console.log(calcObj(7, '+', 5));
console.log(calcObj(7, '-', 5));
console.log(calcObj(7, '*', 5));
console.log(calcObj(7, '/', 5));
*/

function calcObj(n1, operation, n2) {
    const mathFunctions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '**': (a, b) => a ** b,
        '0': () => 0,        //nulis visada grazina nuli ir nepriima jokiu parametru
        
    }
    return mathFunctions[operation](n1, n2); 
}

console.log(calcObj(7, '+', 5));
console.log(calcObj(7, '-', 5));
console.log(calcObj(7, '*', 5));
console.log(calcObj(7, '/', 5));
console.log(calcObj(7, '**', 5));
console.log(calcObj(7, '0', 5));
console.log(calcObj(7, 0, 5));  //nulis paduotas kaip skaicius irgi suveikia