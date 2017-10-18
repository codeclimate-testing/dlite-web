'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('I enter my previously used names', function(done) {
    browser
    .type('#names', 'previousName1')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see my previously used name on that summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('previousName1'), 'previous name missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my previously used names', function(done) {
    browser
      .click('a.previous-names-info')
      .waitForSelector('.previous-names-info-form')
      .type('#names', 'previousName1')
      .click('input[type="submit"]')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the previously used name I entered', function(done) {
    browser
      .value('#names')
      .then((value) => { assert.equal(value, 'previousName1'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I change my previously used name', function(done) {
    browser
      .type('#names', 'previousName2')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated previously used name', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('previousName2'), 'Updated previous name not on summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
