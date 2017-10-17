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

  world.and('I will not see any contribution selection in the summary', function(done) {
    browser
      .exists('a.summary')
      .then((exists) => { assert.ok(!exists, 'Voluntary contributions'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I select to voluntarily contribute', function(done){
    browser
      .click('label[for="$2 voluntary contribution to support and promote organ and tissue donation"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the contribution selection I chose is selected', function(done){
    browser
      .text('.button.selected')
      .then((eligibility) => { assert.equal(eligibility, '$2 voluntary contribution to support and promote organ and tissue donation'); })
      .then(() => { done(); })
      .catch(done);

  });

  world.then('I will see my contribution selection in the summary', function(done) {
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
      .then((exists) => { assert.ok(!exists, 'Donate Organs'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my organ selection', function(done){
    browser
      .click('a.organ')
      .click('label[for="Yes"]')
      .click('input[type="submit"]')
      .click('a.sections')
      .waitForSelector('.section-links')
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
      .click('label[for="No"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated organ selection in the summary', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('No'), 'Voluntary contribution not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see text for donate - Yes', function(done){
    browser
    .waitForSelector('.donate-organ-yes')
    .then(() => { done(); })
    .catch((err) => {
      throw err;
      done(err);
    });
  });

  world.then('I will see text for donate - No', function(done){
    browser
    .waitForSelector('.donate-organ-no')
    .then(() => { done(); })
    .catch((err) => {
      throw err;
      done(err);
    });
  });
};
