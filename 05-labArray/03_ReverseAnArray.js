function solve(n, input) {

    let arr = []

    for (let i = 0; i < n; i++){
        arr.push(input[i])
    }
    console.log(arr.reverse().join(" "));
}

solve(3, [10, 20, 30, 40, 50])