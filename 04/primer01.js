function checkType(variable, expectedType) {

    if (typeof variable !== expectedType) {
        console.log(`Expected ${expectedType}, but got ${typeof variable}`);
    }
}

function processVariables(name, age, isStudent, grades) {
  //  age = parseInt(age); // jos jedan nacin na koji obezbedjujemo pravilan tip jeste parsiranje podataka
  //  age = parseFloat(age);
  // name = toString(name);

    // provera tipova promenljivih
    checkType(name, `string`);
    checkType(age, `number`);
    checkType(isStudent, `boolean`);
    checkType(grades, `object`);
// da mi dodamo ako neki checktype ne radi da zavrsi program i da da objasnjenje
    
    // proverim niz

    if (!Array.isArray(grades)) {
        console.log(`Grades mora da bude array`)
    }

    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Is Sudent: ${isStudent}`);
    console.log(`Grades: ${grades}`);

    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        checkType(grades[i], `number`);
        sum += grades[i];
    }

    let average = sum / grades.length;
    console.log(`Average grade ${average}`);
 }

 processVariables(`John`, 20, true, [85, 90, 95]);
 processVariables(`John`, `20`, true, [85, 90, 95]);
 processVariables(`John`, 20, true, [85, 90, `A`]);