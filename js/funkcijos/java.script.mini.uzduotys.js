// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

//1.Funkcija pavadinimu “tusciaFunkcija”:

//a.nepriima jokių kintamųjų, b.neatlieka jokios vidinės logikos, c.gražina boolean tipo reikšmę “false”
// TESTAS: console.log( tusciaFunkcija() ); rezultatas: false

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

//2.Funkcija pavadinimu “daugyba/multiply”:
//a.priima du skaičiaus tipo kintamuosius
//b.atskirame kintamajame įsimena sandaugos reikšmę
//c.gražina sandaugos rezultatą
//d.TESTAI: console.log( daugyba( skaicius1, skaicius2 ) );
//          console.log( daugyba( skaicius3, skaicius2 ) );
//          console.log( daugyba( skaicius1, skaicius3 ) );
//          rezultatas: teisingos reikšmės;
   
/*
-Jeigu pirmas parametras nera skaicius
  -graziname klaidos pranesima
-jeigu antras parametras nera skaicius
  -graziname klaidos pranesima
  -Atskirame kintamajame issisaugome sandaugos reiksme
  -Graziname sandaugos reiksme
/*function multiply(firstNumber, secondNumber) {
    const answer = firstNumber * secondNumber;
    return answer;
}
*/

function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaiciaus tipo.'
    }
    if (typeof b!== 'number') {
        return 'Antrasis parametras turi buti skaiciaus tipo.'
    }
    const answer = a * b;
    return answer;
}

console.log(multiply(2, 2));
console.log(multiply(2, -2));
console.log(multiply(-2, -2));
console.log(multiply(-2, 2));
console.log(multiply(2, 3.1415));
console.log(multiply(2, Infinity));
console.log(multiply(Infinity, Infinity));
console.log(multiply(Infinity, -Infinity));   //ir tt galim rasytis galybe variantu
console.log(multiply(2, NaN));
console.log(multiply(NaN, NaN));
console.log(multiply(NaN, -NaN));

console.log(multiply(5, 'Labas')); //netinkamo tipo reiksme
console.log(multiply(5, 'Labas'.length));
console.log(multiply(5, []));  //KODEL ISSPAUSDINA NULI??? 
console.log(multiply(5, [].length));
console.log(multiply(5, [7]));
console.log(multiply(5, [7].length));
console.log(multiply(5, [7, 2]));
console.log(multiply(5, [7, 2].length));

console.log(multiply(5, true)); //true interpretuojamas kaip 1
console.log(multiply(5, false)); //false interpetuojamas kaip 0
console.log(multiply(5, undefined));
console.log(multiply(5, null));
console.log(multiply(5, multiply)); //sitaip niekas neraso, cia tik pvz :) netinkamo tipo reiksme

console.clear();

/////////////////////////////////////////////////////////////////////////////////////////////////////
//3.Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
//a.priima vieną kintamąjį
//b.jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
//c.priešingu atveju, funkcija tęsia darbą
//d.į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį


const c = 'abcde';
console.log(c);

function skaitmenuKiekisSkaiciuje(c) {
    if (isNaN(c)) {
        return 'Pateikta netinkamo tipo reiksme';
    } else if (typeof c == "boolean") {
        return 'Pateikta netinkamo tipo reiksme';
    } else {
        return c.toString().length;
    }
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.log('--------------------');

console.clear();

///////////////////////////////////////////////////////////////////////////////////////////////////
//4. Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// a.priima viena kintamaji
// b.jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// c. jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.
// d.priešingu atveju, funkcija tęsia darbą
// e.pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// f.gražina didžiausią surastą skaičių

function didziausiasSkaiciusSarase(reiksme) {
    if (Array.isArray(reiksme) === false) {
        return 'Pateikta netinkamo tipo reikšmė';
    } else if (reiksme.length === 0) {
        return 'Pateiktas sarasas negali buti tuscias';
    } else { 
        let largest = 0;
        for (let i = 0; i < reiksme.length; i++) {
            if (reiksme [i] > largest) {
                largest = reiksme[i];
            }
        }
        return largest;
    }
}
//TESTAI:
console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));  //kodel gaunasi 0??
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));

console.log('--------------------');

console.clear();

////////////////////////////////////////////////////////////////////////////////////////////////////
//5.Funkcija pavadinimu “isrinktiRaides”
//a. priima du kintamuosius
/// i. pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
/// ii. antrasis nurodo kas kelintą raidę išrinkti

//b. patikrinti, ar pirmasis kintamasis yra teksto tipo:
/// i.jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
/// ii.priešingu atveju tęsiame darbą

//c.patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
/// i.jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.
/// ii.priešingu atveju tęsiame darbą

//d.patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
/// i.jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
/// ii.priešingu atveju tęsiame darbą

//e.patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
/// i.jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
/// ii.priešingu atveju tęsiame darbą

//f.patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
/// i.jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
/// ii.priešingu atveju tęsiame darbą

//g.išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)

//h.išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo

//i.gražina rezultatą

function isrinktiRaides(text, step) {
    let resultText = '';
    if (typeof text !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    } else if (text.length === 0) {
        return 'Pirmojo kintamojo reiksme yra netinkamo dydzio.';
    } else if (text.length > 100) {
        return 'Pirmojo kintamojo reiksme yra netinkamo dydzio.';
    } else if (typeof step !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo';
    } else if (step <= 0) {
        return 'Antrasis kintamasis turi buti didesnis uz nuli.';
    } else if (step > text.length) {
        return 'Antrasis kintamas turi buti ne didesnis uz pateikto teksto ilgi.'
    } else {
        
        for (let i = step -1; i < text.length; i += step) {
            resultText = resultText + text[i];

    }
    
        
        }
        return resultText;
    }


//TESTAI:

console.log(isrinktiRaides('abcdefg', 2));
console.log(isrinktiRaides('abcdefghijkl', 3));
console.log(isrinktiRaides('abc', 0));
console.log(isrinktiRaides('abc', 4));
console.log(isrinktiRaides(1561, 2));

console.log('--------------------');

console.clear();

/////////////////////////////////////////////////////////////////////////////////////////////////////
//6.Funkcija pavadinimu “dalyba”:
// a.turi priimti du kintamuosius
// b.reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
/// i.esant blogoms sąlygoms, išvesti atitinkamą pranešimą
/// ii.esant geroms - tęsti darbą
// c.į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
/// i.daliname pirmąjį skaičių iš antrojo
// d. grąžinti suskaičiuotą reikšmę

function dalyba(num1, num2) {
    if (num2 === 0) {
        return 'Dalyba is nulio negalima.';
    } else if (typeof num1 === 'string') {
        return 'Pateikta netinkamo tipo reiksme.';
    } else if (typeof num2 === 'string') {
        return 'Pateikta netinkamo tipo reiksme.';
    } else if (typeof num1 === 'boolean') {
        return 'Pateikta netinkamo tipo reiksme.';
    } else if (typeof num2 === 'boolean') {
        return 'Pateikta netinkamo tipo reiksme.';
    } 
    return num1 / num2;
}

//TESTAI: 
console.log(dalyba(4, 0));
console.log(dalyba('tekstas', 2));
console.log(dalyba(7, 'tekstas'));
console.log(dalyba(3, true));
console.log(dalyba(false, 6));

console.log(dalyba(-100, 20));
console.log(dalyba(55, 4));