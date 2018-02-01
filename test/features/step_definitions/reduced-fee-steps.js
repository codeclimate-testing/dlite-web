'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.and('I select No to getting a reduced fee', function(done) {
    browser
      .click('label[for="ID-No"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I select Yes to getting a reduced fee', function(done) {
    browser
      .click('label[for="ID-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select No to having the correct forms', function(done) {
    browser
      .click('label[for="form-No"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am not opting for a reduced fee', function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('Reduced FeeNo'))
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am opting for a reduced fee and my answer about not having documents', function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('Reduced Fee: Yes') && text.includes('Correct Forms for Reduced Fee: No'))
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see an information note under the reduced fee question saying: "This only applies to your ID card."', function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('This only applies to your ID Card'))
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see a form asking if I have the right documents', function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('Do you have the right form?'))
      })
      .then(() => { done(); })
      .catch(done);
  });
};
