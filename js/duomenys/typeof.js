/* 
Duomens tipo nustatymas

TYPEOF - duomens tipo nustatymo operatorius

*/
function empty() {

}

console.log(typeof 5);
console.log(typeof 3.1415);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof '');
console.log(typeof 'Labas');
console.log(typeof ' ');
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof ['a', 'b', 'c']);
console.log(typeof {});
console.log(typeof empty);

console.log('----------------');
// Kai norite patikrinti ar TAI yra masyvas/array
console.log(Array.isArray);
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray(true));
console.log(Array.isArray(empty));

console.log('------------------');

const tikrinamasDalykas = null;
if (2152 === null) {     //vietoj 2152 galime prisirasyti ivairiausiu reiksmiu
    console.log('taip');
} else {
    console.log('ne');
}

// KAIP PANAUDOTI VISA SIA INFORMACIJA, KURI PATEIKTA AUKSCIAU

const a = 'labas'; //12526/true/ ir tt


console.log(a);


if (typeof a === 'string') {
    console.log('As dirbu su STRING')
} else {
    console.log('As dirbu ne su STRING');
}
//jeigu kintamojo tipas kazka grazina, sutampa su musu norimu tipu, tai dirba vienaim, jei nesutampa - dirba kitaip

console.clear();


const x = 'asd';
const y = 7;

console.log(x && y);
console.log('asd' && y);
console.log(typeof (x && y));

if (typeof (x && y) !== 'number') {
    console.log('ERROR');
} else {
    console.log('OK')
}

/*if (typeof x !== 'number') {
    console.log('ERROR: x');
} else if (typeof y !== 'number') { ///////////////gelezine logika :)
    console.log('ERROR: y');
} else {
    console.log('VISKAS OK');
}
*/







