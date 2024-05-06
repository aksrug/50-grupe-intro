// 1. Sukurkite funkcija, kuri priimtu parametra "name". Jos tikslas atspausdinti narsykleje
// teksta "Labas," ir salia jo perduota varda. Pvz "Labas, Elena".

const Mantai = "Mantas"

function vardas(name) {
return console.log(`Labas ${name}`)
}

vardas ("Mantai")


// 2. Sukurkite funkcija, kuri priimtu viena parametra (teksta) ir grazintu atsakyma,
// kiek simboliu yra tame tekste. Is funkcijos gauta rezultata atvaizduokite narsykleje.

function howMany(text) {
    return console.log(text.length);

}
howMany("Labas");


