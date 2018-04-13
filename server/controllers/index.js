'use strict';

const getApplication    = require('./get-application');
const postApplication   = require('./post-application');
const getTranslation    = require('./get-translation');
const getUserApps       = require('./get-user-apps');
const renderClient      = require('./render-client');
const logout            = require('./logout');
const sendZip           = require('./send-zip');
const checkAuth         = require('./check-auth');
const sameUserOnly      = require('./same-user-only');
const isUserLoggedIn    = require('./is-user-logged-in');
const sendAppEnv        = require('./send-app-env');

let controllers = {
  getApplication,
  postApplication,
  getTranslation,
  getUserApps,
  renderClient,
  logout,
  sendZip,
  checkAuth,
  sameUserOnly,
  isUserLoggedIn,
  sendAppEnv
};

const auth = require('./auth');

Object.keys(auth).forEach((authMemberName) => {
  controllers[authMemberName] = auth[authMemberName];
});

module.exports = controllers;
