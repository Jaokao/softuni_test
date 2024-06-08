function lowerOrUpper(char1) {

    if (`A` <= char1 && char1 <= `Z`) {
        // `A` `B` `C` `D` .... `Z`
        console.log(`upper-case`)
    }
    else {
        console.log(`lower-case`)
    }
}

console.log(`ana` < `aaa`) // koja rec bi se u recniku nalazila ispred koje
// kod od a je 97, a od A 65
// smatralo bi s da je A < a

lowerOrUpper(`L`)
lowerOrUpper(`u`)

