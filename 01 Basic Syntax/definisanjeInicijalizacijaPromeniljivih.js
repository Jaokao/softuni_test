var x = 10
var x = 20 // dozvoljeno ponovno deklarisanje
x = 30 // dozvoljeno je azuriranje

/*
let - Uveden u ES6 (Ecmascript 6), let se koristi za deklaraciju promenljive sa blok opsegom. Promenljive deklarisane sa let
ne mogu biti ponovo deklarisane u istom opsegu ali mogu biti azurirane
*/

let y = 10
// let y = 20; greska, nije dozvoljeno ponovno deklarisanje
y = 30 // dozvooljeno je azuriranje


 const PI = 3.1452
 PI = 3.14 // greska, nije dozvoljeno ponovno dodeljivanje