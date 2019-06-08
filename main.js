const arg = require('arg');
const { strong, alphanumeric, alpha } = require('./lib/generate-password');
const { numeric } = require('./lib/strict-password');

const args = arg({
  '--type': String,
  '--length': Number,
});

const type = args['--type'] || 'strong';
const length = args['--length'] || 32;

if (type === 'numeric') {
  const password = numeric(length);
  console.log(password);
} else if (type === 'alpha') {
  const password = alpha(length);
  console.log(password);
} else if (type === 'alphanum') {
  const password = alphanumeric(length);
  console.log(password);
} else {
  const password = strong(length);
  console.log(password);
}
