function solve(start, end) {
    const number = [];
    let sum = 0;

    for (let i = start; i <= end; i++) {
        number.push(i);
        sum += i;
    }
    console.log(number.join(" "))
    console.log(`Sum: ${sum}`)
}
solve(5, 10)
solve(0, 26)