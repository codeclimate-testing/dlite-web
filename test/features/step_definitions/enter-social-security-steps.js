'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a number field for each part of my social security number', function(done) {
    browser
      .exists('#part1[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for part 1 ssn missing')})
      .exists('#part2[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for part 2 ssn missing')})
      .exists('#part3[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for part 3 ssn missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I enter my full social security number', function(done) {
    browser
      .type('#part1', '123')
      .type('#part2', '45')
      .type('#part3', '1967')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my social security on that summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('123-45-1967'), 'social security missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I have already entered my social security number', function(done) {
    browser
      .click('a.social-security')
      .waitForSelector('.social-security-form')
      .type('#part1', '123')
      .type('#part2', '45')
      .type('#part3', '1967')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the social security number that I entered', function(done) {
    browser
      .value('#part1')
      .then((value) => { assert.equal(value, '123'); })
      .value('#part2')
      .then((value) => { assert.equal(value, '45'); })
      .value('#part3')
      .then((value) => { assert.equal(value, '1967'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I change my social security number', function(done) {
    browser
      .clear('#part3')
      .type('#part3', '1969')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my social security number in the summary', function(done) {
     browser
      .text()
      .then((text) => {
        assert(text.includes('123-45-1969'), 'social security missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
