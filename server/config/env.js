'use strict';

const dotenv = require('dotenv');
dotenv.config();

const env = process.env.APP_ENV || 'development';
process.env.NODE_ENV = env;

const port   = process.env.PORT || 3000;

module.exports = {
  env: env,
  port: port
};
