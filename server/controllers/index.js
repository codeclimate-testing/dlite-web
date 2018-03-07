'use strict';

const getApplication    = require('./get-application');
const postApplication   = require('./post-application');
const getTranslation    = require('./get-translation');
const renderClient      = require('./render-client');

module.exports = {
  getApplication,
  postApplication,
  getTranslation,
  renderClient
};
