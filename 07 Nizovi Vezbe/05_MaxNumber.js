function maxNumber (niz) {

    let result = [];

    for (let i = 0; i < niz.length; i++) {

        let pripada = true;
        for (let j = i+1; j < niz.length; j++){
            if (niz[i] <= niz[j]) {
                pripada = false;
               // console.log(niz[i] + "<=" + niz[j]) // ovo smo onako stavili da vidimo sta se tacno dogadja ovde
                break;
            }
        }

        if (pripada === true) {
            result.push(niz[i]);
        }
    }
    console.log(result.join(" "));
}

maxNumber ([1, 4, 3, 2])
maxNumber ([14, 24, 3, 19, 15, 17])
maxNumber ([41, 41, 34, 20])
maxNumber ([27, 19, 42, 2, 13, 45, 48])