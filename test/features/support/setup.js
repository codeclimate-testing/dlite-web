'use strict';

process.env.APP_ENV = 'test';

const Browser = require('zombie');
const port    = 3033;

const app  = require('../../../server');

module.exports = function setup(callback) {
  let browser = new Browser();

  function url(path) {
    let base = `http://localhost:${port}`;
    let fullUrl = base;
    if (path && path[0] !== '/') {
      fullUrl = `${fullUrl}/${path}`;
    } else if (path) {
      fullUrl = `${fullUrl}${path}`;
    }
    return fullUrl;
  }

  let server = app.listen(port, () => {
    callback({
      server: server,
      browser: browser,
      url: url
    });
  });
};
