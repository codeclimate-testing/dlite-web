'use strict';
const session           = require('express-session');
const RedisStore        = require('connect-redis')(session);
const config            = require('../../redis-file');

const sessionOptions = {
  name: 'dlite-web-session',
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new RedisStore(config)
};

module.exports = session(sessionOptions);
