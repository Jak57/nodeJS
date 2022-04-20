// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names'); // don't need to add .js extension
const sayHi = require('./5-utils');
console.log(names);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

const data = require('./6-alternative-flavor');
console.log(data);

require('./7-mind-grenade');
console.log(module);