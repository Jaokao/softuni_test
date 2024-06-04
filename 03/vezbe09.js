function solve(input) {

    let username = input[0]
    let tryouts = 0;
    for (let i = 1; i < input.length; i++) {

       // let currentTry = input[i]
        console.log(`Incorrect password. Try again.`)
        tryouts++

            if (tryouts > 2) {
                console.log(`User ${username} blocked!`)
                break
            }
  
        //console.log(input[i]);

    }
}

//solve(['Acer','login','go','let me in','recA'])
solve(['sunny','rainy','cloudy','sunny','not sunny'])