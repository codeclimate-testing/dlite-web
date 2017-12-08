'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.and('I will see a message asking if I would like an ID instead', function(done) {
    browser
      .text('.minor-dl-message')
      .then( text => {
        assert(text.includes('Would you like to get a California ID instead?'), 'message not on page')
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click to get an ID instead', function(done) {
    browser
      .click('label[for="Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click "No" to not get a license instead', function(done) {
    browser 
      .click('label[for="No"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see a message after my choice letting me know I should come back when I am 14 or older', function(done) {
    browser
      .text('.minor-dl-message')
      .then( text => {
        assert.ok(text.includes('OK, please come back when you turn 14.'))
      })
      .then( () => { done(); })
      .catch(done);
  });

  world.and('I will see there is no "Next" button', function(done) {
    browser 
      .exists('div.unit-right[style="visibility: hidden"]')
      .then(() => { done(); })
      .catch(done);
  });

};
