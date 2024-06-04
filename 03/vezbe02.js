function solve(num, rounder) {
    if (rounder > 15) {
        rounder = 15;
    }
    let finalNum = parseFloat(num.toFixed(rounder))
    console.log(finalNum);
}