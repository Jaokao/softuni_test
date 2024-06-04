function operatorJednakosti() {
    console.log(5 == `5`) // true zato sto radi implicitnu konverziju stringa u broj

    console.log(0 == false) // true (implicitnu konverziju boolean-a u broj)
    // 0 je u JSu `false` sto znaci da ce da bude false prilikom poredjenja

}
operatorJednakosti()


function striktnaJednakost() {
    console.log(5 === `5`) // false (razlicitih tipova)
    console.log(0 === false) // false (razliciti tipovi)
}
striktnaJednakost()

// operator nejednakosti (!=)

function nejednakosti() {
    console.log(5 != `5`) // false (implicitna konverzija stringa u broj)
    console.log(0 != false) // false jer implicitna konverzija booleana u broj
}
nejednakosti()

function striktnaNejednakost() {
    console.log(5 !== `5`) // true (razliciti tipovi)'
    console.log(0 !== false) // true (razliciti tipovi)
}

function veceOd() {
    console.log(5 > 3) // true
    console.log(`10` > 5) // true (je radi implicitno konverziju stringa u broj)
}
veceOd()


function veceJednako() {
    console.log(5 >= 3) // true
    console.log(`10` >= 5) // true (je radi implicitno konverziju stringa u broj)
}


function manjeOd() {
    console.log(3 < 5) // true
    console.log(`5` < 10) // true
}

function manjeJednako() {
    console.log(5 <= 5) // true
    console.log(`10` <= 10) // true

}

