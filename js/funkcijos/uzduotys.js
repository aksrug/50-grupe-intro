//UZDUOTIS, part 1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Input 
// DATA 1: Mark weights 78kg, height 1.69m,
//         John weights 92kg, height 1.95m,
// DATA 2: Mark weights 95kg, height 1.88m,
//         John weights 85kg, height 1.76m.
// 1. Store Mark's and John's mass and height in variables

const MarkMass1 = 78;
const JohnMass1 = 92;
const MarkMass2 = 95;
const JohnMass2 = 85;

const MarkHeight1 = 1.69;
const JohnHeight1 = 1.95;
const MarkHeight2 = 1.88;
const JohnHeight2 = 1.76;

//2. Calculate both their BMIs using the formula (you can even implement both versions)

console.log(MarkMass1 / (MarkHeight1 * MarkHeight1));
console.log(MarkMass2 / (MarkHeight2 * MarkHeight2));

console.log(JohnMass1 / (JohnHeight1 * JohnHeight1));
console.log(JohnMass2 / (JohnHeight2 * JohnHeight2));

//3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.



