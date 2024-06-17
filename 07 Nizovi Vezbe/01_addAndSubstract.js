function addAndSubstract(niz) {

    let sumaNiza = function(niz) {

        let suma = 0;
    
        for (let i = 0; i < niz.length; i++) {
            suma += Number(niz[i]);
        }
        return suma;
    };

    let sumaStarog = sumaNiza(niz);
    
    for (let i = 0; i < niz.length; i++) {
        if (Number(niz[i]) % 2 == 0) {
            niz[i] = Number(niz[i]) + i;
        }
        else {
            niz[i] = Number(niz[i]) - i;
        }
    }
    
    console.log(niz);
    console.log(sumaStarog);

    let sumaNovog = sumaNiza(niz);
    console.log(sumaNovog);
}

addAndSubstract([5, 15, 23, 56, 35])
addAndSubstract([-5, 11, 3, 0, 2])