function solve(n) {

    let sum = 0;

    for (let i = 1; i <= (n * 2 - 1) ; i = i + 2) {
        console.log(i);
        sum = sum + i;
        
    }
    console.log(`Sum: ${sum}`)
}
solve(5)
solve(3)