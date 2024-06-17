function checkType(variable, expectedType) {

    if (typeof variable !== expectedType) {
        console.log(`Expected ${expectedType}, but got ${typeof variable}`);
    }
}


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGuessingGame() {

    const targetNumber = generateRandomNumber(1, 100)

    let attempts = 0;

    console.log(`Welcome to the number guessing game! `);
    console.log(`Izabrao sam neki broj pogodi ga!! `);

    while (true) {
        const prompt = require(`prompt-sync`)();
        let userInput = prompt(`Enter your guess: `)
        attempts++;

        checkType(userInput, `string`);

        const guess = parseInt(userInput);

        checkType(guess, `number`)

        if (isNaN(guess)) {
            console.log(`Invalid input. Please a number.`)
            continue;
        }

        if (guess === targetNumber) {
            console.log(`Svaka cast pogodjeno posle ${attempts}`);
            break;

        }
        else if (guess < targetNumber) {
            console.log(`Too low! Try again`)
        }
        else {
            console.log(`Too high! Try again`)
        }
    }

}

playGuessingGame();