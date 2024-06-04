function proveriPozitivan(broj) {
    if (broj > 0) {
        console.log(`Broj je pozitivan`)
    }
    else {
        console.log(`Broj je negativan`)
    }
}
proveriPozitivan(10)
proveriPozitivan(-5)

function proveriParnost(broj) {
    if (broj % 2 === 0) {
        console.log(`Broj je paran`)
    }
    else {
        console.log(`Broj nije paran`)
    }
}
proveriParnost(4)
proveriParnost(7)

function odrediOcenu(ocena) {
    if (ocena >= 90) {
        console.log(`Odlican`)
    }
    else if (ocena >= 80) {
        console.log(`Vrlo dobar`)
    }
    else if (ocena >= 70) {
        console.log(`Dobar`)
    }
    else if (ocena >= 60) {
        console.log(`Dovoljan`)
    }
    else {
        console.log(`Nedovoljan`)
    }
}

odrediOcenu(95)
odrediOcenu(82)
odrediOcenu(70)
odrediOcenu(67)
odrediOcenu(55)

function uporediBrojeve(broj1, broj2) {

    if (broj1 === broj2) {
        console.log(`Brojevi su jednaki`)
    }
    else if (broj1 > broj2) {
        console.log(`Prvi broj je veci`)
    }
    else {
        console.log(`Drugi broj je veci`)
    }
}
uporediBrojeve(5, 5)
uporediBrojeve(10, 7)
uporediBrojeve(3, 8)


// Ugnjezdeni uslovi

function proveriPrestupnuGodinu(godina) {
    if (godina % 4 === 0) {
        if (godina % 100 === 0) {
            if (godina % 400 === 0) {
                console.log(`${godina} je prestupna godina`)
            }
            else {
                console.log(`${godina} nije prestupna godina`)
            }
        }
        else {
            console.log(`${godina} je prestupna godina`)
        }
    }
    else {
        console.log(`${godina} nije prestupna godina`)
    }
}
proveriPrestupnuGodinu(2024)
proveriPrestupnuGodinu(2100)
proveriPrestupnuGodinu(2000)
proveriPrestupnuGodinu(2023)


function odrediGodisnjeDoba(mesec) {
    if (mesec >=3 && mesec <= 5) {
        console.log(`Prolece`)
    }
    else if (mesec >= 6 && mesec <= 8) {
        console.log(`Leto`)
    }
    else if (mesec >= 9 && mesec <= 11) {
        console.log(`Jesen`) 
    }
    else {
        console.log(`Zima`)
    }
}
odrediGodisnjeDoba(4)
odrediGodisnjeDoba(7)
odrediGodisnjeDoba(10)
odrediGodisnjeDoba(1)

// Switch-case

function odrediDanUNedelji(dan) {

    switch(dan) {
        case 1:
            console.log(`Ponedeljak`)
            break;
        case 2:
            console.log(`Utorak`)
            break;
        case 3:
            console.log(`Sreda`)
            break;
        case 4:
            console.log(`Cetvrtak`)
            break;
        case 5:
            console.log(`Petak`)
            break;
        case 6:
            console.log(`Subota`)
            break;
        case 7:
            console.log(`Nedelja`)
            break;
        default:
            console.log(`Pogresan unos! D:`)
    }
}
odrediDanUNedelji(1)
odrediDanUNedelji(5)
odrediDanUNedelji(7)
odrediDanUNedelji(10)

function odrediOcenu(ocena) {
    switch(true) {
        case ocena >= 90:
            console.log(`Odlican`)
            break;
        case ocena >= 80:
            console.log(`Vrlo dobar`)
            break;
        case ocena >= 70:   
            console.log(`Dobar`)
            break;
        case ocena >= 60:
            console.log(`Dovoljan`)
            break;
        default:
            console.log(`Nedovoljan`)
    }
}
odrediOcenu(95)
odrediOcenu(82)
odrediOcenu(67)
odrediOcenu(20)