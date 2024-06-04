function forPrimeri() {
    for (let i = 1; i <= 5; i++) {
    console.log(i)
}

let zbir = 0;

for (let i = 1; i <= 10; i++) {
    zbir += i;
}
console.log(`Zbir brojeva od 1 do 10 je: ${zbir}`)

const voce = [`jabuka`, `banana`, `pomorandza`]
for (let i = 0; i < voce.length; i++) {
    console.log(voce[i])
}

let lista = []
for (let i = 1; i <= 100; i++) {
    lista.push[i]
   // console.log([i])
}

}
//forPrimeri()

function whilePrimeri() {

    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++; // Moramo obezbediti mehanizam da uslov postane false ne bi li smo izasli iz petlje
    }
    
   // primer1()


    function faktorijal(n) {
        let rezultat = 1;
        let i = 1;
        while (i <= n) {
            rezultat *= i;
            i++;
        }
        return rezultat;
    }
    console.log(faktorijal(5))


}
//whilePrimeri()

function nasumicniBroj() {
    const prompt = require("prompt-sync") ();
    let test = prompt("Helooo: ");
    console.log(test);
}
nasumicniBroj()