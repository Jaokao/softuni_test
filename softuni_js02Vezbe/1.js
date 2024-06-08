let a = 5;
let b = 2.34;
let c = true;
let d = {"ime": "Ana", "prosek":5.00};
let e = [1, `ana`, `jabuka`, 1.23, true];
let f = undefined;
let g = null;
let i = function() {console.log(`hello`)};
let j = `zdravo`;
let k = Infinity;
let l = NaN; // 0/0 Inifnity - Infinity  -  ne zna se sta se desi kad nulu delimo nulu i inifinity oduzmemo infinity

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof i);
console.log(typeof j);
console.log(typeof k);
console.log(typeof l);
console.log(NaN == NaN);  // false  - false , jer je mozda prvi NaN nastao od 0/0 a drugi od Inifnity - Infinity
console.log(Number.isNaN(Infinity - Infinity)) // true , nije validan broj, ali i dalje je  broj

console.log(8 * null);  // 8 * 0 = 0 
console.log(`5` - 1);   // 5 - 1 = 4       
console.log(`5` + 1);   // `5` + `1` = `51`
console.log(`pet` * 2); // `pet` pretvorim u broj, medjutim to ne moze i dobija se NaN
console.log(!``);       // `` se moze pretvoriti u false, tako da je !`` true

console.log(Number.parseFloat(`12.3`));
console.log(Number.parseInt(`123`));
console.log(Array.from(`123`));
console.log(String(123));

console.log(`Zdravo svete`);
console.log(`Zdravo svete`);
console.log(`Zdravo svete`);

console.log(`Zdravo \nsvete`);
console.log(`Zdravo 
svete`);
console.log(`Zdravo ${2+2} svete`);
console.log(`Zdravo "svete"`);
console.log(`Zdravo \`zdravo\``);

let a1 = null || `prezime`;  // u prevodu false || `prezime`
console.log(a1);
let a2 = `ime` || `prezime`;
console.log(a2);
let port;
//port = 223
const PORT_NUM = port || 3000; // ako korisnik ne definise port , taj port ce onda biti 3000 po default, a ako ima port onda ce biti port
console.log(PORT_NUM)

let a3 = `ana` && `marko`; // true
console.log(a3); // marko, ako prvo moze da se konvertuje u true , onda se gleda drugo i to ispisuje
let a4 = null && `nista`; // null nismo mogli da konvertujemo u true, zato ce se prvo stampati , a to je null
console.log(a4);
/*
if (uslov1 && uslov2) { // ako je uslov1 true onda ce se gledati i uslov2, ako uslov1 nije tacan, uslov2 se nece ni proveravati vec je rezultat
                            od uslov1 && uslov2 jednak uslov1 (netacan)
}*/

