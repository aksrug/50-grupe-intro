// 1 etapas
const n1 = 7;
const n2 = 5;
const n3 = 2;

const str1 = 'Labas';
const str2 = 'rytas';
const str3 = 'Lietuva';

const marks1 = [10, 2, 8, 4, 6];
const marks2 = [9, 8, 7];

const class1 = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const class2 = ['Chuck', 'Norris', 'Jan', 'Clod', 'Van', 'Damas'];

// 2 etapas
const sum = n1 + n2 + n3;
console.log(sum);

const sentence = str1 + ' ' + str2 + ' ' + str3;
console.log(sentence);

const marksSum1 = marks1[0] - marks1[1] + marks1[2] - marks1[3] + marks1[4];
console.log(marksSum1);

const marksSum2 = marks2[0] - marks2[1] + marks2[2];
console.log(marksSum2);

const class1Total = class1[3] + ', ' + class1[2] + ', ' + class1[1] + ', ' + class1[0];
console.log(class1Total);

const class2Total = class2[5] + ', ' + class2[4] + ', ' + class2[3] + ', ' + class2[2] + ', ' + class2[1] + ', ' + class2[0];
console.log(class2Total);

console.log('-------------');

console.log(str1, str1.length);
console.log(str2, str2.length);
console.log(str3, str3.length);
console.log('                       '.length);

if (str1.length === str3.length) {
    console.log('taip');
} else {
    console.log('ne');
}

if (class1.length === class2.length) {
    console.log('taip');
} else {
    console.log('ne');
}

console.clear();

function intevalSum(start, finish) {
    let answer = 0;

    for (let i = start; i <= finish; i++) {
        answer += i;
    }

    return answer;
}

console.log(intevalSum(0, 0));
console.log(intevalSum(0, 4));
console.log(intevalSum(13, 21));
console.log(intevalSum(0, 100));
console.log(intevalSum(574, 815));
console.log(intevalSum(-50, 50));
console.log(intevalSum(-70, 30));

// 0..0
let answer1 = 0;
for (let i = 0; i <= 0; i++) {
    answer1 += i;
}
console.log(answer1);

// 0..4
let answer2 = 0;
for (let i = 0; i <= 4; i++) {
    answer2 += i;
}
console.log(answer2);

// 0..100
let answer3 = 0;
for (let i = 0; i <= 100; i++) {
    answer3 += i;
}
console.log(answer3);

console.clear();

function reverseString(text) {
    let answer = '';

    // for (let i = 0; i < text.length; i++) {
    //     answer += text[text.length - 1 - i];
    // }

    for (let i = 0; i < text.length; i++) {
        answer = text[i] + answer;
    }

    // for (let i = text.length - 1; i >= 0; i--) {
    //     answer += text[i];
    // }

    // for (let i = text.length - 1; i >= 0; i--) {
    //     answer = text[text.length - 1 - i] + answer;
    // }

    return answer;
}

console.log(reverseString('labukas'), '-->', 'sakubal');
console.log(reverseString('alus'), '-->', 'sula');
console.log(reverseString('sedek uzu kedes'), '-->', 'sedek uzu kedes');


console.clear();

function numberCount(start, finish, step) {
    let answer = 0;

    for (let i = start; i <= finish; i++) {
        // jeigu, skaiciu dalinant is step liekana yra nulis, tai answer dydiname vienu vienetu
        if (i % step === 0) {
            answer++;
        }
    }

    return 'Skaičių intervale tarp ' + start + ' ir ' + finish + ', besidalijančių be liekanos iš ' + step + ' yra ' + answer + ' vienetai.';
}

console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));

console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));

console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 18, 5));
console.log(numberCount(-18, 18, 7));

console.clear();

function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

console.clear();

///////////////////////////////////////////////////////////////////////////
//SURASYKIME ATBULAI SKAICIUS, turint ju sarasa

/*function reverseArrayOfNumbers(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }

    for (let i = list.length - 1; i >= 0; i--){
        console.log(list[i]);
    }
}

reverseArrayOfNumbers([1, 2, 3, 4, 5]);
*/

//KAIP APSUKTI MASYVE ESANCIAS REIKSMES? 

function reverseArrayOfNumbers(list) {
    const rev = [];
    for (let i = list.length - 1; i >= 0; i--) {
        rev.push(list[i]);
    }
    return rev;
}
const ats = reverseArrayOfNumbers([1, 2, 3, 4, 5]);
console.log(ats);

//////////////////////////////////
//PUSH panaudojimas

const powerOfTwo1 = [];
const powerOfTwo2 = [];

for (let i = 0; i < 10; i++) {
    powerOfTwo1.push(2 ** i);
    powerOfTwo2.unshift(2 ** i);
}

console.log(powerOfTwo1);
console.log(powerOfTwo2);