/*
FUNCTION - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas

Input=> Function() => Output

*/
////visos funkcijos grazina savo darbo rezultata!!!

//bazinis funkcijos skeletas:

function funkcijosPavadinimas() {

}

const a = funkcijosPavadinimas();
console.log(a);

////////////////////////
///1
function empty() {
return undefined;
}

console.log(empty());

///2
function giveMeFive() {
    return 5;
}
console.log(giveMeFive());

///3
function giveMeSix() {
    return 6;
}
console.log(giveMeSix());

/*UZDUOTIS 1
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!
Laba diena, as esu Maryte Marytaite!
Laba diena, as esu Petras Petraitis!
Laba diena, as esu Ona Onaityte!
*/
function intro(name, surname) {
    return 'Laba diena, as esu ' + name + ' ' + surname + '!';
}
console.log(intro('Jonas','Jonaitis'));
console.log(intro('Maryte','Marytaite'));
console.log(intro('Petras','Petraitis'));
console.log(intro('Ona','Onaityte'));


/*UZDUOTIS 2
Input:
-pirmas skaicius = 5
-antras skaicius = 7

Output:
35
*/
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
console.log(multiply(5, 7));

//Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus.
//Mano vardas yra Maryte, man 88 metai ir as megstu balionus.

function iLike(name, age, item) {
return 'Mano vardas yra ' + name + ', man ' + age + ' metai ir as megstu ' + item + '.';
//return 'Mano vardas yra VARDAS, man XX metai ir as megstu DALYKAS.';

}
console.log(iLike());
console.log(iLike('Jonas'));
console.log(iLike('Maryte', 88));
console.log(iLike('Petras', 77, 'cepelinus'));

console.clear();
/////////////////

function price(value) {
    const PVM = 21;
    const priceIncrease = 1 + PVM / 100;
    const priceForSale = value * priceIncrease;

    return priceForSale;

}
console.log(price(100)); //121
console.log(price(150)); //121



