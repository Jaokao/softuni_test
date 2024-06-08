function sumDigits(broj) {

    let suma = 0;
    let nizCifri = Array.from(String(broj))
    //console.log(nizCifri)
    for (let i = 0; i <nizCifri.length; i++){
        suma += Number(nizCifri[i])
        //suma += Number.parseInt(nizCifri[i])  - mozemo parseInt da kazemo da zelimo ceo broj
    }
    console.log(suma)
}

sumDigits(245678);  // 32
sumDigits(97561);   // 28
sumDigits(543);     // 12 
