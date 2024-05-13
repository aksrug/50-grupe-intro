/* 
FOR - pagrindinis ciklas (en. loop)

*/

//kiek zingsniu nuo namu iki parduotuves:
//atstumas: 100m
//zingsnis: 1m
//zingsniu: 100 teoriskai, bet is tikruju 80-200, nes netikslus intervalas

//LAIKRODIS
//ciferblatas: 60 padalu
//trukme padalos 1s
//per kiek laiko apeis aplink? per 60s >> KAI TIKSLUS INTERVALAS

//STRUKTURA. Kai rasome cikla, jis praso esmines info - kiek kartu man kazka daryti?
// inicijuojame kintamaji i (galime ir kita zodi, bet priimta i - iteracija)
//pirmas i - startas, vidurinis i - lyg stabdziai, paskutinis i - iki kiek mes einame, kaip zingsniuojame, kiek didiname
// pirmos i reiksme galima pradeti 20 ir eiti zemyn link nulio, paskutinis i bus i--


console.log('START');

for (let i=20; i>10; i-=2.3) {
    console.log(i);
}
   
console.log('FINISH');

console.clear(); 

const colors = ['white', 'black', 'red', 'green', 'blue'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);

for (let i = 0; i <colors.length; i++) {
    console.log(i, colors[i]);
}

console.clear();

const marks = [10, 2, 8, 4, 6];
let sum = 0;
for (let i=0; i<marks.length; i++) {
    sum += marks [i];
    console.log(sum);
}

console.log(sum / marks.length);

console.clear();


//kaip skaiciuoti pazymiu vidurki is skirtingu masyvu? 
//per funkcija

const jonas = [];
const maryte = [10, 2];
const petras = [9, 8, 7];
const ona = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function marksAverage(marks) {
    if (marks.length === 0){
        return 'Nera pazymiu.';
    }
    let sum = 0;

    for (let i=0; i<marks.length; i++){
        sum += marks[i];
    }
    return sum / marks.length;
}
console.log(marksAverage(jonas));
console.log(marksAverage(maryte));
console.log(marksAverage(petras));
console.log(marksAverage(ona));