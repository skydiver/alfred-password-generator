const arg = require('arg');
const PasswordGenerator = require('strict-password-generator').default;

const args = arg({
    '--type':    String,
    '--length':  Number,
});

const length = args['--length'] || 32;

const types = {
    strong: {
        upperCaseAlpha  : true,
        lowerCaseAlpha  : true,
        number          : true,
        specialCharacter: true,
    },
    alphanum: {
        upperCaseAlpha  : true,
        lowerCaseAlpha  : true,
        number          : true,
        specialCharacter: false,
    },
    alpha: {
        upperCaseAlpha  : true,
        lowerCaseAlpha  : true,
        number          : false,
        specialCharacter: false,
    },
    num: {
        upperCaseAlpha  : false,
        lowerCaseAlpha  : false,
        number          : true,
        specialCharacter: false,
    }
};

const type = types[args['--type']] || types['strong'];

const passwordOptions = {
    ...type,
    exactLength: length < 4 ? 4 : length
};

const passwordGenerator = new PasswordGenerator();
let password = passwordGenerator.generatePassword(passwordOptions);

console.log(password);