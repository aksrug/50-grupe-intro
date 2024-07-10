console.clear();

function sum(a = null, b = 7) {
    if (typeof a !== 'number') {
        return 'ERROR...'
    }

    if (typeof b !== 'number') {
        return 'ERROR...'
    }

    return a + b;
}

console.log(sum(7, 5));
console.log(sum(7));
console.log(sum());
console.log(sum('labas'));

function header(isHomepage = false) {
    return isHomepage ? 'HOME PAGE' : 'OTHER PAGE';
}

console.log(header(true));
console.log(header());
console.log(header());
console.log(header());
console.log(header());