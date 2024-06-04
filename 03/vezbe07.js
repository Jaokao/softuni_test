function solve(n) {

    let row = "";

    // ovo je nasa spoljasnja petlja i iterira od 1 do n ukljucujuci n
    for (let i = 1; i <= n; i++) {
        // unutrasnja petlja iterira od 1 do i
        for (let j = 1; j <= i; j++) {
            // dodajemo vrenost `i` i razmak na kraju stringa `row`
            row += i + " ";
        }
        // Ispisujemo generisani row
        console.log(row);
        // resetujemo row na prazan string za sledecu iteraciju spolje petlje
        row = "";
    }
}
solve(3)