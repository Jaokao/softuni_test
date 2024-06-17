function commonElements(niz1, niz2) {

    for (let i = 0; i < niz1.length; i++) {
        if (niz2.includes(niz1[i])) {
            console.log(niz1[i]);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);