'use strict';

const Browser = require('zombie');
const port    = 3033;

const app  = require('../../../server');
Browser.localhost('dmv.ca.gov', port);

module.exports = function setup(callback) {
  let browser = new Browser();
  let server = app.listen(port, () => {
    callback({
      server: server,
      browser: browser
    });
  });
};
