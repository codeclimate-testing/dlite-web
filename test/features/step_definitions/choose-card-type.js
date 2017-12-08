'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('I click on the DL checkbox', function(done) {
    browser
      .click('[for="DL"]')
      .then(() => { done(); })
      .catch(done)
  });

  world.when('I click on the ID checkbox', function(done) {
    browser
      .click('[name="ID"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my ID card type has been saved', function(done) {
    browser
      .text('.inner')
      .then((text) => {
        assert.ok(text.includes('Card Type: ID'), 'ID card type not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my DL card type has been saved', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Card Type: DL'), 'DL card type not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my card types have been saved', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Card Types'), 'card types not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};