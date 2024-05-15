function numberSize(n) {        ///// n - jei gauname viena paprasta skaiciu, kuris neturi jokios prasmes, toki kintamaji vadinsime n (number pirmoji raide)
 // 2 --> '2'.length --> 1 ///// <-- tai yra irankis, kaip paversti skaiciu i teksta
    
 const nAsText = '' + n;  // '' + 2 = '2'

 /*n % 1 === 0         //jei n padalinus is 1 liekana yra nulis, tai skaicius graziai issidalina
15 % 1 = 0
3.14 % 1 = 0.14
*/

//desimtainis ir neigiamas
if (n % 1 !== 0 && n < 0) {
    return nAsText.length -2;
}
//desimtainis
if (n % 1 !== 0) {
    return nAsText.length -1;
}
//neigiamas
if (n < 0) {
    return nAsText.length - 1;
}

return nAsText.length;      // TUSCIAS TEKSTAS + BET KOKS KITAS DALYKAS, YRA PAVERCIAMAS I TA DALYKA TEKSTINIAME FORMATE

}



////////// ARBA trumpesnis variantas

/*
function numberSize(n) {
    const nAsText = '' + n;
    let size = nAsText.length

    //desimtainis
    if (n % 1 !== 0) {
        size--;
    }
    //neigiamas
    if (n < 0) {
        size--;
    }
    return size;

}
*/


console.log(numberSize(2), '-->', 1); 
console.log(numberSize(25), '-->', 2); 
console.log(numberSize(4895), '-->', 4); 
console.log(numberSize(4895), '-->', 4); 
console.log(numberSize(3.14), '-->', 3); 
console.log(numberSize(3.1415), '-->', 5); 
console.log(numberSize(-25), '-->', 2);
console.log(numberSize(-4895), '-->', 4); 
console.log(numberSize(-3.14), '-->', 3); 
console.log(numberSize(-3.1415), '-->', 5); 

                                                          // function numberSize(n) { 
//kaip apsisaugoti nuo visu situ nesamoningu parasymu? :) // if (typeof n !== number) {
                                                          //  return 'Blogas duomenu tipas.'
console.log(numberSize(NaN));                             //  }
console.log(numberSize(Infinity));                        // }
console.log(numberSize(-Infinity)); 
console.log(numberSize());  
console.log(numberSize(true)); 
console.log(numberSize(false)); 
console.log(numberSize('zodis belekoks')); 
console.log(numberSize('pomidoras')); 
console.log(numberSize('')); 
console.log(numberSize([])); 
console.log(numberSize([1])); 
console.log(numberSize([1, 2])); 
console.log(numberSize(['labas', 'rytas'])); 
console.log(numberSize(['labas', 'rytas', 'Lietuva'])); 
console.log(numberSize(undefined)); 
console.log(numberSize(null)); 
console.log(numberSize(numberSize)); 

//////////PATESTUOKIM PAPILDOMAI, kaip konvertuoti

console.log(1452);
console.log('' + 1452);

console.log(typeof (1452));
console.log(typeof ('' + 1452));

console.log('Labas' + 1452);
console.log(typeof ('Labas' + 1452));
console.log((1452).toString());

console.log('' + 'Labas');
console.log('' + true);
console.log('' + false);
console.log('' + []);
console.log('' + [1, 2, 3]);
console.log('' + numberSize);

//////MORALAS------ prie stringo prodejus bet ka kita, visa galutine israiska tampa tekstu!!!!!!!!!




