/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number 

*/

console.log('Number.isFinite()');

console.log(Number.isFinite(152614));
console.log(Number.isFinite(-152614));
console.log(Number.isFinite(1526.14));
console.log(Number.isFinite(-1526.14));
console.log(Number.isFinite(0));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));

console.log('-------------------------');
console.log('isFinite()');

console.log(Number.isFinite(152614));
console.log(Number.isFinite(-152614));
console.log(Number.isFinite(1526.14));
console.log(Number.isFinite(-1526.14));
console.log(Number.isFinite(0));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));


console.log('-------------------------');
console.log('isNaN()');

console.log(isNaN(152614));
console.log(isNaN(-152614));
console.log(isNaN(1526.14));
console.log(isNaN(-1526.14));
console.log(isNaN(0));
console.log(isNaN(Infinity));
console.log(isNaN(-Infinity));
console.log(isNaN(NaN));

console.log('-------------------------');   ///integer - sveikasis skaicius
console.log('parseInt()');                  //narsyklese visi skaiciai yra TEKSTAS, juos reikia pasiversti i skaicius
                                          // parseint ateina i pagalba                                          


const a = '87';
const b = parseInt('87');

console.log(typeof a);
console.log(typeof b);

console.log(parseInt('87')); 
console.log(parseInt('-99')); 
console.log(parseInt('0')); 
console.log(parseInt('3.14')); 
console.log(parseInt('-3.14')); 
console.log(parseInt('NaN')); 
console.log(parseInt('Infinity')); 
console.log(parseInt('-Infinity')); 

console.log(parseInt('Grybu karas')); 
console.log(parseInt('')); 
console.log(parseInt('123abc')); 
console.log(parseInt('abc123')); 
console.log(parseInt('123abc123abc')); 
console.log(parseInt('abc123abc123')); 
console.log(parseInt('1252e5')); 
console.log(parseInt('1.252e5')); 
console.log(parseInt('7e5')); 

console.log(typeof parseInt('87'));           

console.log('-------------------------');
console.log('parseFloat()');

console.log(parseFloat('87')); 
console.log(parseFloat('-99')); 
console.log(parseFloat('0')); 
console.log(parseFloat('3.14')); 
console.log(parseFloat('-3.14')); 
console.log(parseFloat('NaN')); 
console.log(parseFloat('Infinity')); 
console.log(parseFloat('-Infinity')); 

console.log(parseFloat('Grybu karas')); 
console.log(parseFloat('')); 
console.log(parseFloat('123abc')); 
console.log(parseFloat('abc123')); 
console.log(parseFloat('123abc123abc')); 
console.log(parseFloat('abc123abc123')); 
console.log(parseFloat('1252e5')); 
console.log(parseFloat('1.252e5')); 
console.log(parseFloat('7e5')); 

// 100 -> 1* 10^2 -> 1e2
// 1.000.000 -> 1 * 10^6 -> 1e6
// 125 -> 1.25 * 10^2 -> 1.25e2
// 0.001 -> 1* 10^-3 -> 1e-3
// 0.00125 -> 1.25 * 10^-3 -> 1.25e-3

console.log('-------------------------');
console.log('Number.toFixed()');

/*const c = 5;
// 5.00

console.log(c);

console.log(c.toFixed(20));
//5.00000000000000000000


const c = 5.1485
console.log(c.toFixed(20));
//5.14850000000000029843


const c = 5.123
console.log(c.toFixed(2));
//5.12

const c = 5.128
console.log(c.toFixed(2)); 
//5.13 - ivyksta apvalinimas
*/

//(c.toFixed(2));  KAIP SITA GAUTA REIKSME VEL PASIVERSTI I SKAICIU?
//console.log(parseFloat(c.toFixed(2))); 


