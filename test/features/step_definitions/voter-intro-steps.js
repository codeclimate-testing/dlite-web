'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I see text introducing the voter page', function (done) {
    browser
      .waitForSelector('.voter-intro-info')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
        done(err);
      });
  });
};