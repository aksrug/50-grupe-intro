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

const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64,
    -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6,
    86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 
    56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 
    99, 70, -41, 91];

    console.log("Veikia");


//Surasti didziausia skaiciu

function maxValue(arr) {
let biggestNumber = arr[0];
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggestNumber) {
        biggestNumber = arr[i];
    }
   }
   return console.log(biggestNumber);

}
maxValue(A);


//Surasti maziausia skaiciu

function minValue(arr) {
    let smallestNumber = arr[0];
       for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i];
        }
       }
       return console.log(smallestNumber);
    
    }
    minValue(A);


//Surasti didziausia neigiama skaiciu

function largestNegativeNumber(arr) {
    let largestNegative = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && largestNegative < arr[i]) {
            largestNegative = arr[i];
        }
    }
    return console.log(largestNegative);
}
largestNegativeNumber(A); 


//Surasti didziausia skaiciu, kuris yra mazesnis uz 50

function biggest(arr) {
    let biggestMinus = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 50 && arr[i] > biggestMinus) {
            biggestMinus = arr[i];
        }
    }
    return console.log(biggestMinus);
}
biggest(A);


//Suskaiciuoti teigiamu skaiciu suma

function arrsum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            sum += arr[i];
        }
    }
    return console.log(sum);
}
arrsum(A);


//Suskaiciuoti neigiamu skaiciu kvadratu (skaiciu pakeltu kvadratu) suma

function kvadratas(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            sum += arr[i]**2;
        }
    }
    return console.log(sum);
}
kvadratas(A);



//Suskaiciuoti, kiek skaiciu patenka i intervala (imtinai) 25-75

function intervalas(arr) {
    let range = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 25 && arr[i] <= 75) {
            range++;
        }
    }
    return console.log(range);
}
intervalas(A);


//Suskaiciuoti, kiek skaiciu yra 0-iai;

function nuliniai(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        }
    }
    return console.log(count);
}
nuliniai(A);



//Suskaiciuoti, kiek skaiciu be liekanos dalinasi is 3

function liekana(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            count++;
        }
    }
    return console.log(count);
}
liekana(A);


//Suskaiciuoti neigiamu skaiciu vidurki

/*
function vidurkis(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (arr[i] < 0) {
            count++;
            sum += arr[i];
        }
    }
    const average = (sum/count).toFixed(2);
    return average;
}
console.log(vidurkis(A));
*/

//ARBA

function calculate(arr) {
    const negativeNumbers = arr.filter((item) => item < 0);
    if (negativeNumbers.length === 0) {
        return 0;
    }
    let sum = negativeNumbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    console.log(sum);

    const average = sum / negativeNumbers.length;
    return console.log(average);
}

calculate(A);

///////////////////////////////////////////////////////////////////////////////////////////////////////////





