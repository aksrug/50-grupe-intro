/*
1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę 
kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.

2.Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). 
Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius 
atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
*/

//1.
const personName = 'Lady'
const personSurname = 'Gaga'
console.log(personName, personSurname);

//2.

const myName = 'Rugile'
const mySurname = 'Aksenaviciene'
const myYear = '1992'
const presentYear = '2024'

const age = presentYear - myYear;
console.log(age); 

console.log('Aš esu ' + myName + ' ' + mySurname + '. ' + 'Man yra ' + age + ' metai.'); 

console.clear();


////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('-----------------------------');

/*let labas = "labas"       // let labas ir funkcijos parametre labas, jie tarpusavyje niekada nesusisieja!!!!!!!!!!!!!

function pavadinimas (labas) {
    //funkcijos kodas
    console.log(labas);
}

///jei let'o labas ir funkcijos pavadinimo labas norime susieti, turime issikviesti funkcija ir perduoti sita
///kintamaji kaip kazkoki parametra

pavadinimas(labas);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/* let labas = 'labas123'

function pavadinimas() {
    return console.log("Sveiki atvyke");
}

pavadinimas();
pavadinimas();
pavadinimas();
pavadinimas();
pavadinimas();
pavadinimas();

*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//KAI NORIME KAZKA SUDETI
/*
let labas = "labas123"

function pavadinimas(a,b) {
    return console.log(a+b);
    
}

//console.log(pavadinimas(8,5)) arba sita eilute VIETOJ return console.log, kuria raseme virsuje
pavadinimas(5,7)
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//KAI NORIME KAZKA PALYGINTI, pvz ar yra lyginis skaicius/masyvas/string ir tt

/*function arLyginis(number) {
    if (number % 2 === 0) {    //kaip skaitome sia eilute: jei modulas dalinasi is dvieju ir nelieka liekanos
   console.log(`${number} yra lyginis`);
    }       
    else {console.log(`${number} yra nelyginis`);       
    }  
}
arLyginis(7);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// i funkcija mes galime isirasyti ir tam tikrus CIKLUS, pvz noriu, kad funkcija atspausdintu tam tikra kieki skaiciu

/*function printNumber(count) {
    for(let i=0; i<=count; i++) {     //jei pvz noretume, kad spausdintu ne nuo 0, o nuo 5, tai i=5 ir tt su visomis kitomis reiksmemis
        console.log(i);              // vietoj i++ galime rasyti ir pvz i=i+3, jei norim, kad didetu po 3 skaicius
    }
}
printNumber(10);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Sukurkite finkcija, kuri paemus sita masyva surastu didziausia jo esama skaiciu

const array = [1,5,11,-1,20,32]

function biggestNumber(arr) {
    let biggest = arr[0];
    for(let i = 0; i < arr.length; i++) { 
    if (arr[i] > biggest){
        biggest = arr[i];
    }

}
return console.log(biggest);
}
biggestNumber(array);

//////////////////////////////////////////////////////////////////////////////////////////






