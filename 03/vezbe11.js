function solve(input) {

    let bitcon = 11949.16;
    let gold = 67.51;
    let totalGold = 0; 
    let moneyEarned = 0;
    let bitcoinCount = 0;
    for (i = 0; i < input.length; i++) {
        
        currentGold = input[i];
        totalGold += currentGold 
        if (currentGold = input[2]) {
            currentGold = input[2] * 0.7  // ne radi

        }
      
    }
    if (moneyEarned < bitcon) {
        moneyEarned = totalGold * gold;
    }
    if (moneyEarned >= bitcon) {
        moneyEarned = (moneyEarned - bitcon);
        bitcoinCount++;
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`)
    console.log(`Left money: ${moneyEarned.toFixed(2)} lv.`)
}

solve([100, 200, 300]) // ako ima vise od 1 bitcoina onda ukupno podelim sa bitcoin ili
solve([50, 100]) // 50 * 67.51 + 100 * 67.51 = 3375.5 + 6751.00 = 10126.5
//solve([3124.15, 504.212, 2511.124])