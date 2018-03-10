'use strict';

module.exports = {
  name: 'dlite-web-session',
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: true,
  saveUninitialized: true
};
