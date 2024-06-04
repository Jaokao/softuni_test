function solve(n) {

    let sum = 0;
    let number = 2;
    for (let i = 1; i < number * 2 ; i = i + 2) {

        console.log(i);
        sum = sum + i;
        if (number > n) {
            break;
        }
        number++;
    }
    console.log(`Sum: ${sum}`)
}
solve(5)
solve(3)