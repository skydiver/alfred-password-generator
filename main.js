const arg = require('arg');
const { generate } = require('./lib/generator');

const args = arg({
  '--type': String,
  '--length': Number,
});

const type = args['--type'] || 'strong';
const length = args['--length'] || 32;

const password = generate(type, length);

console.log(password);
