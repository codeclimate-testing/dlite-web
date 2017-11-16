'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I see text for updating voter preferences render', function (done) {
    browser
      .waitForSelector('.updating-voter-preferences')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
        done(err);
      });
  });
};
