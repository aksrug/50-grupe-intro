/*
UNARY - vienybe (a++, a--)
BINARY - dvejybe (a+b)
TERNARY - trejybe (a?b:c)
*/

let a = 0;

if (4 < 2) {
    a = 10;
} else {
    a = 5;
}
console.log(a);

//SUTRUMPINIMAS IF'o else'o
        //if   //YES  //NO
const b = 4 > 2 ? 888 : 666;
console.log(b);

const c = 4 < 2 ? 123 : 456;
console.log(b);

const d = 1 + 2 > 3 ? 4 : 5;
console.log(d);

/*const d = 1 + (2 > 3 ? 4 : 5);
const d = 1 + (false ? 4 : 5);
const d = 1 + (5);
const d = 6;
console.log(d);
*/

const e = 1 > 2 ? 3 : 4 + 5;
//const e = false ? 3 : 4 + 5;
//const e = 4 + 5;
//const e = 9;
console.log(e);

//const e2 = 1 > 2 ? 3 : (4 + 5);
//const e2 = 1 > 2 ? 3 : 9;
//const e2 = false ? 3 : 9;
//const e2 = 9;
//console.log(e2);

const f = 'labas'.length > 0 ? 'ilgas' : 'tuscias';
//const f = 5 > 0 ? 'ilgas' : 'tuscias';
//const f = 5 > true ? 'ilgas' : 'tuscias';
//const f = 'ilgas';
console.log(f);

const g = 'pomidoras' [0];
console.log(g);

const g2 = 'pomidoras' [1 < 2 ? 0 : 5];
console.log(g2);

const g3 = 'pomidoras' [1 > 2 ? 0 : 5];
console.log(g3);

const g4 = 'pomidoras' [2 + (1 < 2 ? 0 : 5)];    //issaukia M raide
console.log(g4);

const gIndex = 2 + (1 < 2 ? 0 : 5);
const g5 = 'pomidoras' [gIndex];    //irgi issaukia M raide
console.log(g5);

/* 
Jeigu skaicius yra teigiamas, tai ji sumuojame su savimi;
Jeigu skaicius yra neigiamas, tai is jo atimame 10.
*/
const sum = (a, b) => a + b;
const diff = (a, b) => a - b; 

//const n = 7;
//const ats = sum(n, n);
//console.log(ats);

const n = -5;
const ats2 = n > 0 ? sum(n, n) : diff(n, 10);

let ats = null;

if (n > 0) {
    ats = sum(n, n);
} else {
    ats = diff(n, 10);
}

console.log(ats);
console.log(ats2);


/* 
Jeigu tekstas yra trumpas (t.y. iki 5 simboliu),
tai grazink pirma simboli, priesingu atveju, grazink paskutini.
*/

const first = s => s[0];
const last = s => s.at(-1);
//const last = s => s[s.length - 1];

const text1 = 'Labas';
const strAts = text1.length < 5 ? first(text1) : last(text1);
console.log(strAts);

////////KITAS ATSAKYMO ISGAVIMO VARIANTAS

const funcToCall = text1.length < 5 ? first : last;
const strAts2 = funcToCall(text1);
console.log(funcToCall);
console.log(strAts2);

//////////////////////////////////////////////////////////////////////////

const jonasMarks = [];
const maryteMarks = [10, 2, 8, 4, 6];

function emptyMarksArray() {
    return 'Studentas neturi pazymiu, todel negalime apskaiciuoti jo pazymiu vidurkio.';
}

function marksAverage(marks) {
    const sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];   //suma plius lygu kazkelintas pazymys
    }

    const count = marks.length;  //kiekis
    const average = sum / count;
    return average;
}

const jonasFunc = jonasMarks.length === 0 ? emptyMarksArray : marksAverage;
const jonasAverage = jonasFunc(jonasMarks);
console.log(jonasAverage);

/*
const maryteFunc = maryteMarks.length === 0 ? emptyMarksArray : marksAverage;
const maryteAverage = maryteFunc(maryteMarks);
console.log(maryteAverage);
*/

