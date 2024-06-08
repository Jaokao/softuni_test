function gladiator(lostFIghts, price1, price2, price3, price4) {

    // 1 2 3 4 5 6 7  7/2   7/2 = 3.5
    // 7 / 2 Math.floor(7/2) = 3

    let price = 0;
    price += Math.floor(lostFIghts/2) * price1;

    price += Math.floor(lostFIghts/3) * price2;

    price += Math.floor(lostFIghts/6) * price3;

    price += Math.floor(lostFIghts/12) * price4;

    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}
//•	Allowed working time / memory: 100ms / 16MB.
// konstantna slozenost 0(1)

gladiator(7,
    2,
    3,
    4,
    5
    )
gladiator(23,
    12.50,
    21.50,
    40,
    200
    )