/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 
*/

const word = 'Labas rytas, Lietuva';

console.log(word);
console.log('Labas rytas, Lietuva');

console.log(word[0]);
console.log('Labas rytas, Lietuva'[0]);

console.log(word.charAt(0));    
console.log('Labas rytas, Lietuva'.charAt(0));

console.log(word.charCodeAt(0));
console.log(word.charCodeAt(1));
console.log(word.charCodeAt(2));
console.log(word.charCodeAt(3));
console.log(word.charCodeAt(4));

console.log('Labas'.concat('rytas'));
console.log('Labas'.concat('rytas','Lietuva'));
console.log('Labas'.concat('rytas').concat('Lietuva'));

console.log('------------------------------------');

console.log('endsWith()');
console.log('labas'.endsWith('x'));
console.log('labas'.endsWith('s'));
console.log('labas'.endsWith('gg'));
console.log('labas'.endsWith('as'));
console.log('labas'.endsWith('bas'));
console.log('labas'.endsWith('abas'));
console.log('labas'.endsWith('labas'));

console.log('L'.charCodeAt(0));
console.log('l'.charCodeAt(0));

console.log('------------------------------------');
console.log('startsWith()');
console.log('Labas'.startsWith('x'));
console.log('Labas'.startsWith('gg'));
console.log('Labas'.startsWith('afafas'));
console.log('Labas'.startsWith('l'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('La'));
console.log('Labas'.startsWith('Lab'));
console.log('Labas'.startsWith('Laba'));
console.log('Labas'.startsWith('Labas'));

console.log('------------------------------------');
console.log('includes()');
console.log('Pomidoras'.includes('x'));
console.log('Pomidoras'.includes('o'));
console.log('Pomidoras'.includes('gg'));
console.log('Pomidoras'.includes('doras'));
console.log('Pomidoras'.includes('Pomi'));
console.log('Pomidoras'.includes('ido'));
console.log('Pomidoras'.includes('Pomidoras'));

console.log('------------------------------------');
console.log('indexOf()');
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('gg'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('m'));
console.log('Pomidoras'.indexOf('i'));
console.log('Pomidoras'.indexOf('Pom'));
console.log('Pomidoras'.indexOf('omi'));
console.log('Pomidoras'.indexOf('mido'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('P', 1));
console.log('Pomidoras'.indexOf('o', 2));

console.log('------------------------------------');
console.log('repeat()');
console.log('A'.repeat(10));
console.log('U'.repeat(20));
console.log('Labas'.repeat(5));
console.log('Labas'.repeat(1));
console.log('Labas'.repeat(NaN));
console.log('Labas'.repeat(0));
//console.log('Labas'.repeat(Infinity --geriau nerasyti :))));
console.log('Labas'.repeat(undefined));
console.log('Labas'.repeat(null));
console.log('Labas'.repeat(''));
console.log('Labas'.repeat('sdggsdgsd'));
//console.log('Labas'.repeat(-5));
console.log('Labas'.repeat(3.14));

/*let ats = '';

for (let i = 0; i<5; i++) {
    ats += 'Labas';
}
console.log(ats);
*/


console.log('------------------------------------');
console.log('replace()');

console.log('Pomidoras'.replace('P','B'));
console.log('Pomidoras'.replace('o','x'));
console.log('Pomidoras'.replace('o','-x-'));
console.log('Pomidoras'.replace('o','_').replace('o','_'));
console.log('Pomidoras'.replace('mido','ukuo'));
console.log('Pomidoras'.replace('AAAAA','BBBBBB'));

console.log('------------------------------------');
console.log('replaceAll()');

console.log('Pomidoras'.replaceAll('o','_'));
console.log('Pomidoras'.replaceAll('a','c'));

console.log('------------------------------------');
console.log('slice()');
console.log('Pyragelis'.slice());
console.log('Pyragelis'.slice(0));
console.log('Pyragelis'.slice(1));
console.log('Pyragelis'.slice(2));
console.log('Pyragelis'.slice(3));
console.log('Pyragelis'.slice(-3));

const p = 'Pyragelis';
//
//p.length-3 = 9-3 = 6

console.log(p.slice(-3));
console.log(p.slice(6));
console.log(p.slice(p.length - 3));

//           012345678
console.log('Pyragelis'.slice(2, 4));   //pradzia ima IMTINAI, todel 4 pozicija (g raide) nepaimama
console.log('Pyragelis'.slice(-100));
console.log('Pyragelis'.slice(2, 5));
console.log('Pyragelis'.slice(2, 6));
console.log('Pyragelis'.slice(2, 100));

const dalis = 'Pyragelis'.slice(2, 100);
console.log(dalis, dalis.length);

console.log('654659856545135132'.slice(2, 6));


//PASIZAISTI

console.log('------------------------------------');
console.log('split()');

const sakinys = 'Labas rytas, Lietuva';
const zodziai = sakinys.split(' ');
console.log('Labas rytas, Lietuva'.split(' '));
console.log(zodziai);
console.log(zodziai[0]);
console.log(zodziai[1]);
console.log(zodziai[2]);

/*const sakinys2 = 'Bananas';
const dalys = sakinys2.split('a');
console.log(dalys);

const sakinys2 = 'Pomidoras';
const dalys = sakinys2.split('do');
console.log(dalys);

const sakinys2 = 'Pomidoras';
const dalys = sakinys2.split('s');
console.log(dalys);

const sakinys2 = 'aaWaaWaaawaaaWaaa';
const dalys = sakinys2.split('W');
console.log(dalys);

const sakinys2 = 'aawaawaaawaaaaaa';
const dalys = sakinys2.split('a');
console.log(dalys);

const sakinys2 = 'Pomidoras';
const dalys = sakinys2.split('x');
console.log(dalys);

const sakinys2 = 'Pomidoras';
const dalys = sakinys2.split('');
console.log(dalys);

const sakinys2 = '';
const dalys = sakinys2.split('aasfdg');
console.log(dalys);
*/

const sakinys2 = '';
const dalys = sakinys2.split('');
console.log(dalys);

// sakinys => tuscias / netuscias     
// split => tuscias / netuscias
// split => buvo kur kirpti / nebuvo kur kirpti


console.log('------------------------------------');
console.log('fsg'.toLowerCase());
console.log('Pomidoras'.toLowerCase());

console.log('------------------------------------');
console.log('fsg'.toUpperCase());
console.log('Pomidoras'.toUpperCase());


console.log('------------------------------------');
console.log('fsg'.trim());
console.log('Pomidoras'.trim());
console.log('"' + 'Pomidoras'.trim() + '"');
console.log('"' + 'Labas rytas'.trim() + '"');          //trim salina tarpus is priekio ir is galo, o ne tarp zodziu!!!!!!
console.log('"' + 'Labas rytas   '.trim() + '"');
console.log('"' + '   Labas rytas'.trim() + '"');       //smagus metodas, kai reikia isvalyti teksta
console.log('"' + '  Labas rytas   '.trim() + '"');
console.log('"' + '  Labas    rytas   '.trim() + '"');

const username = ' vardenis   '.trim();

console.log('------------------------------------');
console.log('fsg'.trimEnd());


console.log('------------------------------------');
console.log('fsg'.trimStart());

///////////////////////////////////////////////////////////
//jei norime gauti teksta be jokiu papildomu simboliu

const text = 'Labas rytas, Lietuva!';

//const dictionary = ['Labas', 'rytas', 'Lietuva'];

const dictionary = text
.replaceAll(',', '')
.replaceAll('!', '')
.replaceAll('  ', ' ')
.split(' ');

console.log(dictionary);


// console.log('fsg'.split());

// console.log('fsg'.toLowerCase());
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toLowerCase());
console.log("ALPHABET".toLowerCase()); // 'alphabet'

// console.log('fsg'.toUpperCase());
const sentence2 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence2.toUpperCase());

// console.log('fsg'.trim());
const greeting = '   Hello world!   ';
console.log(greeting);
console.log(greeting.trim());

// console.log('fsg'.trimEnd());
const greeting2 = '   Hello world!   ';
console.log(greeting2);
console.log(greeting2.trimEnd());

// console.log('fsg'.trimStart());
const greeting3 = '   Hello world!   ';
console.log(greeting3);
console.log(greeting3.trimStart());

//trimStart()
//trimLeft()


function abbrevName(name) {
   let sep = name.split(' ');
   let abbrev = (sep[0].charAt(0) + "." + sep[1].charAt(0)).toUpperCase();
   return abbrev;    
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");

function abbrevName(name){
    return name.split(' ').map(o => o[0].toUpperCase()).join('.');
}

