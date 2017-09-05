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
};
