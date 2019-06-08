const { strong, alphanumeric, alpha } = require('./generate-password');
const { numeric } = require('./strict-password');

class Generator {
  static generate(type, length) {
    const types = {
      num: numeric,
      alpha,
      alphanum: alphanumeric,
      strong,
    };
    const exec = types[type] || types.strong;
    return exec(length);
  }
}

module.exports = { generate: Generator.generate };
