'use strict'

const combine = require('istanbul-combine');

var opts = {
  dir:      `coverage/combined`,              // output directory for combined report(s)
  pattern:  `coverage/*/coverage.raw.json`,   // json reports to be combined
  print:    'both',                           // print to the console (summary, detail, both, none)
  base:     `${__dirname}/../../coverage`     // base directory for resolving absolute paths, see karma bug
};

console.log('=======================================================================================');
console.log('---------------------------------- COMBINED COVERAGE ----------------------------------')
console.log('=======================================================================================')
combine.sync(opts);
