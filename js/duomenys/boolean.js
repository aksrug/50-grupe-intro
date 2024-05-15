/*

BOOLEAN - logines reiksmes

-true
-false
KINTAMASIS TURI BUTI KLAUSIMO FORMA! kai jis ne daiktavardis, naudojame IF/HAS

Boolean logikos operatoriai:
-&& (AND)    BUTINAI DVIGUBI! PIRMENYBE programa teikia AND'ui, kai skaiciuojamas rezultatas
aplink && jei yra bent vienas false, visa salyga bus false
-|| (pipeline) (OR)     BUTINAI DVIGUBI!!
-! (NOT) panaudojimas - gauname atvirkstini salygos varianta, nedeti daugiau nei 2 sauktukus

Kaip interpretuojami kiti duomenu tipai ir ju reiksmes, jei jos yra naudojamos lyg boolean'ai?
String:
- jei tuscias - false
- jei ne tuscias - true

Number:
- jei nulis - false
- jei ne nulis - true
- jei NaN - false
- jei Infinity - true
- jei -Infinity - true

Array:
- jei tuscias - true
- jei ne tuscias - true

Object:
- jei tuscias - true
- jei ne tuscias - true

Undefined - false
Null - false

*/ 

const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false; 

console.log(isSunShining);

//nes pliusas suveikia matematiskai, true interpretuoja kaip 1, todel tiesiog sudeda zodzius
console.log('KAIP NENAUDOTI:', true + true + true);
console.log('KAIP NENAUDOTI:', true * false);
console.log('KAIP NENAUDOTI:', (true + true) * true);

console.log('-----------');

console.log(true && true); 
console.log(true && false); //aplink && (ir) jei yra bent vienas false, visa salyga bus false.
console.log(false && true);  //kitaip tariant, tu turi tenkinti visas salygas
console.log(false && false);

/* PAVYZDYS
MERGINA
//kada eisiu i pasimatyma?
// -turi buti grazus
// - jaunas
// - turtingas 
*/

const isBeautiful = true;
const isYoung = true;
const isRich = true;

const willIGoTo = isBeautiful && isYoung && isRich;
console.log('>>>', willIGoTo);

/* PAVYZDYS
VAIKINAS
//kada eisiu i pasimatyma?
// -turi buti grazi
// - jauna
// - turtinga 
*/
/*const isBeautiful = true;
const isYoung = true;      //aplink || (arba) turi buti bent vienas true, kad salyga butu true
const isRich = true;       //kitaip tariant, tu turi tenkinti bent viena salyga, kad butu true
const willIGoT2 = isBeautiful || isYoung || isRich;
console.log('>>>', willIGoTo2);
*/

console.log('-----------');

console.log(2 + 2 * 2);
console.log((2 + 2) * 2);



console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('-----------');

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('-----------');

console.log(true && true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true && true || false);
console.log(false && true);
console.log(false && false);

console.log('-----------');

console.log(!true);
console.log(!false);
console.log(!!false);
console.log(!!!false);

console.clear();

///Ka reiskia kai kitus duomenu tipus naudoti kaip boolean reiksmes?

if ([154956]) {        ///////pasitikriname isirase ivairiausias reiksmes prie if
    console.log(true);
} else {
    console.log(false);
}

const bbb = 4 > 2

if (bbb) {        ///////pasitikriname isirase ivairiausias reiksmes prie if
    console.log(true);
} else {
    console.log(false);
}
