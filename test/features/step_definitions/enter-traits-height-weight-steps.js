'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a field for height and weight', function(done) {
    browser
      .exists('#feet')
      .then((exists) => { assert.ok(exists, 'input for feet missing')})
      .exists('#inches')
      .then((exists) => { assert.ok(exists, 'input for inches missing')})
      .exists('#weight')
      .then((exists) => { assert.ok(exists, 'input for weight missing')})
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

  world.then('I will see the height and weight I entered', function(done) {
    browser
      .value('#feet')
      .then((value) => { assert.equal(value, '5'); })
      .value('#inches')
      .then((value) => { assert.equal(value, '9'); })
      .value('#weight')
      .then((value) => { assert.equal(value, '200'); })
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

  world.and('I have already entered my height and weight into the form', function(done) {
    browser
      .click('a.traits-height-and-weight')
      .waitForSelector('.traits-height-weight-form')
      .type('#feet', '5')
      .type('#inches', '9')
      .type('#weight', '200')
      .click('a.sections')
      .waitForSelector('.section-links')
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
      .click('a.sections')
      .waitForSelector('.section-links')
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

