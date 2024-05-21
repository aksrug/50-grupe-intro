/* 
As noriu pamatyti visas galimas laiko/laikrodzio kombinacijas valandos tikslumu.
Intervalas yra nuo 1 iki 12 valandu.
Pateikimo formatas: 1:00, 2:00 ir tt
*/

/*for (let val = 1; val <= 12; val++) {
    console.log('-------------');
    let min = 0;
    console.log(val + ':' + min);
    min += 15;
    console.log(val + ':' + min);
    min += 15;
    console.log(val + ':' + min);
    min += 15;
    console.log(val + ':' + min);
    min += 15;
}
*/

/*for (let val = 1; val <= 4; val++) {
    console.log('-------------');
    let min = 0;

    for (let i = 0; i < 4; i++) { 
        if (min < 10) { 
        console.log(val + ':0' + min);
        } else {
        console.log(val + ':' + min);
        }
        min += 15;
    }
    
   }
   */

   /* for (let val = 15; val <= 17; val++) {
    console.log('-------------');
    let min = 0;

    for (let i = 0; i < 6; i++) { 
        if (min < 10) { 
        console.log(val + ':0' + min);
        } else {
        console.log(val + ':' + min);
        }
        min += 10;
    }
    
   }
   */

   /* for (let val = 15; val <= 17; val++) {       /////sitas ciklas atsakingas uz valandu skaiciavima
    console.log('-------------');
    let min = 0;

    for (let i = 0; i < 4; i++) {              /// sitas uz minuciu skaiciavima
        let sek = 0;

        for (let j = 0; j < 3; j++) {
            console.log(val + ':' + min + ':' + sek);
            sek += 20;
        }
        min += 15;
    }
   }
   */

   for (let val = 15; val <= 15; val++) {       
    console.log('-------------');

    for (let min = 0; min < 4; min++) {     

        for (let sek = 0; sek < 60; sek++) {
            console.log(val + ':' + min + ':' + sek);
        }
    }
   }

