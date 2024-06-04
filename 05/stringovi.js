let str1 = `Zdravo, svete!`;
let str2 = `Javaskripta je zabavan jezik!`;
let str3 = `Stringove mozemo da pravimo sa "`;

console.log(str1[0]);
console.log(str1[8])
console.log(str1[str1.length - 1]);


console.log(str1[22]); // undefined  - kada pokusamo da pristupimo preko indeksa van okvira niza


console.log(str3.toUpperCase())
console.log(str3.substring(0, 6))
console.log(str3.split(" "))