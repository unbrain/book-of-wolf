console.log('b start');
exports.done = false;
let a = require('./a');
console.log(`in b, a.done = ${a.done}`);
exports.done = true;
console.log('b done');