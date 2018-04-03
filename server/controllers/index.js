'use strict';

const getApplication    = require('./get-application');
const postApplication   = require('./post-application');
const getTranslation    = require('./get-translation');
const getUserApps       = require('./get-user-apps');
const renderClient      = require('./render-client');
const logout            = require('./logout');
const sendZip           = require('./send-zip');
const saveAppName       = require('./save-app-name');

let controllers = {
  getApplication,
  postApplication,
  getTranslation,
  getUserApps,
  renderClient,
  logout,
  sendZip,
  saveAppName
};

const auth = require('./auth');

Object.keys(auth).forEach((authMemberName) => {
  controllers[authMemberName] = auth[authMemberName];
});

module.exports = controllers;
