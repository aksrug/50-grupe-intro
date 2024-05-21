/*
ARROW FUNCTION - rodykline funkcija, lambda funkcija
*/

const n1 = 7;
const n2 = 5;

// function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// kintamajam priskiriama anonimine funckija
const diff = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);

// arrow function - rodykline funkcija (ismetam zodi function ir tarp skliaustu parasome rodykle =>)
const multi = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

// arrow function 
// jeigu, logikos bloke yra tik 1 procedura (jei viduje butu dar if/else ir tt, butu daugiau nei 1 procedura)
// tai galima nerasyti {return}
const div = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);

// arrow function
// jeigu, parametru bloke yra tik 1 parametras
// tai galima nerasyti ()
const square = n => n * n;
console.log(`${n1} * ${n1} = ${square(n1)}`);
console.log(`${n2} * ${n2} = ${square(n2)}`);

const hi = name => `Hi, my name is ${name}!`;
console.log(hi('Jonas'));
console.log(hi('Maryte'));

const abbr = (a, b) => a[0] + '.' + b[0] + '.';
const abbr2 = (a, b) => `${a[0]}.${b[0]}.`;
console.log(abbr('Chuck', 'Norris'));
console.log(abbr('Jonas', 'Kazlauskas'));
console.log(abbr2('Chuck', 'Norris'));
console.log(abbr2('Jonas', 'Kazlauskas'));

///////////////////////////////////////////////////

console.log(vienas());

function vienas() {
    return 'VIENAS';
}

console.log(vienas());

const antras = () => 'ANTRAS';

console.log(antras());
console.log(antras());


//const sum = (_,__)=>_+__;
//const sum = (a,b)=>a+b;


