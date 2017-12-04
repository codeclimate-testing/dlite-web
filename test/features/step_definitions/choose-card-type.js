'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('I click on the drivers license checkbox', function(done) {
    browser
      .click('input[type="checkbox" id="driverLicense"]')
      .then(() => { done(); })
      .catch(done)
  });

  world.and('I click on the ID checkbox', function(done) {
    browser
      .click('input[type="checkbox" id="ID"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my ID card type has been saved', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Card Type: ID'), 'ID card type not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my DL card type has been saved', function(done) {
    browser
      .text()
      .then((text) => { 
        assert(text.includes('Card Type: Drivers License'), 'DL card type not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my card types have been saved', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Card Types: ID and Driver License'), 'card types not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};