function sumLeftRight(niz) {
    let index = -1;
    for (let i = 0; i < niz.length; i++) {

        let sumaLevo = 0;
        let sumaDesno = 0;

        for (let j = 0; j < i; j++) {
            sumaLevo += niz[j]
        }
        for (let j = i+1; j<niz.length; j++) {
            sumaDesno += niz[j]
        }

        if (sumaLevo == sumaDesno) {
            index = i;
        }
    }
    if (index == -1) {
        console.log(`no`);
    }
    else {
        console.log(index);
    }
}

sumLeftRight([1, 2, 3, 3])
sumLeftRight([1, 2])
sumLeftRight([1])
sumLeftRight([1, 2, 3])
sumLeftRight([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])


function sumaNiza(niz) {     // ali ovo sa 2 funkcije ne radi na judge
    let suma = 0;
    for (let i=0; i < niz.length; i++)
        suma += niz[i]
    return suma;
}

function sumLeftRight2(niz) {
    let index = -1;
    for (let i = 0; i < niz.length; i++) {
        let sumaLeft = sumaNiza(niz.slice(0, i))
        let sumaRight = sumaNiza(niz.slice(i + 1, niz.length))
        if (sumaLeft == sumaRight) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        console.log(`no`);
    }
    else {
        console.log(index)
    }
}

sumLeftRight2([1, 2, 3, 3])
sumLeftRight2([1, 2])
sumLeftRight2([1])
sumLeftRight2([1, 2, 3])
sumLeftRight2([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])