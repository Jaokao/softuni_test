function maxSequence(niz) {

    let maxelem;
    let maxbr = 0;

    let elem = niz[0];
    let br = 1;

    for (let i = 1; i < niz.length; i++) {
        if (niz[i] == elem) {
            br++;
        }
        else {
            if (br > maxbr) {
                maxbr = br;
                maxelem = elem;
            }
            elem = niz[i];
            br = 1;
        }
    }
    if (br > maxbr) {
        maxbr = br;
        maxelem = elem;
    }
    //console.log(maxelem)
    //console.log(maxbr)

    let result = [];
    for (let i = 1; i <= maxbr; i++) {
        result.push(maxelem)
    }
    console.log(result.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
maxSequence([4, 4, 4, 4])
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])