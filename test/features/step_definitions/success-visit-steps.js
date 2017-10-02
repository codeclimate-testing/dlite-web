'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I see text for documents needed for a Class C license', function (done) {
    browser
      .waitForSelector('.success-visit-form')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
        done(err);
      });
  });
};