'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see Yes in my citizenship selection', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('US Citizen: Yes'), 'Citizen status ad Yes not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see No in my citizenship selection', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('US Citizen: No'), 'Citizen status as No not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see No Answer in my citizenship selection', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('US Citizen: No Answer'), 'Citizen status as No Answer not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.given('I have already entered my US citizenship status into the form', function(done){
    browser
    .click('a.citizen-status')
    .waitForSelector('.citizen-status-form')
    .click('label[for="Yes"]')
    .click('input[type="submit"]')
    .click('a.home')
    .waitForSelector('.home-page')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see the US citizenship status I entered', function(done){
    browser
    .text('.button.selected')
    .then((value) => { assert.equal(value, 'Yes'); })
    .then(() => { done(); })
    .catch(done);
  });

  world.and('I change my US citizenship status', function(done){
    browser
    .click('label[for="No"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see my updated US citizenship status', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('US Citizen: No'), 'Citizen status as No not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

};
