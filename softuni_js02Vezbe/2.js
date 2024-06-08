// opseg vazenja: blokovski, funkcijski, `globalni` (lokalni u debageru)
// 
var a1 = 123; // global
let a11 = 123
var a2 = `23`
console.log(this.a2)

function funkcija (b,c) {
    var a6 = `d`;
    let a5 = 7
    {
        a12 = 44; //ako nema nista nema ni let ni var , onda mu samo dodaje var
        let a3 = 3
        var a6 = 4;
        let a5 = 100
        console.log(a5)
        console.log(a6)
    }
    console.log(b);
    console.log(a6) // stampa 4 je r je gore bilo d pa opet dole 4 - znaci promenilo se u medjuvremenu u 4
    console.log(a5)
    console.log(a12)
}

//console.log(a12) ako ovde stavimo onda ne moze
funkcija(1, 2);
//console.log(a5)
console.log(a1)
console.log(a11)
//console.log(b)
let a4 = 5;
