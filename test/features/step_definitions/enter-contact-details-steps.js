'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see a field for email', function (done) {
    browser
      .exists('#emailAddress')
      .then((input) => {
        assert.ok(input, 'email field exists');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I enter email', function (done) {
    browser
      .type('#emailAddress', 'sample@example.com')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my email on that summary', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('sample@example.com'), 'email not found on summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my email into the form', function (done) {
    browser
      .type('#emailAddress', 'sample@example.com')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the email I entered', function (done) {
    browser
      .value('#emailAddress')
      .then((value) => { assert.equal(value, 'sample@example.com'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my email', function (done) {
    browser
      .type('#emailAddress', 'example@sample.com')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated email', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('example@sample.com'), 'email not found on summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

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

  world.then('I will see my phone number on that summary', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('(111) 000-8888'));
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my phone number into the form', function (done) {
    browser
      .click('a.contact-details')
      .type('#phoneNumber', '(111) 000-8888')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the phone number I entered', function (done) {
    browser
      .value('#phoneNumber')
      .then((value) => { assert.equal(value, '(111) 000-8888') })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my phone number', function (done) {
    browser
      .type('#phoneNumber', '(999) 000-1111')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated phone number', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('(999) 000-1111'), 'Updated phone on the summary not present');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
