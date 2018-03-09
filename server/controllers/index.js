'use strict';

const getApplication    = require('./get-application');
const postApplication   = require('./post-application');
const getTranslation    = require('./get-translation');
const renderClient      = require('./render-client');

let controllers = {
  getApplication,
  postApplication,
  getTranslation,
  renderClient
};

const auth = require('./auth');

Object.keys(auth).forEach((authMemberName) => {
  controllers[authMemberName] = auth[authMemberName];
});

module.exports = controllers;
