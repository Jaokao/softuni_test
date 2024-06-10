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

*/

function solve(n) {

    let sum = "";

    for (let i = 1; i <= n; i++) {

        sum += parseInt(Array.from(String(i)))
        console.log(sum)
    }

}
solve(15)