const PasswordGenerator = require('strict-password-generator').default;

class Password {
  static numeric(length) {
    const passwordGenerator = new PasswordGenerator();
    const password = passwordGenerator.generatePassword({
      upperCaseAlpha: false,
      lowerCaseAlpha: false,
      number: true,
      specialCharacter: false,
      exactLength: length < 4 ? 4 : length,
    });
    return password;
  }
}

module.exports = { numeric: Password.numeric };
