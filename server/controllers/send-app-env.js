'use strict';

module.exports = function sendAppEnv(req, res) {
  let timeout = process.env.APP_TIMEOUT || '600000';
  let adaTst = process.env.ADA_TST || false;

  let appData = {
    timeout: timeout,
    adaTst: adaTst
  };

  res.json(appData);
};