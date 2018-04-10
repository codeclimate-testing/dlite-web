'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.and('I click "Next" to continue', function(done) {
    browser
      .click('.navigation-buttons .forward')
      .then(() => { done(); })
      .catch((err) => { done(new Error(err)); });
  });

  world.and('I click to continue', function(done) {
    browser
      .click('.arrow-button.forward')
      .then(() => { done(); })
      .catch((err) => { done(new Error(err)); });
  });

  world.and('I click to go back', function(done) {
    browser
      .click('.navigation-buttons .backwards')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that the "Next" button is enabled', function(done) {
    browser
     .exists('button.forward[disabled]')
     .then((input) => {
       assert.ok(!input, 'Button not enabled');
     })
     .then(() => { done(); })
     .catch(done);
 });

  world.then('I will see that the "Next" button is disabled', function(done) {
    browser
      .exists('button.forward[disabled]')
      .then((input) => {
        assert.ok(input, 'Button not disabled');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that the "Next" button is no longer disabled', function(done) {
     browser
      .exists('button.forward[disabled]')
      .then((input) => {
        assert.ok(!input, 'Button is still disabled');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click the log-out link', function(done) {
    browser
      .click('#log-out a')
      .waitForSelector('.id-me')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will not see any log-out link', function(done) {
    browser
      .text()
      .then(text => {
        assert.equal(text.includes('Log out'), false);
      })
      .then(() => { done(); })
      .catch(done);
  });
};
