/*
ARRAY - masyvas, sarasas, listas, matrica, kolekcija, rinkinys
*/

const empty = [];  ///savotiska informacijos busena nuo 'pirkiniu krepselis yra tuscias'
console.log(empty);


//KLAUSIMAS: kodel gali reiketi tokio duomenu tipo saraso? dalinai palengvina matematika, sutrumpina rasyma ranka
//nes pvz kaip alternatyva galetu buti:

const mark1 = 10;
const mark2 = 2;   //pazymiai
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;


//KLAUSIMAS: mes norime suskaiciuoti pazymiu vidurki

const sum = mark1 + mark2 + mark3 + mark4 + mark5;
const count = 5;
const average1 = sum / count;

console.log(average1);


//             0,  1, 2, 3, 4, ...
const marks = [10, 2, 8, 4, 6] 
console.log(marks);

console.log('>>>', marks[0]); //pirma reiksme istraukiama su NULIU!!!!
console.log('>>>', marks[1]);  //antra reiksme istraukiama su 1 ir tt
console.log('>>>', marks[2]);
console.log('>>>', marks[3]);
console.log('>>>', marks[4]);


const sum2 = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
const count2 = marks.length; //LENGTH istraukia nariu kieki!!!!!!!!!!!
const average2 = sum2 / count2;

console.log('Suma', sum2);
console.log('Kiekis', count2);
console.log('Vidurkis', average2);

//kaip galutine suma uzrasyti ir suskaiciuoti kitaip:
//10, 2, 8, 4, 6

let sum3 = 0;
let index = 0;

sum3 += marks[index];
index += 1;

sum3 = sum3 + marks[index];       //savotiskai automatizavome, nes nebereikia atskirai rasyti duomenu, tik copy paste situs
index +=1;                       //tiek kartu, kiek turime duomenu
                                 //kai priverciame kartotis vienodai, tada automatizavimas imanomas
sum3 = sum3 + marks[index];     // svarbiausia susekti, kas kur kaip keiciasi
index += 1;

sum3 = sum3 + marks[index];
index += 1;

sum3 = sum3 + marks[index];
index += 1;

/*susiaurinam max sitaip, atsakymas tas pats 30 gaunasi:
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
*/
//? = 30 + undefined bus rezultatas NaN
sum3 = sum3 + marks[5];

console.log(sum3);

console.clear();

