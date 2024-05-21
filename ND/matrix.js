
             // 0   1  2  3  4
const matrix = [10, 2, 8, 4, 6];

console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
    console.log(i, '-', matrix[i]);
}

/////////////////////////////////////////////////////////////////
//kaip issitraukti atskirus sarasus skirtingu studentu pazymiu

// n-matis masyvas (nth matrix)

const students = [
[10, 9, 8, 7],
[9, 8, 7, 6, 5],
[7, 8, 9, 7, 8, 9, 7, 8, 9],
[8, 8, 8, 8, 8, 8, 8],

];

// jonas (0) - indeksas 0 tarp studentu

/*const jonoPazymiai = students[0];
console.log(jonoPazymiai);
console.log(jonoPazymiai[0]);
console.log(jonoPazymiai[1]);
console.log(jonoPazymiai[2]);
console.log(jonoPazymiai[3]);
console.log(jonoPazymiai[4]);
*/
//ARBA

const jonoPazymiai = students[0];
console.log(jonoPazymiai);
for (let i = 0; i < jonoPazymiai.length; i++) {
    console.log('jonas', jonoPazymiai[i]);
}

// maryte (1) - indeksas 1 tarp studentu
/*const marytesPazymiai = students[1];
console.log(marytesPazymiai);
console.log(marytesPazymiai[0]);
console.log(marytesPazymiai[1]);
console.log(marytesPazymiai[2]);
console.log(marytesPazymiai[3]);
console.log(marytesPazymiai[4]);
*/

//ARBA

const marytesPazymiai = students[1];
console.log(marytesPazymiai);
for (let i = 0; i < marytesPazymiai.length; i++) {
    console.log('maryte', marytesPazymiai[i]);
}

console.clear();

console.log(students);
console.log('-------------------');
console.log(students[2]);
console.log('-------------------');
console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);

console.clear();

const gorila = [
    [1, 2, 3],
    [4, [5, 6], 7],
    [
        [8, 9, 10], 
        [11, 12, 13, [14, 15]],
    ],
];

console.log(gorila);
console.log(gorila[0]);
console.log(gorila[0][0]);
console.log(gorila[0][1]);
console.log(gorila[0][2]);
console.log(gorila[0][3]);  //undefined

console.log(gorila[1]);
console.log(gorila[1][0]);
console.log(gorila[1][1]);
console.log(gorila[1][2]);

console.log(gorila[1][1][0]);
console.log(gorila[1][1][1]);
console.log(gorila[1][1][2]);   //undefined, nes daugiau nera kur giliau listi

console.log(gorila[2]);
console.log(gorila[2][0]);
console.log(gorila[2][0][0]);
console.log(gorila[2][0][1]);
console.log(gorila[2][0][2]);
console.log('-----------------------');
console.log(gorila[2][1]);
console.log(gorila[2][1][0]);
console.log(gorila[2][1][1]);
console.log(gorila[2][1][2]);
console.log(gorila[2][1][3]);
console.log(gorila[2][1][3][0]);
console.log(gorila[2][1][3][1]);  //keturmatis masyvas :))) - TOBULA