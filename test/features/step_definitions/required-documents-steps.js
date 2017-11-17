'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see proof of social security section', function (done) {
    browser
    .waitForSelector('.proof-of-ssn-documents')
    .then(() => { done(); })
    .catch((err) => {
      throw err;
      done(err);
    });
  });

  world.and('I will not see the proof of social security section', function(done) {
    browser
    .text()
    .then((text) => {
      assert(!text.includes('Proof of Social Security Number'), 'social security section is present');
    })
    .then(() => { done(); })
    .catch(done);
  });
};
