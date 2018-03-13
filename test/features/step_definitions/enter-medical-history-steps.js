'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('I enter my medical conditions into the textarea', function(done) {
    browser
    .type('#medicalInfo', 'conditions')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select Yes to having reportable medical history', function(done){
    browser
    .click('label[for="hasMedicalCondition-Yes"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select No to having reportable medical history', function(done){
    browser
    .click('label[for="hasMedicalCondition-No"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see Yes for having reportable medical history', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Yes'), 'Medical conditions not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see No for having reportable medical history', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Medical conditionsNone'), 'Medical conditions not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I see the page expand to have a form for entering my conditions', function(done) {
    browser
    .text()
    .then((text) => {
      assert(text.includes('Please explain below'), 'Medical conditions text area did not expand');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I click to edit my medical history', function(done) {
    browser
      .click('.medicalHistory.button.summary')
      .then(done)
      .catch(done);
  });
};
