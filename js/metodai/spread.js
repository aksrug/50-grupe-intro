/*
Spread operatorius (tritaskis)
Destrukturizavimas
*/

//Value by reference (nuoroda i atminties vieta)
const a = [1, 2, 3];
const b = a;   //parasant sia lygybe mes pasakome, kad tiek a tiek b naudojasi tuo paciu resursu

console.log(a);
console.log(b);

a[0] = 44;
console.log(a);
console.log(b);

b[2] = 777;
console.log(a);
console.log(b);

/////////////////////
let c = 7;
let d = c; 

console.log(c, d);
c = 99999999;
console.log(c, d);

d = 11111111;
console.log(c, d);

console.clear();
///////////////////////////////////////////////////////////////////////////////////////
//...Spread pavyzdziai masyve

const e = [1, 2, 3];
const f = [...e];   //tritaskiai pries masyva reiskia, kad einame i masyva e ir visas jame esancias reiksmes sukeliame i ... vieta
console.log(e,f);

e[0] = 111;
console.log(e, f);    //pakeitus reiksme - originalo neliecia, tik kopija

f[2] = 9999999;      
console.log(e, f);    //pakeitus reiksme - originalo neliecia, tik kopija

const g = [...e, 4, 5];
console.log(g);

const h = [55, ...e, 51, ...e, ...e, 777];
console.log(h);

console.clear();

//////////////////////////////////////////////////////////////////////////////
//...spread panaudojimas objekte

const obj1 = {name: 'Jonas', age: 99};
const obj2 = obj1          /// sie obj dalinasi info - nukopijuoja nuoroda i atminties vieta

obj1.name = 'Maryte';
console.log(obj1);
console.log(obj2);

obj1.age = 88;
console.log(obj1);
console.log(obj2);

//dazniausiai mes norime tureti DU ATSKIRUS objektus, kad butu galima juos atskirai administruoti
//ir jie vienas kito neitakoja

const obj3 = {brand: 'Audi', model: '80'};
const obj4 = {...obj3};

console.log(obj3);
console.log(obj4);

obj3.brand = 'Volvo';
console.log(obj3);
console.log(obj4);

obj4.model = 'S40';
console.log(obj3);
console.log(obj4);

console.clear();
//////////////////////////////////////////////////////////////////////////////////

const person = {
    name: 'Petras',
    age: 77,
}

const address = {
    city: 'Miestas',
    street: 'Gatve 123',
    number: 45,
}

const fullPersonDetails = {
    ...person, 
    ...address,
    id: 11111111111,
    phone: 8612345678,
    name: 'Ona',
    name: 'Petras',    ///kai vyksta overridinimas, VISADA LAIMI PASKUTINE REIKSME!!
};
console.log(fullPersonDetails);
console.log(fullPersonDetails.id);
console.log(fullPersonDetails.name);
console.log(fullPersonDetails.age);

////////////////////////////////////////////////////////////////////////////

const str = 'abc';
const arr = [
    'a', //indexas 0
    'b', //indexas 1
    'c'  //indexas 2
];
const obj = {
    0: 'a', 
    1: 'b', 
    2: 'c'
};

str[2]
arr[2]  //str ir arr yra susije
//stringas yra savotiskai supaprastintas array
//array yra supaprastintas objektas

console.log(str[2], arr[2], obj[2]);
console.log(str[1], arr[1], obj[1]);
console.log(str[0], arr[0], obj[0]);

////////////////////////////////////////////

const k = [1, 2, 3];
const l = {name: 'Ona', age: 66};

//const o = [...k, ...l];
const p = {...k, ...l};

//console.log(o);
console.log(p);

///////////////////////////////////////////////////////////////////////////


