'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.when('I select my sex', function(done) {
    browser
      .click('label[for="sexFemale"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select an eye color', function(done){
    browser
      .click('label[for="eyeColorBlue"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I select a hair color', function (done) {
    browser
      .click('label[for="hairColorAuburn"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my sex in the summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Female'), 'Sex not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my eye color in the summary', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Blue'), 'Eye color not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my hair color in the summary', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Auburn'), 'Hair color not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
