'use strict';

module.exports = function sendAppEnv(req, res) {
  let timeout = process.env.APP_TIMEOUT || '600000';
  let adaTst = process.env.ADA_TST || false;
  let splashURL = process.env.TST_SPLASH_SCREEN_URL || '';

  let appData = {
    timeout: timeout,
    adaTst: adaTst,
    splashURL: splashURL
  };

  res.json(appData);
};