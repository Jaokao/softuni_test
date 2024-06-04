let myVariable;
console.log(myVariable); // Output undefined

myVariable = null;
console.log(myVariable)

if (myVariable === undefined) {
    console.log(`${myVariable} je undefined`);
}

if (myVariable === null) {
    console.log(`${myVariable} je null`);
}

// boolean
let isStudent = true;
let isEmployed = false;

// null

myVariable = null

// undefined
myVariable;

// broj
let age = 25;
let price = 9.99;
let temperature = -5

// string
let name = `John`
let message = `Hello, world`
let description = `This is a long string`;

// symbol

let id = Symbol(`unique identifier`);
let anotherID = Symbol(`unique identifier`);

console.log(id === anotherID); // false , jer su oba unikatni

// big int

let bigNumber = 12312312313213223132312312132312123n;
let anotherBigNumber = BigInt(`23123312312213132132213132321231`);

// slozen tip bi bio objekat

let person = {
    name: `Alice`,
    age: 30,
    city: `New York`,
};