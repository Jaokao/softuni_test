function saberi(a, b){ 

    return a + b; // povratna vrednost funkcije ce da bude rezultat sabiranja
}

let rezultat = saberi(5, 3)
console.log(rezultat);


function predstaviOsobu(ime, godiste) {
    // Moderan nacin formatiranja string-a
    console.log(`Zdravo, moje ime je ${ime} i rodjen sam ${godiste} godine.`)

    // stari nacin formatiranja

    console.log("Zdravo, moje ime je " + ime + " i rodjen sam " + godiste + ". godine.")
}
predstaviOsobu(`Nemanja`, 1992)

function matematickeOperacije(a, b) {
    console.log(`Zbir brojeva ${a} i ${b} je ${a + b}`)
    console.log(`Razlika brojeva ${a} i ${b} je ${a - b}`)
    console.log(`Prozivod brojeva ${a} i ${b} je ${a * b}`)
    console.log(`Kolicnik brojeva ${a} i ${b} je ${a / b}`)
}

matematickeOperacije(10, 5);

// debug console je da mozemo kod da idemo jedno po jedno da trazimo gresku lakse ako je ima