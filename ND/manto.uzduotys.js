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

const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder',
    'better late than never',
    'birds of a feather flock together',
    'cleanliness is next to godliness',
    'dont bite the hand that feeds you',
    'dont count your chickens before they hatch',
    'dont put all your eggs in 1 basket',
    'every cloud has a silver lining',
    'every dog has its day',
    'every rose has its thorn',
    'fortune favors the bold',
    'good things come to those who wait',
    'a watched pot never boils',
    'haste makes waste',
    'history repeats itself',
    'cat got your tongue',
    'home is where the heart is',
    'if the shoe fits, wear it',
    'ignorance is bliss',
    'it takes two to tango',
    'arabs have 100 words for sand',
    'kill two birds with one stone',
    'laughter is the best medicine',
    'love is blind',
    'money doesnt grow on trees',
    'no pain no gain',
    'nothing ventured nothing gained',
    'once bitten twice shy',
    'practice makes perfect',
    'the early bird catches the worm',
    'the grass is always greener on the other side',
    'the pen is mightier than 10 swords',
    'theres no smoke without fire',
    'time heals all wounds',
    '5 second rule',
    'every dog has its day',
    'to err is human to forgive divine',
    '2 wrongs dont make a right',
    'when in Rome do as the Romans do',
    'where theres smoke, theres fire',
    'you cant judge a book by its cover',
    'you cant make an omelette without breaking eggs',
    'you reap what you sow',
    'youre never too old to learn'
];

//Surasti ilgiausią stringą;

function longestString(arr) {
    let string = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > string.length) {
            string = arr[i];

        }
    }
    return console.log(string);
}

longestString(B);


// Surasti trumpiausią stringą;

function shortestString(array) {
    let shortest = array[0];
    console.log(shortest);

    for (let i = 0; i < array.length; i++) {
        if (shortest.length > array[i].length) {
            shortest = array[i];
        }
    }
    return console.log(shortest);
}

shortestString(B);


// Surasti pirma stringa, kuris prasideda “a” raide;

function startWithA(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith("a")) {
            string = array[i];
            break;
        }
    }
    return console.log(string);
}
startWithA(B);

//Paskaiciuoti, kiek yra stringu, kurie prasideda "a" raide

function startWithA(array) {
    let string = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith("a")) {
            string++;
        }
    }
    return console.log(string);
}
startWithA(B);

//Isrinkti visus stringus, kurie prasideda raide "a"

function startWithA(array) {
    let stringArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith("a")) {
            stringArray.push(array[i])
        }
    }
    return console.log(stringArray);
}
startWithA(B);


// Surasti stringą su daugiausia žodžių;

function longest(array) {
    let stringLongest = "";
    let maxWordsCount = 0;
    for (let i = 0; i < array.length; i++) {
        let wordCount = array[i].split(" ").length;
        console.log(wordCount);
        if (wordCount > maxWordsCount) {
            maxWordsCount = wordCount;
            stringLongest = array[i];

        }

    }
    return console.log(`Ilgiausias stringas: ${stringLongest} jis turi ${maxWordsCount} zodziu`);
}
longest(B);


// Surasti pirma stringą su mažiausiai žodžių;

function shortest(array) {
    let shortest = array[0];
    
    for (let i = 0; i < array.length; i++) {
        
        if (array[i].split(" ").length < shortest.split(" ").length) {
            shortest = array[i];

        }

    }
    return console.log(shortest);
}
shortest(B);


// Suskaičiuoti, kiek stringų turi daugiau nei 4 žodžius;

function fourAndMore (array) {
    let fourAndMore = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > )
    }
return console.log(fourAndMore);
}
fourAndMore(B);



// Suskaičiuoti kiek masyve yra žodžių;
// Suskaičiuoti visas ‘s’ raides;
// Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);
// Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);



