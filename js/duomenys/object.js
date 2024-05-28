/* 
OBJECT - objektas
*/

const empty = {};  //riestiniai skliaustai simbolizuoja objekta
console.log(empty);

//Kam gali prireikti objekto?
//yra dalis informacijos, kuri, bendrai paemus, grupeje, jie apibudina kazkoki objekta
//pvz studentai

const student1Name = 'Jonas';
const student1Age = 99;
const student1IsMarried = true;

const student2Name = 'Maryte';
const student2Age = 88;
const student2IsMarried = false;

const student3Name = 'Petras';
const student3Age = 77;
const student3IsMarried = false;

const student4Name = 'Ona';
const student4Age = 66;
const student4IsMarried = true;

//sutraukiame viska i masyva, kad butu trumpesnis uzrasymas

/*const stud1 = ['Jonas', 99, true]; 
const stud2 = ['Maryte', 88, false]; 
const stud3 = ['Petras', 77, false]; 
const stud4 = ['Ona', 66, true]; 
*/

//dabar istraukime is ju Marytes amziu
//console.log(stud2[1]);
//istraukime Petro amziu, ir tt
//console.log(stud3[1]);

//bet jei ivyksta informacijos eiliskumo neatitikimai, 
//TURIME PROBLEMA, todel galime panaudoti OBJEKTA,{}, tuomet galime info tikrinti nepaisant eiliskumo
const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
}
console.log(stud1);
console.log(stud1.name);
console.log(stud1.age);
console.log(stud1.isMarried);

const stud2 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
}
console.log(stud2);
console.log(stud2.name);
console.log(stud2.age);
console.log(stud2.isMarried);

const students = [
    {name: 'Jonas', age: 99, isMarried: true},
    {name: 'Maryte', age: 88, isMarried: false},
    {name: 'Petras', age: 77, isMarried: false},
    {name: 'Ona', age: 66, isMarried: true},
    //{name: 'Chuck', age: Infinity, isMarried: NaN},
];


console.log(students);
console.log(students.length);  //kiek yra studentu?
//kaip gauti paskutinio studento visa info?
console.log(students[3]);  //sitas galiojo tik iki kol atsirado dar vienas papildomas studentas

//kaip gauti paskutinio studento visa info? paskutini objekta?
console.log(students[students.length - 1]); //SITA ZINOTI LABAI SVARBU!!!!!
//arba
console.log(students.at(-1));

//kaip suzinoti paskutinio studento varda?
console.log(students.at(-1).name);

//kaip suzinoti paskutinio studento amziu, vedybini statusa ir tt?
console.log(students.at(-1).age);
console.log(students.at(-1).isMarried);

//domina pirmo studento info
console.log(students[0].name);
console.log(students[0].age);
console.log(students[0].isMarried);
//antro studento ir tt
console.log(students[1].name);
console.log(students[1].age);
console.log(students[1].isMarried);



//noriu apie visus studentus pamatyti si sakini:
//Sveiki, as VARDAS, man XX metu ir esu/nesu vedes.

function introduction(studentData) {
    if (studentData.isMarried === true) {
        return `Sveiki, as ${studentData.name}, man ${studentData.age} metu ir esu vedes.`;
    } else {
        return `Sveiki, as ${studentData.name}, man ${studentData.age} metu ir nesu vedes.`;
    }
     
}
console.log(introduction(students[0]));
console.log(introduction(students[1]));
console.log(introduction(students[2]));
console.log(introduction(students[3]));

///Ar galima uzrasyti su siek tiek maziau kodo? SURE!

function introduction(studentData) {
    const status = studentData.isMarried ? 'esu' : 'nesu';
    return `Sveiki, as ${studentData.name}, man ${studentData.age} metu ir ${status} vedes.`;     
}

for (let i = 0; i < students.length; i++) {
    console.log(introduction(students[i]));
}

console.clear();

//Standartine objekto sintakse
//vs
//Supaprastinta objekto sintakse


const stud3 = {
    name: 'Petras',
    age: 77,
    isMarried: false,
}

//Supaprastinta objekto sintakse
console.log(stud3.name);
console.log(stud3.age);
console.log(stud3.isMarried);

//Supaprastinta objekto sintakse
console.log(stud3['name']);
console.log(stud3['age']);
console.log(stud3['isMarried']);

const key = 'age';
console.log(stud3.key);
console.log(stud3.lkjglsdjfslkjf);
console.log(stud3['age']);
console.log(stud3[key]);

console.clear();
///////////////////////////////////////////////////////////////////////////

function giveMe(data, key) {
    return data[key];
}
console.log(giveMe({name: 'Jonas', age: 99 }, 'name'));
console.log(giveMe({name: 'Jonas', age: 99 }, 'age'));
console.log(giveMe({name: 'Jonas', age: 99 }, 'isMarried'));
console.log(giveMe({title: 'Svente', page: 1, size: 3 }, 'title'));
console.log(giveMe({title: 'Svente', page: 1, size: 3 }, 'page'));
console.log(giveMe({title: 'Svente', page: 1, size: 3 }, 'size'));
console.log(giveMe({title: 'Svente', page: 1, size: 3 }, 'xxx'));
