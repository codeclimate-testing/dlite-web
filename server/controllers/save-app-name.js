'use strict';

module.exports = function saveAppName(req, res, next) {
  res.cookie('appName', req.params.appName);
  next();
};