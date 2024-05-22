
// [0..1) 
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//isivaizduokime, kad metame moneta, kuri turi atsiversti ant herbo arba skaiciaus
//[0..0.5) 
//console.log('Skaicius');   //puse intervalo priklauso vienai reiksmei, puse - kitai

//[0.5..1)
//console.log('Herbas'); 

if (Math.random() < 0.5) {
    console.log('Skaicius');     //kaskart atsitiktine tvarka gauname zodi
} else {
    console.log('Herbas');
}

///galime susikurti ir funkcija

function moneta() {
    if (Math.random() < 0.5) {
        return 'Skaicius';
    } else {
        return 'Herbas';
    }
}

console.log(moneta());
console.log(moneta());
console.log(moneta());     //zinoma, sitaip rasyti yra neprofesionalu :) darome cikla
console.log(moneta());
console.log(moneta());
console.log(moneta());

//darome cikla
for (let i = 0; i < 10; i++) {
    console.log(moneta());
}

/////////////////////
const metimuKiekis = 8;
let herbai = 0;
for (let i = 0; i < metimuKiekis; i++) {
    const iskrito = moneta();
    if (iskrito === 'Herbas') {
        herbai++;
    }
    console.log(iskrito);
}
console.log('HERBU KIEKIS:', herbai);
console.log('SKAICIU KIEKIS:', metimuKiekis - herbai);


///////////////////////////////KITAS PAVYZDYS/////////////////////////

const week = ['Pirm', 'Antr', 'Trec', 'Ketv', 'Penkt', 'Sest', 'Sekm'];
//mums reikia atsitiktines savaites dienos
const step = 1 / 7;

// [0step..1step) 1
// [1step..2step) 2
// [2step..3step) 3
// ...
// [6step..7step) 7
// [0,7..1) ?????????

for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * week.length);  //SVARBUS DALYKAS, ATSIMINTI SVARBU!!!!
    console.log(week[index]);
}

//Man reikia atsitiktinio skaiciaus intervale nuo 1 iki 10 imtinai.

for (let i = 0; i < 10; i++) {
        console.log(Math.floor(Math.random() * 10) + 1);
}

console.log('----------------------------------------');

//ND: Man reikia atsitiktinio skaiciaus intervale nuo 23 iki 617 imtinai.
for (let i = 0; i <= 617; i++) {
    console.log(Math.floor(Math.random() * 617) + 1);
}





