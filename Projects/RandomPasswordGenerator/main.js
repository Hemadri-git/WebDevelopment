
const passwordLength = 12;
const includeLower = true;
const includeUpper = true;
const includeNumber = true;
const includeSpecial = true;

function generatePassword( length, includeLower, includeUpper, includeNumber, includeSpecial){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowed = "";
    let password = "";

    allowed += includeLower? lowercaseChars : "";
    allowed += includeUpper? uppercaseChars : "";
    allowed += includeNumber? numberChars : "";
    allowed += includeSpecial? symbolChars : "";

    if(length<=0){
        return `cant be empty`;
    }
    if(allowed.length === 0){
        return  `can't be zero`;
    }

    for(let i = 0; i< length; i++){
        const random = Math.floor(Math.random() * allowed.length);
        password += allowed[random];
    }

    return password;
}

const password = generatePassword( passwordLength, includeLower, includeUpper, includeNumber, includeSpecial);
console.log(`Gererated password: ${password}`);