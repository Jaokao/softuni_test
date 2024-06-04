function solve(day, age) {

    let price = 0;
    if (age < 0 || age > 122) {
        console.log(`Error!`)
    }

    switch (day) {

        case `Weekday`:
            if (age >= 0 && age <= 18) {
                price = 12;
                console.log(`${price}$`)
            }
            else if (age > 18 && age <= 64) {
                price = 18;
                console.log(`${price}$`);
            }
            else if (age > 64 && age <= 122) {
                price = 12;
                console.log(`${price}$`)
            }
            break;
        case `Weekend`:
            if (age >= 0 && age <= 18) {
                price = 15;
                console.log(`${price}$`)
            }
            else if (age > 18 && age <= 64) {
                price = 20;
                console.log(`${price}$`);
            }
            else if (age > 64 && age <= 122) {
                price = 15;
                console.log(`${price}$`)
            }
            break;
        case `Holiday`:
            if (age >= 0 && age <= 18) {
                price = 5;
                console.log(`${price}$`)
            }
            else if (age > 18 && age <= 64) {
                price = 12;
                console.log(`${price}$`);
            }
            else if (age > 64 && age <= 122) {
                price = 10;
                console.log(`${price}$`)
            }
            break;
    }
}
solve('Weekday', 42)
solve('Holiday', -12)
solve('Holiday', 15)