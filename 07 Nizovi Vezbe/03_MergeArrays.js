function mergeArrays(niz1,niz2) {

    let result = [];

    for (let i =0 ; i <niz1.length;i++) {
        if (i%2 ==0){
            result.push(Number(niz1[i]) + Number(niz2[i]));
        }
        else {
            result.push(niz1[i] + niz2[i]);
        }
    }
    //console.log(result)
    console.log(result.join(' - '))
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
    )
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
    )