'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a field for height feet and inches', function(done) {
    browser
      .exists('#feet')
      .then((exists) => { assert.ok(exists, 'input for feet missing')})
      .exists('#inches')
      .then((exists) => { assert.ok(exists, 'input for inches missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I enter my feet', function(done) {
    browser
      .type('#feet', '5')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I enter my inches', function(done) {
    browser
      .type('#inches', '9')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my height on that summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('5 feet 9 inches'), 'height missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my height into the form', function(done) {
    browser
      .open(world.url('/'))
      .waitForSelector('.home-page')
      .click('a.height')
      .waitForSelector('.height-form')
      .type('#feet', '5')
      .type('#inches', '9')
      .click('input[type="submit"]')
      .click('a.home')
      .waitForSelector('.home-page')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the height I entered', function(done) {
    browser
      .value('#feet')
      .then((value) => { assert.equal(value, '5'); })
      .value('#inches')
      .then((value) => { assert.equal(value, '9'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my inches', function(done) {
    browser
      .clear('#inches')
      .type('#inches', '7')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated height on the summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('5 feet 7 inches'), 'Updated height not on summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
