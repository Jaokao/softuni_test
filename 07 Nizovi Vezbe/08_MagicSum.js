function magicSum(niz, broj) {

    for (let i = 0; i < niz.length; i++) {
        for (let j = i + 1; j < niz.length; j++) {  // ne moze let j = 0 , jer onda ispsieuj 1 7 , 7 1, 6 2 , 2 6 , a trebga samo 1 7 i 62 
            if (niz[i] + niz[j] == broj) {
                console.log(niz[i] + " " + niz[j])
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)
magicSum([14, 20, 60, 13, 7, 19, 8], 27)
magicSum([1, 2, 3, 4, 5, 6], 6)