/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
*/

const marks = [10, 2, 8, 4, 6];
const abc = ['a', 'b', 'c', 'd', 'e'];

console.log(...marks);  //vienas is budu pasidaryti masyvo kopija


console.log('\n Concat ------------------------');
// CONCAT - IS KELIU PADARO VIENA BENDRA
console.log([...marks].concat(4, 5));
console.log([...marks].concat(1, 2, 3));
console.log([...marks].concat([1, 2, 3], 4, 5));
console.log([...marks].concat(4, [1, 2, 3], 5));
console.log([...marks].concat(4, 5, [1, 2, 3]));

//dalinai ta pati rezultata galejome pasiekti su spread operatoriais

console.log([...marks, 4, 5, ...[1, 2, 3]]);


console.log('\n Random ------------------------');
//neisivaizduojam praktinio panaudojimo
console.log([...marks]);
console.log([...marks].copyWithin(2, 0, 1));
console.log([...marks].copyWithin(2, 0, 2));   
console.log([...marks].copyWithin(2, 0, 3));
console.log([...marks].copyWithin(3, 0, 3));

console.log('\n copyWithin ------------------------');
console.log([...marks].fill(999));
console.log([...marks].fill('labas'));
console.log([...marks].fill(0, 2));
console.log([...marks].fill(''));
console.log([...marks].fill('', 2));
console.log([...marks].fill('', 1));
console.log([...marks].fill('', 1, 3));

//praktinis panaudojimas - kai reikia sukonstruoti visiskai nauja masyva

const desimtZuikiu = [];

for (let i = 0; i < 10; i++) {
    desimtZuikiu.push('zuikis');
}

console.log(desimtZuikiu);

//const penkiolikaZuikiu = new Array(15).fill('zuikis');
//console.log(penkiolikaZuikiu);

const penkiolikaZuikiu = new Array(25).fill('zuikis');
console.log(penkiolikaZuikiu);

console.log(`\n flat -----------------------`);
console.log([1, 2, 3].flat());  //flatinti, tai tas pats kas su buldozeriu pravaziuoti ir islyginti :)
console.log([1, [2, 4], 3].flat());
console.log([1, [2, 4], 3, [5, 6], 7].flat());  //padaro vienmati masyva
console.log([1, [[2, 4], 3, [5, 6]], 7].flat());  //atsikrate teviniu skliaustu
console.log([1, [[2, 4], 3, [5, 6]], 7].flat().flat());
console.log([1, [[2, 4], 3, [5, 6]], 7].flat(2));
console.log([1, [[2, 4], 3, [5, 6]], 7].flat(5));

const matrix = [
    [1, 2, 3, 4],
    [1, 2, 3, 5],
    [1, 2, 3, 6],
];

console.log(`\n Includes -----------------------`);
console.log([...marks].includes(0));
console.log([...marks].includes(1));
console.log([...marks].includes(2));
console.log([...marks].includes(10));

console.log([[1], [2], [3], [4]].includes(2));
const two = [2];
console.log([[1], two, [3], [4]].includes(two));

console.log(`\n IndexOf -----------------------`);
console.log([...marks]);
console.log([...marks].indexOf('labas'));
console.log([...marks].indexOf(10));
console.log([...marks].indexOf(6));
console.log([...marks].indexOf(145625856));

function turboIndexOf(list, search) {
    //[10, 2, 8, 4, 6] -> [2] true
    //[10, 2, 8, 4, 6] -> [2, 8] true
    //[10, 2, 8, 4, 6] -> [2, 8, 4] true
    //[10, 2, 8, 4, 6] -> [2, 8, 6] false
}
 
console.log([...marks].indexOf(10));
console.log([...marks].indexOf(10, 2));
console.log([...marks, 10].indexOf(10, 2));

console.log(`\n Join -----------------------`);
console.log(abc);                          //ziureti i const paciame virsuje
console.log([...abc].join());
console.log([...marks].join());
console.log([...abc].join(', '));
console.log([...marks].join(', '));
console.log([...abc].join(' xXx '));
console.log([...marks].join(' xXx '));
console.log([...abc].join(''));
console.log([...marks].join(''));

console.log(`\n lastIndexOf -----------------------`);
console.log([...marks]);
console.log([...marks].lastIndexOf(10));      // issifruojant - artimiausias desimtukas, kur as ji radau, yra pozicijoj 0
console.log([...marks].lastIndexOf(7));
console.log([...marks].lastIndexOf(4));
console.log([...marks, 7, 9, 4, 3].join(', '));
console.log([...marks, 7, 9, 4, 3].lastIndexOf(4));
console.log([...marks, 7, 9, 4, 3].lastIndexOf(4, 5));

console.log(`\n pop -----------------------`);
const marks2 = [...marks];
console.log(marks2);
console.log(marks2.pop());  //nupopino paskutini nari ir ji grazino
console.log(marks2);
console.log(marks2.pop());
console.log(marks2);

console.log(`\n push -----------------------`);
const marks3 = [...marks];
console.log(marks3);
console.log(marks3.push(7));
console.log(marks3);
console.log(marks3.push(8));
console.log(marks3);
console.log(marks3.push(100));
console.log(marks3.push(200));
console.log(marks3);

console.log(`\n unshift -----------------------`);
const marks4 = [...marks];
console.log(marks4);
console.log(marks4.unshift(0));
console.log(marks4.unshift(1));
console.log(marks4.unshift(2));
console.log(marks4.unshift(3));
console.log(marks4);

console.log(`\n shift -----------------------`);  //pasalina priekyje esancia reiksme
const marks5 = [...marks]; 
console.log(marks5);
console.log(marks5.shift());
console.log(marks5.shift());
console.log(marks5.shift());
console.log(marks5);

console.log(`\n reverse -----------------------`);
console.log([...marks]);                //kaip apsukti masyva is kito galo
console.log([...marks].reverse());

const demo = ['Labas', 'rytas', ',', 'Lietuva', '!'];
console.log(demo);

const reversedDemo = demo.reverse();
console.log(demo);
console.log(reversedDemo);  //reverse apsuks originalius duomenis, o ne sukurs nauja masyva. Tureti omeny!

const reversedDemo2 = demo.toReversed();
console.log(reversedDemo);

