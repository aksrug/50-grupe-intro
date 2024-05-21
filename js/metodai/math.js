/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math  

*/

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);


//Math bibliotekos metodai
console.log('\n Abs --------------');
console.log(Math.abs(7));
console.log(Math.abs(-7));
console.log(Math.abs(-3.14));
console.log(Math.abs(-Math.PI));
console.log(Math.abs(Math.PI));

console.log('\n Cbrt --------------');  //kubine saknis
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));
console.log(Math.cbrt(125));

console.log('\n Ceil --------------');
console.log(Math.ceil(5));
console.log(Math.ceil(-5));
console.log(Math.ceil(0));
console.log(Math.ceil(3.14));       //skaiciaus apvalinimas i virsu
console.log(Math.ceil(-3.14));

console.log('\n Floor --------------');
console.log(Math.floor(5));
console.log(Math.floor(-5));
console.log(Math.floor(0));          //skaiciaus apvalinimas i mazesne puse
console.log(Math.floor(3.14));       
console.log(Math.floor(-3.14));

console.log('\n Round --------------'); 
console.log(Math.round(5));
console.log(Math.round(-5));
console.log(Math.round(0));          
console.log(Math.round(3.14));       
console.log(Math.round(-3.14));

console.log(Math.round(3.00001));
console.log(Math.round(3.49999));
console.log(Math.round(3.5));
console.log(Math.round(3.50001));
console.log(Math.round(3.99999));

console.log(Math.round(-3.00001));
console.log(Math.round(-3.49999));
console.log(Math.round(-3.5));
console.log(Math.round(-3.50001));
console.log(Math.round(-3.99999));

console.log('\n Trunc --------------');  //neziuri po kablelio, ima tik sveikaja dali
console.log(Math.trunc(5));
console.log(Math.trunc(-5));
console.log(Math.trunc(0));          
console.log(Math.trunc(3.14));       
console.log(Math.trunc(-3.14));

console.log(Math.trunc(-3.00001));
console.log(Math.trunc(-3.49999));
console.log(Math.trunc(-3.5));
console.log(Math.trunc(-3.50001));
console.log(Math.trunc(-3.99999));

console.log(Math.trunc(7.00001));
console.log(Math.trunc(7.49999));
console.log(Math.trunc(7.5));
console.log(Math.trunc(7.50001));
console.log(Math.trunc(7.99999));

console.log('\n exp --------------');  //grazina laipsnio rodikli
console.log(Math.exp(17));
console.log(Math.E ** 17);

console.log('\n Fround --------------');  //nelabai gyvenime prireiks sito :)) galima ir pamirsti
console.log(Math.fround(5));
console.log(Math.fround(-5));
console.log(Math.fround(0));
console.log(Math.fround(3.1415));
console.log(Math.fround(-3.1415));
console.log(Math.fround(0.1));
console.log(Math.fround(-0.1));

console.log('\n Hypot --------------'); //pitagoro teorema, tik su neribotu skaiciu kiekiu. KELIA KVADRATU
console.log(Math.hypot(3, 4));
console.log(Math.sqrt(3 ** 2 + 4 ** 2));
console.log(Math.hypot(1, 1, 1, 1));

console.log('\n Imul --------------'); //dvieju skaiciu sandauga, bet returnina 32bits (tiek skiriama atminties lasteliu, prisiminti rezultatui)
console.log(Math.imul(10, 17));     // irgi turbut gyvenime neprireiks :) 

console.log('\n Max --------------'); //isrenka didziausia skaiciu
console.log(Math.max(1, 3));
console.log(Math.max(-1, -3));
console.log(Math.max(-1, -3, 7, 10, 3.14));

console.log('\n Min --------------'); //isrenka maziausia skaiciu
console.log(Math.min(1, 3));
console.log(Math.min(-1, -3));
console.log(Math.min(-1, -3, 7, 10, 3.14));
console.log(Math.min([-1, -3, 7, 10, 3.14]));  //metodas nepriima masyvo!!! tik pavienius skaicius

console.log('\n Pow --------------'); //poweris
console.log(Math.pow(2, 3));  // cia yra tas pats kas 2 pakelta treciuoju laipsniu
console.log(2 ** 3);          //galbut nelabai verta pow atsiminti, nes daugiau rasyti nei 2**3 :) 

console.log('\n Random --------------');  //grazina kruva atsitiktiniu skaiciu intervale nuo 0 iki 1
console.log('Intervale nuo 0 iki 1 -> [0..1)');  // [ lauztiniai skliaustai reiskia imtinai, ) sitie - ne imtinai 
console.log(Math.random()); 
console.log(Math.random()); 
console.log(Math.random());        //kazkada gyvenime gali pasisekti, kai randomas ismes lygiai 0, bet NIEKADA 1
console.log(Math.random()); 
console.log(Math.random()); 
console.log(Math.random()); 

