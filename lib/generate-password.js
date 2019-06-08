const generator = require('generate-password');

class Password {
  static strong(length) {
    const password = generator.generate({
      length,
      numbers: true,
      symbols: true,
      uppercase: true,
      excludeSimilarCharacters: true,
      strict: true,
    });
    return password;
  }

  static alphanumeric(length) {
    const password = generator.generate({
      length,
      numbers: true,
      symbols: false,
      uppercase: true,
      excludeSimilarCharacters: true,
      strict: true,
    });
    return password;
  }

  static alpha(length) {
    const password = generator.generate({
      length,
      numbers: false,
      symbols: false,
      uppercase: true,
      excludeSimilarCharacters: true,
      strict: true,
    });
    return password;
  }
}

module.exports = {
  strong: Password.strong,
  alphanumeric: Password.alphanumeric,
  alpha: Password.alpha,
};
