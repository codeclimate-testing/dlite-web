'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a field for pounds weight', function(done) {
    browser
      .exists('#weight')
      .then((exists) => { assert.ok(exists, 'input for feet missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I enter my weight', function(done) {
    browser
      .type('#weight', '210')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my weight on that summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('210 pounds'), 'weight missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my weight into the form', function(done) {
    browser
      .click('a.weight')
      .waitForSelector('.weight-form')
      .type('#weight', '210')
      .click('input[type="submit"]')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the weight I entered', function(done) {
    browser
      .value('#weight')
      .then((value) => { assert.equal(value, '210'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my weight', function(done) {
    browser
      .clear('#weight')
      .type('#weight', '190')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated weight on the summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('190 pounds'), 'Updated weight not on summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
