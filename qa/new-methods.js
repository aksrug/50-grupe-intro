const text = 'Labas rytas';

String.prototype.firstSymbol = function () {
    return this[0];
}

console.log(text[0]);
console.log(text.firstSymbol());
console.log('AAAAA'.firstSymbol());
console.log('BBBB'.firstSymbol());
console.log('CCCCC'.firstSymbol());

String.prototype.isUpperCase = function () {
    const str = '' + this;
    return str === str.toUpperCase();
}

console.log('ABC'.isUpperCase());
console.log('Abc'.isUpperCase());
console.log('abc'.isUpperCase());

console.log(3.1415.toFixed(2));

Number.prototype.double = function () {
    return this * 2;
}

console.log((7).double());

const n = 77;
console.log(n.double());

function triple(n) {
    return n * 3;
}

console.log(triple(888));