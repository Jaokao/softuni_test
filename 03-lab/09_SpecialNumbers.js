/*
    Write a program that receives a number n.  For all numbers in the range [1…n] print the number and if it is special or not (True / False).
•	A number is special when its sum of digits is 5, 7 or 11.

To calculate the sum of digits of given number num, you might repeat the following: sum the last digit (num % 10) and remove it (sum = sum / 10) until num reaches 0. 
Use parseInt() while dividing to get only integer numbers

Input	Output
15	
1 -> False          
2 -> False
3 -> False
4 -> False          
5 -> True   5
6 -> False
7 -> True   7
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True  5
15 -> False
 Prvo treba da se petljom prodje 1 do num i <= num
    pa u petlji imamo pomocnu promeljivu za sum
    i takodje bi trebalo da se konvertuje i u string
    pa ispod idemo u ugnjezdenu petlju koja ide od j do i.length
    i radi suma = suma + Number(i[j]) (i koji smo pretvorili u string)

    Onda bi trebalo da se proveri da li je ta suma jednaka 5, 7 ili 11 pa da se stampa u odnosu na dobijen rezultat
*/

function solve(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;

        // Sabiranje cifara trenutnog broja
        while (num > 0) {
            sum += num % 10;
            num = parseInt(num / 10);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        }
        else {
            console.log(`${i} -> False`);
        }
    }
}

// Primer poziva funkcije sa unosom n = 15
solve(15);


function solve2(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        let digits = Array.from(String(num), Number); // Pretvara broj u niz cifara

        // Sabiranje cifara trenutnog broja koristeći for petlju
        for (let j = 0; j < digits.length; j++) {
            sum += digits[j];  // ako gore skinemo ,Number onda bi ovde islo sum += parseInt(digits[j]);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        }
        else {
            console.log(`${i} -> False`);
        }
    }
}
solve2(15);