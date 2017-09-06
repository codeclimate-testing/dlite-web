'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.and('I click to submit', function(done) {
    browser
      .click('input[type="submit"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see a button to submit', function (done) {
    browser
      .exists('input[type="submit"]')
      .then(() => { done(); })
      .catch(done);
  });
};
