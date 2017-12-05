'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('I click on the DL checkbox', function(done) {
    browser
      .click('.input-container > label[for="driverLicense"]')
      .then(() => { done(); })
      .catch(done)
  });

  world.when('I click on the ID checkbox', function(done) {
    browser
      .click('label[for="ID"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my ID card type has been saved', function(done) {
    browser
      .text()
      .then((text) => {
        console.log(text)
        assert(text.includes('Card Type: ID'), 'ID card type not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my DL card type has been saved', function(done) {
    browser
      .text()
      .then((text) => { 
        assert(text.includes('Card Type: Driver License'), 'DL card type not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my card types have been saved', function(done) {
    browser
      .text()
      .then((text) => {
        console.log(text)
        assert(text.includes('Card Types'), 'card types not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};