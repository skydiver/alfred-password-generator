const arg = require('arg');
const { generate } = require('./lib/generator');

const args = arg({
  '--type': String,
  '--length': Number,
  '--params': String,
});

const type = args._[0] || args['--type'] || 'strong';
const length = args._[1] || args['--length'] || 32;

const password = generate(type, length);

console.log(password);
