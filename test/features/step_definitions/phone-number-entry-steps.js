'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see a field for my phone number', function (done) {
    browser
      .exists('#phoneNumber')
      .then((exists) => { assert.ok(exists, 'Phone number input not present'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I enter my phone number', function (done) {
    browser
      .type('#phoneNumber', '(111) 000-8888')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my phone on that summary', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('(111) 000-8888'));
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my phone into the form', function (done) {
    browser
      .click('a.contact-info')
      .type('#phoneNumber', '(111) 000-8888')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the phone I entered', function (done) {
    browser
      .value('#phoneNumber')
      .then((value) => { assert.equal(value, '(111) 000-8888') })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my phone number', function (done) {
    browser
      .type('#phoneNumber', '(999) 000-1111')
      .click('input[type="submit"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated phone', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('(999) 000-1111'), 'Updated phone on the summary not present');
      })
      .then(() => { done(); })
      .catch(done);
  });

};
