/* 
Destrukturizavimas
gimininga 'siela' - spread
*/

const a = [10, 2, 8, 4, 6];
const first = a[0];
const second = a[1];
const rest = a.slice(2); 

console.log(first);
console.log(second);
console.log(rest);


////////////////////////////////////////////

const b = [10, 2];
const first2 = b[0];
const second2 = b[1];
const rest2 = b.slice(2); 

console.log(first2);
console.log(second2);
console.log(rest2);

////visa tai galime parasyti TRUMPIAU

const dict = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau']; //cia yra STRUKTURIZAVIMAS
//const [word1] = dict;     //apgaubimas lauztiniais skliaustais ir vadinamas destrukturizavimu
const [word1, word2, ...restOfDict] = dict;
console.log(word1);     //atbulinis veiksmas, iskrapstome reiksmes is masyvo
console.log(restOfDict);

//rest operatorius surenka likusias reiksmes

//const [word2] = dict;     
console.log(word2); 

const [word3] = dict;     
console.log(word3); 

////////////////////////////////////////////////////////////////////////
//kas jeigu turime funkcija

function giveMeTwoNumbers() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return [a, b];
}

const res1 = giveMeTwoNumbers();
//const n1 = res1[0];
//const n2 = res1[1];  sutrumpiname zemiau

const [n1, n2] = res1;

console.log(res1, n1 + n2);

const res2 = giveMeTwoNumbers();
const [n3, n4] = res2;

console.log(res2, n3 + n4);

///////////////////////////////////////////////////////////////
//ar galima ta pati daryti su objektu?

const person = {
    name: 'Ona',
    age: 66,
    isMarried: true,
}

const userName = person.name;
const userAge = person.age;
const userIsMarried = person.isMarried;
///ir cia ateina destrukturizavimas
//kai destrukturizuojame objekta, yra papildoma salyga, negaliojanti masyvams
//objekto viduje esancios reiksmes yra susijusios raktiniais zodziais

const {age, name, ...restDetails} = person; 
console.log(age);        //reiksmiu eiliskumas nesvarbus
console.log(name);
console.log(restDetails);

//////////////////////////

function food() {
    const list = [
        { title: 'cepelinai', count: 2 },
        { title: 'saltibarsciai', count: 1},
        { title: 'svogunu laiskai', count: 10},
     ];
     return list[Math.floor(Math.random() * list.length)]; 
}

/*const f1 = food();
const sentence1 = `Valgysi: ${f1.title}; Kiekis: ${f1.count}.`;
console.log(sentence1);
*/
///kaip sumazinti kodo kieki

const f1 = food();
//const title = randomFood1.title;
//const count = randomFood1.count;

/*
//1.
const { title, count} = food();
const sentence1 = `Valgysi: ${title}; Kiekis: ${count}.`;
console.log(sentence1);

//2.
const f2 = food();
const title2 = f2.title;
const count2 = f2.count;
const sentence2 = `Valgysi: ${title2}; Kiekis: ${count2}.`;
console.log(sentence2);

//3.
const f3 = food();
const title3 = f3.title;
const count3 = f3.count;
const sentence3 = `Valgysi: ${title3}; Kiekis: ${count3}.`;
console.log(sentence3);
*/

/*
const f1 = food();
const pavadinimas = f1.title;
const = kiekis = f1.count;
const sentence1 = `Valgysi: ${pavadinimas}; Kiekis: ${kiekis}.`;
console.log(sentence1);
*/

/*
const { title: kitasPavadinimas } = food();
console.log(kitasPavadinimas);
//const sentence1 = `Valgysi: ${pavadinimas}; Kiekis: ${kiekis}.`;
//console.log(sentence1); 
*/

const { title: f1Title, count: f1Count } = food();
const sentence1 = `Valgysi: ${f1Title}; Kiekis: ${f1Count}.`;
console.log(sentence1); 

const { title: f2Title, count: f2Count } = food();
const sentence2 = `Valgysi: ${f2Title}; Kiekis: ${f2Count}.`;
console.log(sentence2); 

console.clear();

///////////////////FUNKCIJOS////////////////////////////////////////////////////

function drinks(...list) {
    console.log(list);
    return `Gerimu kiekis: ${list.length}.`;
}

console.log(drinks('a', 'b', 'c', 'b', 'c', 'b', 'c'));

function iLike(name, ...list) {
    return `${name} megsta ${list.length} spalvas.`;
}

console.log(iLike('Petras'));
console.log(iLike('Jonas', 'red', 'blue'));
console.log(iLike('Maryte', 'white', 'black', '50greys'));

function nextFunc(a, b, c, ...restParams) {
    return null;
}

console.log(Math.max(10, 7));
console.log(Math.min(10, 7));

const marks = [10, 2, 8, 4, 6];
console.log(Math.max(...marks));
console.log(Math.min(...marks));









