'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a number field for month, day and year', function(done) {
    browser
      .exists('#month[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for month missing')})
      .exists('#year[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for year missing')})
      .exists('#day[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for day missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I enter my full date of birth into the form', function(done) {
    browser
      .type('#month', '9')
      .type('#day', '7')
      .type('#year', '1967')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my date of birth on that summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('9/7/1967'), 'date of birth missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I have already entered my date of birth', function(done) {
    browser
      .click('a.date-of-birth')
      .waitForSelector('.date-of-birth-form')
      .type('#month', '9')
      .type('#day', '7')
      .type('#year', '1967')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the date of birth that I entered', function(done) {
    browser
      .value('#month')
      .then((value) => { assert.equal(value, '9'); })
      .value('#day')
      .then((value) => { assert.equal(value, '7'); })
      .value('#year')
      .then((value) => { assert.equal(value, '1967'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I change my year of birth', function(done) {
    browser
      .clear('#year')
      .type('#year', '1969')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated birth year', function(done) {
     browser
      .text()
      .then((text) => {
        assert(text.includes('9/7/1969'), 'date of birth missing');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
