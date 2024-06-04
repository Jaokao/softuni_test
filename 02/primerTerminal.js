// node primerTerminal.js
const prompt = require("prompt-sync") ();

let todoList = [];

function dodajZadatak(zadatak) {
    todoList.push(zadatak)  // push dodaje zadatak u listu
    console.log(`Zadatak dodat: ${zadatak}`)
}

function ukloniZadatak(indeks) {
    if (indeks >= 0 && indeks < todoList.length) {
        const uklonjenZadatak = todoList.splice(indeks, 1);
        console.log(`Zadatak uklonjen: ${uklonjenZadatak}`);
    }
    else {
        console.log(`Nevazeci indeks zadatka`);
    }
}
function prikaziZadatke() {
    console.log(`Todo lista: `)
    for (let i = 0; i < todoList.length; i++) {
        console.log(i + `. ` + todoList[i]);
    }
}

function oznacitiZavrseno(indeks) {
    if (indeks >= 0 && indeks < todoList.length) {
        todoList[indeks] = `[Zavrseno] ${todoList[indeks]}`;
        console.log(`Zadatak je oznacen kao zavrsen: ${todoList[indeks]}`);
    }
    else {
        console.log(`Nevazeci indeks`);
    }
}

function pokreniTodoListu() {

    let izbor = "";

    while (izbor !== `5`) {

        console.log(`\n Todo list aplikacija`);
        console.log(`1. Dodaj zadatak`);
        console.log(`2. Ukloni zadatak`);
        console.log(`3. Prikazi zadatke`);
        console.log(`4. Oznaciti zadatak kao zavrsen`);
        console.log(`5. Izlaz`);

        izbor = prompt(`Unesite izbor (1-5): `);

        switch (izbor) {
            case `1`:
                const noviZadatak = prompt(`Unesite novi zadatak: `);
                dodajZadatak(noviZadatak);
                break;
            case `2`:
                const indeksUklanjanja = parseInt(prompt(`Unesite indeks zadatka za uklanjanje: `))
                ukloniZadatak(indeksUklanjanja);
            case `3`:
                prikaziZadatke();
                break;
            case `4`:
                const indeksZavrsen = parseInt(prompt(`Unesite indeks zadatka za oznacenje kao zvrsen: `));
                oznacitiZavrseno(indeksZavrsen)
                break;
            case `5`:
                console.log(`Izlaz iz aplikacije!`);
                return;
            default:
                console.log(`Nevazeci izbor`);
        }
    }
}

pokreniTodoListu();