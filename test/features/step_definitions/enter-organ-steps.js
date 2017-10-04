'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see my organ selection in the summary', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Yes'), 'Yes not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.given('I have already entered my organ selection', function(done){
    browser
      .click('a.organ')
      .click('label[for="Yes"]')
      .click('input[type="submit"]')
      .click('a.home')
      .waitForSelector('.home-page')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the organ selection I chose is selected', function(done){
    browser
      .text('.button.selected')
      .then((eligibility) => { assert.equal(eligibility, 'Yes'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my organ selection', function(done){
    browser
      .click('label[for="$2 voluntary contribution to support and promote organ and tissue donation"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated organ selection in the summary', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('$2 voluntary contribution to support and promote organ and tissue donation'), 'Voluntary contribution not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will not see any organ selection in the summary', function(done) {
    browser
      .exists('a.summary')
      .then((exists) => { assert.ok(!exists, 'Yes'); })
      .then((exists) => { assert.ok(!exists, '$2 voluntary contribution to support and promote organ and tissue donation'); })
      .then(() => { done(); })
      .catch(done);
  });
};
