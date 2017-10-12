'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I see text for voter registration complete page', function (done) {
    browser
      .waitForSelector('.voter-reg-complete')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
        done(err);
      });
  });
};
