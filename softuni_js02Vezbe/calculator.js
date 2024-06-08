function calculator(broj1, operacija, broj2) {

    switch (operacija) {
        case `+`:
            console.log((broj1+broj2).toFixed(2))
            break
        case `-`:
            console.log((broj1-broj2).toFixed(2))
            break
        case `*`:
            console.log((broj1*broj2).toFixed(2))
            break
        case `/`:
            if (broj2 == 0) {
                console.log(`Divide by zero not allowed`)
            }
            else {
                console.log((broj1/broj2).toFixed(2))
            }
            break
        default:
            console.log(`Unknown operation`)
            break
    }
}

calculator(5,
    '+',
    10
    )
calculator(25.5,
    '-',
    3
    )