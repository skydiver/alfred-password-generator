const arg = require('arg');
const { numeric } = require('./lib/strict-password');

const args = arg({
  '--type': String,
  '--length': Number,
});

const length = args['--length'] || 32;

const password = numeric(length);

console.log(password);
