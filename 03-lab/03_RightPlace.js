function solve(str1, char, str2) {

    let final = str1.replace(`_`, char);

    if (final === str2) {
        console.log(`Matched`);
    }
    else {
        console.log(`Not Matched`);
    }
}

solve('Str_ng', 'i', 'String')