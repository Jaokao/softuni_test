function solve(input) {

    const dataType = typeof input;

    console.log(dataType);

    if (dataType === `string` || dataType === `number`) {
        console.log(input);
    }
    else {
        console.log(`Parameter is not suitable for printing`)
    }
}

