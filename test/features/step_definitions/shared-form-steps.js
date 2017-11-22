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

  world.and('I click to continue', function(done) {
    browser
      .click('a.continue.button')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I click to go back', function(done) {
    browser
      .click('button')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I click on back link', function(done) {
    browser
      .click('a.back.button')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see a button to submit', function (done) {
    browser
      .exists('input[type="submit"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that the Continue button is enabled', function(done) {
    browser
     .exists('input[type="submit"][disabled]')
     .then((input) => {
       assert.ok(!input, 'Button not enabled');
     })
     .then(() => { done(); })
     .catch(done);
 });

  world.then('I will see that the Continue button is disabled', function(done) {
    browser
      .exists('input[type="submit"][disabled]')
      .then((input) => {
        assert.ok(input, 'Button not disabled');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that the Continue button is no longer disabled', function(done) {
     browser
      .exists('input[type="submit"][disabled]')
      .then((input) => {
        assert.ok(!input, 'Button is still disabled');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
