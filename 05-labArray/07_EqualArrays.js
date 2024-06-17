function solve(arr1, arr2) {

    let sum = 0;

    // Ova promenljiva ce cuvati indeks na kom se nizovi razlikuju
    let difIndex = undefined;

    for (let i = 0; i < arr1.length; i++) {
        
        if (Number(arr1[i]) === Number(arr2[i])) {
            sum += Number(arr1[i])
        }
    else {
        // ako nisu identicni, pamptimo indeks u promenljivoj
        difIndex = i;
        // koristimo break da prekinimo petlju
        break;
    }
    
  }
  if (difIndex !== undefined) {
    console.log(`Arrays are not identical. Found difference at ${difIndex} index`)
  }
  else {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
solve(['10','20','30'], ['10','20','30'])
solve(['1','2','3','4','5'], ['1','2','4','4','5'])
