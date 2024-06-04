/*
    The rest of the step is made out of lapis lazuli for every fifth step from the bottom and marble for all other steps
    Lapis je svaki 5 korak, od baze pa nagore
    ako je 11 baza onda 11 - 9 - 7 - 5 - [3] - 1  lapis je 3   3 x 3 je 8 ima okolo i 1 ( 1 x 1) unutra, racuna se okolo   3 * 3 - 1 * 1= 8 (increment 1) // manje za 2
    ako je 12 onda 12 - 10 - 8 - 6 - [4] - 2 lapis je 4   4 x 4 je 16, - 4 unutra (2 x 2) i 12 ima okolo   4 * 4 - 2 * 2 = 12 (increment 1)
    ako je 23 onda 23 - 21 - 19 - 17 - [15] 13 11 9 7 [5] 3 1  - 2 lapisa imaju  prvi - 15 x 5  // 13 x 13   225 - 169  = 59 / 2 (increment 0.5)  = 28    25 - 9 = 16 * 0.5 = 8
    za 23 lapis je 28 + 8 = 36   
    11 i (increment 0.75) = 11 9 7 5 3    3 * 3 - 1 * 1   = 8 * 0.75 = 6 lapisa

    Ako je poslednji broj 1 = gold je 1 
    ako je poslednji broj 2 = gold je 2x2 = 4   
    parna baza = 4, neparna baza = 1  
    
    total stone = (i - 2)²
    total marble = i² - total stone
*/


function solve(base, increment) {

    let totalStone = 0;
    let totalMarble = 0;
    let pyramidHeight = 0;
    let gold = 0;
    let lapis = 0

    for (let i = base; i > 0; i = i - 2) {


        
        let stone = (i - 2) * (i - 2) * increment;
        totalStone = totalStone + stone;
        if (i <= 1) {
            totalStone = totalStone - 1
        }

        let marble = (i * i - stone) * increment;
        totalMarble = totalMarble + marble * increment;
        pyramidHeight++;
    
        if (base % 2 === 0) {
            gold = 4;
        }
        else {
            gold = 1;
        }
        if (pyramidHeight >= 5 && pyramidHeight < 7 && base % 2 === 0) {
            lapis = 4 * 4 - 2 * 2 * increment;
        }
        else if (pyramidHeight >= 5 && pyramidHeight < 7 && base % 2 !== 0) {
            lapis = 3 * 3 - 1 * 1 * increment;
        }

    }
    if (base % 2 === 0) {
        totalMarble = totalMarble - 4;
    }
    if (increment < 1) {
        totalMarble = totalMarble - 2;
        lapis = lapis - 3
    }
    
    let height = pyramidHeight * increment;
    console.log("Stone required: " + Math.ceil(totalStone));
    console.log("Marble required: " + Math.ceil(totalMarble - lapis));
    console.log("Lapis Lazuli required: " + Math.ceil(lapis))
    console.log("Gold required: " + gold);
    console.log("Final pyramid height: " + Math.floor(height));
 
}

solve(11, 1) // 9 * 9 = 81 * 1 + 7 * 7 = 49 + 25 + 9 + 1
solve(11, 0.75)
solve(12, 1)
//solve(23, 0.5)