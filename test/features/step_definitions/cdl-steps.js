'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.when('I select a commercial DL application', function(done) {
    browser
      .click('label[for="chooseApplication-cdl"]')
      .then(done)
      .catch(done);
  });

  world.when('I select a regular ID or DL application', function(done) {
    browser
      .click('label[for="chooseApplication-iddl"]')
      .then(done)
      .catch(done);
  });

  world.when('I select a new commercial DL', function(done) {
    browser
      .click('label[for="cdlWDYWTDT -new"]')
      .then(done)
      .catch(done);
  });

  world.then('I will see that I am applying for a new CDL', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Applying for the first time'), 'applying for new cdl missing');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
