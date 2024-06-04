/*
Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
The input comes as a single number parameter. The bounders are:
·	0-2 (age) – is a baby;   
·	3-13 (age) – is a child; 
·	14-19 (age) – is a teenager;
·	20-65 (age) – is an adult;
·	>=66 (age) – is an elder; 
·	In all other cases print – "out of bounds";

*/

function solve(age) {
    if (age >= 66) {
        console.log(`elder`)
    }
    else if (age >= 20) {
        console.log(`adult`)
    }
    else if(age >= 14) {
        console.log(`teenager`)
    }
    else if (age >= 3) {
        console.log(`child`)
    }
    else if (age >= 0) {
        console.log(`baby`)
    }
    else {
        console.log(`out of bounds`)
    }
}