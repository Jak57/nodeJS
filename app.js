// npm - global command, comes with node
// npm - node package manager
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName> (i -> install)

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// mannual approach (creates package.json in the root, creates properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default) (recommended)

const _ = require('lodash'); // for using external packages first we have to install that
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);