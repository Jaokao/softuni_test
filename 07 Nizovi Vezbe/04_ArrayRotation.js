// shift() Metoda koja nema parametre i radi sledece: skida element sa pocetka niza, dakle menja niz, i vraca taj element tako da ga mozemo sacuvati u promenljivu

//unshift(elem) prihvata jedan argument elem i njega ubacuje na poctak niza

//push(elem) prihvata jedan argument elem i njega ubacuje na kraj niza

//pop() bez argumenata skida element sa kraja niza

function rotation(niz, brRot) {

    for (let i=1; i <= brRot; i++) {

        let brojSaPocetka = niz.shift();
        niz.push(brojSaPocetka)
    }
    //console.log(niz) nije moglo ovako jer ostaju srednje zagrade, a .join sve elemente pretvori u stringove i spoji ih kao sto smo stavili " " i napravi razmak
    console.log(niz.join(" ")) 
}

rotation([51, 47, 32, 61, 21], 2)
rotation([32, 21, 61, 1], 4)
rotation([2, 4, 15, 31], 5)