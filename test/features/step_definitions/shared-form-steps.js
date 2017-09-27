'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.and('I click to submit', function(done) {
    browser
      .click('input[type="submit"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see a button to submit', function (done) {
    browser
      .exists('input[type="submit"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that the Continue button is disabled', function(done) {
    browser
      .exists('input[type="submit"][disabled]')
      .then((input) => {
        assert.ok(input, 'Button not disabled');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that the Continue button is no longer disabled', function(done) {
     browser
      .exists('input[type="submit"][disabled]')
      .then((input) => {
        assert.ok(!input, 'Button is still disabled');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I see two buttons labelled Yes and No', function(done) {
    browser
    .html('label[for="Yes"]')
    .then((button) => { assert.ok(button, 'Selector for Yes missing')})
    .html('label[for="No"]')
    .then((button) => { assert.ok(button, 'Selector for No missing')})
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I see three buttons for Yes and No and Skip Section', function(done) {
    browser
    .html('label[for="Yes"]')
    .then((button) => { assert.ok(button, 'Selector for Yes missing')})
    .html('label[for="No"]')
    .then((button) => { assert.ok(button, 'Selector for No missing')})
    .html('label[for="Skip Section"]')
    .then((button) => { assert.ok(button, 'Selector for Skip Section missing')})
    .then(() => { done(); })
    .catch(done);
  });


  world.when('I select Yes', function(done){
    browser
    .click('label[for="Yes"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select No', function(done){
    browser
    .click('label[for="No"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select Skip Section', function(done){
    browser
    .click('label[for="Skip Section"]')
    .then(() => { done(); })
    .catch(done);
  });

};
