//Ciklo for panaudojimas
// 1.Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// a. 0 ... 0

let suma1 = 0;
for (let i = 0; i < 0; i++) {
    suma1 = suma1 + i;
}
console.log(suma1); 

// b. 0 ... 4

let suma2 = 0;
for (let i = 0; i <= 4; i++) {
    suma2 = suma2 + i;
}
console.log(suma2);

// c. 0 ... 100

let suma3 = 0;
for (let i = 0; i <= 100; i++) {
    suma3 = suma3 + i;
}
console.log(suma3); 

// d. 574 ... 815

let suma4 = 0;
for (let i = 574; i <= 815; i++) {
    suma4 = suma4 + i;
}
console.log(suma4); 

// e. -50 ... 50

let suma5 = 0;
for (let i = -50; i <= 50; i++) {
    suma5 = suma5 + i;
}
console.log(suma5);

// f. -70 ... 30

let suma6 = 0;
for (let i = -70; i <= 30; i++) {
    suma6 = suma6 + i;
}
console.log(suma6);

console.clear();

//2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// a.pvz.: “abcdef” -> “fedcba” 

/*const tekstas = 'abcdef'
for (let i = 0; i < tekstas.length; i++) {
    console.log(tekstas[tekstas.length - 1 - i]);
}
*/

function reverseString(text) {
    let answer = '';
    
   // for (let i = 0; i < text.length; i++) {   //i yra ciklo dalis, kur eina nuo 0 iki 5
   //     answer += text[text.length - 1 - i];
   // }
    return answer;
}

console.log(reverseString('labukas'), '-->', 'sakubal');
console.log(reverseString('alus'), '-->', 'sula');
console.log(reverseString('sedek uzu kedes'), '-->', 'sedek uzu kedes');
console.log(reverseString('abcdef'), '-->', 'fedcba' );

//sprendimo ALTERNATYVOS ////////////////////////////

//function reverseString(text) {
  //  let answer = '';
    
 //  for (let i = 0; i < text.length; i++) {  
     // answer = text[i] + answer;
       //a + ''
        //b + 'a'
        //c + 'ba'
        //d + 'cba'
        //e + 'dcba'
        //f + 'edcba'
   // }
    //for (let i = text.length - 1; i >= 0; i--) {  
     //    answer += text[i];
  //  }
  //  return answer;

  console.clear();

//3.Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai
/* ZINGSNIAI:
-reikia kintamojo, kuris skaiciuoja kiek turiu skaiciu, kurie dalijasi be liekanos 
-einam per intervala, nuo START iki FINISH
   -pasiimu kiekviena skaiciu ir dalinu is STEP
   -kai padalini rezultata, tikrinu, jeigu dalybos liekana yra nulis (0)
     -ANSWER didinam +1
   -o jeigu ne
     -tai darau ...   
-grazinam ANSWER
*/
// a. 0 - 11
                              //step-daliklis
function numberCount(start, finish, step) {
    let answer = 0;

    for (let i=start; i<=finish; i++) {        // % operatorius dirba su liekanomis!!!
                                                 //jeigu skaiciu dalinant is daliklio(step) liekana yra 0, atsakyma (answer) didiname vienu vienetu
        if (i % step === 0) {
            answer++;
        }
        
        //console.log(i);
    }

    //i.Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
    return 'Skaičių intervale tarp ' + start + ' ir ' + finish + ', besidalijančių be liekanos iš ' + step + ' yra ' + answer + ' vienetai.';
}


//a
console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));

//b
console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));

//c
console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 18, 5));
console.log(numberCount(-18, 18, 7));


// b. 8 - 31
// c. -18 - 18
// d. rezultatą pateikti tokiu formatu:
// i.Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// ii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.





