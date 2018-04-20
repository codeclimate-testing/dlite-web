'use strict';

process.env.APP_ENV = 'test';
process.env.APP_TIMEOUT = '600000';
process.env.APP_MODE = 'public';

const path = require('path');
const supportDir = __dirname;
const serverDir  = path.resolve(__dirname, '../../server');

require(serverDir + '/config/env');

module.exports = {
  current: process.env.APP_ENV,
  supportDir: supportDir,
  serverDir: serverDir
};
