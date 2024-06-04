function andOperator(a, b) {
    if (a && b) {
        console.log(`Oba uslova su ispunjena`)
    }
    else {
        console.log(`Barem jedan uslov nije ispunjen`)
    }
}
andOperator(true,true)
andOperator(true,false)
andOperator(false,true)
andOperator(false,false)

// Or (||) operator

function proveriUslov(a, b) {
    if (a || b) {
        console.log(`Barem jedan uslov je ispunjen`)
    }
    else {
        console.log(`Ni jedan uslov nije ispunjen`)
    }
}
proveriUslov(true, true)
proveriUslov(true, false)
proveriUslov(false, true)
proveriUslov(false, false)

/*
    Not operator
*/

function notOperator(a) {
    if (!a) {
        console.log(`Uslov nije ispunjen`)
    }
    else {
        console.log(`Uslov je ispunjen`)
    }
}

notOperator(true)
notOperator(false)

