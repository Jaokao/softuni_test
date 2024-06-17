function solve(num) {
    let arr = Array.from(num.toString()); // kreiramo niz od broja koji smo pretvorili u string

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    sum = Array.from(sum.toString());

    if (sum.includes(`9`)) {
        console.log(`${num} Amazing? True`)
    }
    else {
        console.log(`${num} Amazing? False`)
    }
 
}

solve(1233)
solve(999)