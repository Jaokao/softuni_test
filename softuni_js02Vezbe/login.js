function solve(input) {

    let username = input[0]
    let tryouts = 0;
    //console.log(Array.from(input[0]));
    let arr = Array.from(username);
    let sum = "";

    for (let i = arr.length - 1; i >= 0; i--) {
        sum += arr[i];
    }
    //console.log(sum)
    
    for (let i = 1; i < input.length; i++) {
        let current = input[i]

        if (sum === current) {
            console.log(`User ${username} logged in.`);
            break;
        }
        else {
            tryouts++;
            if (tryouts === 4) {
                console.log(`User ${username} blocked!`);
                break
            } else {
                console.log(`Incorrect password. Try again.`);
            }
    }
}
}
solve(['Acer','login','go','let me in','recA'])
solve(['momo','omom'])
solve(['sunny','rainy','cloudy','sunny','not sunny'])