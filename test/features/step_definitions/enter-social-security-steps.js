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
        assert(text.includes('xxx-xx-1967'), 'social security missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I have already entered my social security number', function(done) {
    browser
      .click('label[for="hasSocialSecurity-Yes"]')
      .waitForSelector('.social-security-enter-form')
      .type('#part1', '123')
      .type('#part2', '45')
      .type('#part3', '1967')
      .click('button.forward')
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

  world.then('I will see my updated social security number', function(done) {
     browser
      .text()
      .then((text) => {
        assert(text.includes('xxx-xx-1969'), 'social security missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('The social security text matches the comp for unexpanded page', function(done){
    browser
      .waitForSelector('.social-security-option-form')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });

  world.when('I select Yes for social security', function(done){
    browser
      .click('label[for="hasSocialSecurity-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select No for social security', function(done){
    browser
      .click('label[for="hasSocialSecurity-No"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see text for no social security info', function(done){
    browser
      .waitForSelector('.social-security-no-info')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });

    world.then('I will see text for yes social security info', function(done){
      browser
        .text()
        .then(text => {
          assert(text.includes('By continuing with the application you agree to the below'));
        })
        .then(done)
        .catch(done);
    });

  world.then('I will see that I do not have a social security number', function(done){
    browser
    .text()
    .then((text) => {
      assert(!text.includes('123-45-1967'), 'social security present in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I click to edit my social security', function(done) {
    browser
      .click('.socialSecurity.button.summary')
      .then(done)
      .catch(done);
  });
};
