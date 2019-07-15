console.log('a start');
exports.done = false;
let b = require('./b');
console.log(`in a, b.done = ${b.done}`);
exports.done = true;
console.log('a done');