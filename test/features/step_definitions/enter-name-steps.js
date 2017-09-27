'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a field for first, middle and last name', function(done) {
    browser
      .exists('#firstName')
      .then((exists) => { assert.ok(exists, 'input for first name missing')})
      .exists('#middleName')
      .then((exists) => { assert.ok(exists, 'input for first middle missing')})
      .exists('#lastName')
      .then((exists) => { assert.ok(exists, 'input for first last missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I enter my first name', function(done) {
    browser
      .type('#firstName', 'FirstName1')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I enter my middle name', function(done) {
    browser
      .type('#middleName', 'MiddleName1')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I enter my last name', function(done) {
    browser
      .type('#lastName', 'LastName1')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my name on that summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('FirstName1'), 'first name missing from summary');
        assert(text.includes('MiddleName1'), 'middle name missing from summary');
        assert(text.includes('LastName1'), 'last name missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my name into the form', function(done) {
    browser
      .open(world.url('/'))
      .waitForSelector('.home-page')
      .click('a.legal-name')
      .waitForSelector('.legal-name-form')
      .type('#firstName', 'FirstName1')
      .type('#middleName', 'MiddleName1')
      .type('#lastName', 'LastName1')
      .click('input[type="submit"]')
      .click('a.home')
      .waitForSelector('.home-page')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the name I entered', function(done) {
    browser
      .value('#firstName')
      .then((value) => { assert.equal(value, 'FirstName1'); })
      .value('#middleName')
      .then((value) => { assert.equal(value, 'MiddleName1'); })
      .value('#lastName')
      .then((value) => { assert.equal(value, 'LastName1'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my first name', function(done) {
    browser
      .type('#firstName', 'FirstName2')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated name', function(done) {
    browser
      .text()
      .then((text) => { assert.ok(text.includes('FirstName2'), 'Updated name not on summary'); })
      .then(() => { done(); })
      .catch(done);
  });
};
