/* 
IF - palyginimas

Palyginimo operatoriai:
VISI: <, >, <=, >=, ==, !=, ===, !==
NAUDOTINI: <, >, <=, >=, ===, !==
NENAUDOTINI: ==, !=

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}
*/ 

const age = 99;
const ageLimit = 18;

//1 variantas (jei salygos netenkina, pvz 99<18, tai logikos blokas tiesiog nedirba, nerodo jokio ats)
if (age > ageLimit) {
    console.log('Sorry, bet esi per jaunas...')
} 

//2 variantas
if (age < ageLimit) {
    console.log('Sorry, bet esi per jaunas...')
} else {
    console.log('Ok, uzeik ;)')

}


//3 variantas

const color = 'blue';

if (color === 'red') {
    console.log('Raudona');
} else {
    console.log('Melyna');
}
 
///ARBA (dirba tik viena is triju salygu, neteisingos tiesiog nedirba. Jei ateitu ketvirta
// reiksme, pvz WHITE, tada nedirbtu nei vienas, nes nei vieno netenkina)
// red --> raudona
// blue --> melyna
// green --> zalia
// other --> Nezinau tokios spalvos...

const color2 = 'green' //jei irasysime WHITE, blokas nesuveiks, nebent atsirastu papildoma else dalis
let translation = ''; //galima pasirasyti empty string


if (color2 === 'red') {    //// gal cia yra raudona? NE
    console.log('Raudona')
} else if (color2 === 'blue') { ///gal cia yra melyna? NE
    console.log('Melyna');
} else if (color2 === 'green') { /// gal cia yra zalia? TAIP
    console.log('Zalia');
} else {
    translation = 'Nezinau tokios spalvos...';
}
console.log('>>>', translation);

//sutrumpinant daugybe rasymo, jei pvz turim skirtingas spalvas ir norim ju translation, naudojam funkcija

function colorTranslation(color) { //color pavadinima funkcijoje galima naudoti toki pati, //net jei jis buvo naudotas anksciau
    let translation = ''; 

    if (color === 'red') {    
        translation = 'Raudona';
    } else if (color === 'blue') { 
        translation = 'Melyna';
    } else if (color === 'green') { 
        translation = 'Zalia';
    } else if (color === 'white') { 
        translation = 'balta';
    } else {
        translation = '...';
    }
    // COLOR -> SPALVA
    return color + ' -> ' + translation;

}
console.log(colorTranslation ('white'));
console.log(colorTranslation ('black'));
console.log(colorTranslation ('red'));   /// funkcijoje viskas kas vyksta yra visiskai uzdara ekosistema!!
console.log(colorTranslation ('orange'));  //beet funkcija gali matyti, kas yra isoreje
console.log(colorTranslation ('blue'));
console.log(colorTranslation ('violet'));
console.log(colorTranslation ('green'));
console.log(colorTranslation ('yellow'));




//PALYGINIMO OPERATORIU PANAUDOJIMAS

if (4 > 2) {
    console.log('TAIP, daugiau');
} else {
    console.log('NE, maziau');
}

if (4 >= 2) {
    console.log('TAIP, daugiau');
} else {
    console.log('NE, maziau');
}

if (4 <= 2) {
    console.log('TAIP, daugiau');
} else {
    console.log('NE, maziau');
}
if (4 != 2) {
    console.log('TAIP, daugiau');
} else {
    console.log('NE, maziau');
}
if (4 === 2) {
    console.log('TAIP, daugiau');
} else {
    console.log('NE, maziau');
}

