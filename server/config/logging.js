'use strict';

const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

module.exports = function(env) {
  env = env || process.env.APP_ENV;

  let options = {};

  if (env === 'test') {
    let fileStream = fs.createWriteStream(path.join(__dirname, '..', '..', 'log', 'test.log'), {flags: 'a'});
    options = {stream: fileStream};
  }

  return morgan('combined', options);
};
