const prompt = require("prompt-sync") ();
// niz stoji van funckija
let zadaci = [] // prazan niz koji ce da cuva zadatke

function dodajZadatak(noviNaslov, noviOpis, noviPrioritet, noviRokIzvrsenja) {
    let zadatak = {
        naslov: noviNaslovnaslov,
        opis: noviOpis,
        prioritet: noviPrioritet,
        rokIzvrsenja: noviRokIzvrsenja,
        zavrsen: false,
    };

    zadaci.push(zadatak);
    console.log(`Zadatak uspesno dodat.`);
}

function ukloniZadatak(indeks) {
    if (indeks >= 0 && indeks < zadaci.length) {
        zadaci.splice(indeks, 1);
        console.log(`Zadatak uspesno uklonjen`);
    }
    else {
        console.log(`Nevazeci indeks`);
    }
}
/*
USLOV ? AKO_JE_TRUE : AKO_JE_FALSE
*/
function prikaziZadatke() {
    console.log(`Lista zadataka: `);
    for (let i = 0; i < zadaci.length; i++) {
        let zadatak = zadaci[i];
        console.log(`${i + 1}. ${zadatak.naslov} (${zadatak.prioritet}) - ${zadatak.zavrsen ? "Zavrsen" : "Nezavrsen"}`)
    }
}

function oznacitiZavrseno(indeks) {
    if (indeks >= 0 && indeks < zadaci.length) {
        zadaci[indeks].zavrsen = true;
        console.log(`Zadatak oznacen kao zavrsen`)
    }
    else {
        console.log(`Nevazeci indeks zadatka`)
    }
}

function filtrirajZadatke(prioritet, zavrsen) {
    // prvi korak je da filtrira zadatke prema prioritetu i zavrsenosti
    let filtriraniZadaci = [];
    for (let i = 0; i < zadaci.length; i++) {
        let zadatak = zadaci[i];
        if ((prioritet === null || zadatak.prioritet === prioritet) && (zavrsen === null || zadatak.zavrsen === zavrsen)) {
            filtriraniZadaci.push(zadatak);
        }
    }
    // drugi korak je da stampa filtirane zadatake
    console.log(`Filtrirani zadaci: `);
    for (let i = 0; i < filtriraniZadaci.length; i++) {
        let zadatak = filtriraniZadaci[i];
        console.log(`${i + 1}. ${zadatak.naslov} (${zadatak.prioritet}) - ${zadatak.zavrsen ? `Zavrsen` : `Nezavrsen`}`);
    }
}


function prikaziStatistiku() {
    let ukupnoZadatka = zadaci.length;
    let zavrseniZadaci = 0;
    for (let i = 0; i < zadaci.length; i++) {
        if (zadaci[i].zavrsen) {
            zavrseniZadaci++;
        }
    }

    let nezavrseniZadaci = ukupnoZadatka - zavrseniZadaci;
    console.log(`Statistika: `)
    console.log(`Ukupno zadataka: ${ukupnoZadatka}`)
    console.log(`Zavrseni zadaci: ${zavrseniZadaci}`)
    console.log(`Nezavrseni zadaci: ${nezavrseniZadaci}`)
}

function pokreniTodoListu() {
    let izbor = "";

    while (izbot !== "7") {
        console.log(`\n Todo List App`);
        console.log(`1. Dodaj zadatak`);
        console.log(`2. Ukloni zadatak`);
        console.log(`3. Prikazi zadatke`);
        console.log(`3. Oznaciti zadatak kao zavrsen`);
        console.log(`3. Filtriraj zadatke`);
        console.log(`3. Prikazi statistiku`);
        console.log(`3. Izlaz`);

        izbor = prompt(`Unesite izbor od (1-7): `);


        switch (izbor) {
            case `1`:
                let naslov = prompt(`Unesite naslov zadatka: `);
                let opis = prompt(`Unesite opis zadatka: `);
                let prioritet = prompt(`Unesite prioritet zadatka (nizak, srednji, visok): `);
                let rokIzvrsenja = prompt(`Unesite rok izvrsenja zadatka`);

                dodajZadatak(naslov, opis, prioritet, rokIzvrsenja);
                break;
            case `2`:
                let indeksUklanjanja = parseInt(prompt(`Unesite indeks zadataka za uklanjanje: `));
                ukloniZadatak(indeksUklanjanja);
                break;
            case `3`:
                prikaziZadatke();
                break;
            case `4`:
                let indeksZavrsetka = parseInt(prompt(`Unesite indeks zadatka za oznacavanje kao zavrsen: `));
                oznacitiZavrseno(indeksZavrsetka - 1);
                break;
            case `5`:
                let prioritetFiltriranja = prompt(`Unesite prioritet za filtriranje (nizak, srednji, visok) ili prazno za sve: `);
                let statusFiltriranja = prompt(`Unesite status za filtriranje (true za zavrsene, false za nezavrsene) ili ostavite prazno za sve`);

                let zavrsen = statusFiltriranja !== "" ? statusFiltriranja : null;
                let prioritet1 = prioritetFiltriranja !== "" ? prioritetFiltriranja : null;
                filtrirajZadatke(prioritet1, zavrsen);
                break;
            case `6`:
                prikaziStatistiku()
                break;
            case `7`:
                console.log(`Izlaz iz aplikacije!`)
            default:
                console.log(`Nevazeci`)
        }
    }
}

pokreniTodoListu()