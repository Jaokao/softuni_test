

function getRandomCharacter(characters) {
    if (!Array.isArray(characters)) {
        console.log(`Expected array, but got ${typeof characters}`);
        return "";
    }

    const randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex];
}



function generatePassword(duzina_passworda) {

    if (typeof duzina_passworda !== `number` || duzina_passworda <= 0) {
        console.log(`Length must be a positive number`);
        return "";
    }

 const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
 const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const NUMBER_CHARS = '0123456789';
 const SPECIAL_CHARS = '!@#$%^&*()-_=+[]{}|;:,.<>?';

 let password = "";

 password += getRandomCharacter(LOWERCASE_CHARS.split(""));
 password += getRandomCharacter(UPPERCASE_CHARS.split(""));
 password += getRandomCharacter(NUMBER_CHARS.split(""));
 password += getRandomCharacter(SPECIAL_CHARS.split(""));

 const allChars = LOWERCASE_CHARS + UPPERCASE_CHARS + NUMBER_CHARS + SPECIAL_CHARS;

 for (let i = 4; i < duzina_passworda; i++) {
    password += getRandomCharacter(allChars.split(""));
 }

 password = password.split("").sort(()  => Math.random() - 0.5).join("")
 return password;
}


function displayPassword(length_pass) {
    const password = generatePassword(length_pass)

    console.log(`Generated password: ${password}`)
}

const passwrdLength = 12;
displayPassword(passwrdLength);

console.log(`Neka promena`)