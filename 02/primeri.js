function proveriPristup(korisicnikoIme, lozinka) {

    if (korisicnikoIme === `admin` && lozinka === `password123`) {
        console.log(`Dobrodosli ${korisicnikoIme}`)
    }
    else if (korisicnikoIme === `korisnik` && lozinka === `pasword123`) {
        console.log(`Dobrodosli ${korisicnikoIme}`)
    }
    else {
        console.log(`Pogresno ime ili lozinka`)
    }
}
proveriPristup(`admin`, `password123`)
proveriPristup(`korisnik`, `pasword123`)
proveriPristup(`korisnikkkk`, `pasword123`)

function proveriDostupnost(artikal, lokacija) {
    if (artikal === `patike` && (lokacija === `Beograd` || lokacija === `Novi Sad`)) {
        console.log(`Artikal je dostupan u prodavnici`)
    }
    else if (artikal === `majica` && (lokacija === `Beograd` || lokacija === `Nis`)) {
        console.log(`Artikal je dostupan u prodavnici`)
    }
    else {
        console.log(`Artikal nije dostupan u prodavnici na trazenoj lokaciji`)
    }
}
proveriDostupnost(`patike`,`Beograd`)
proveriDostupnost(``,``)
proveriDostupnost(``,``)
proveriDostupnost(``,``)
proveriDostupnost(``,``)
proveriDostupnost(``,``)