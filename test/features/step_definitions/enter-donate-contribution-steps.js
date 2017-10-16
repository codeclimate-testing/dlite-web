'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see my donate contribution selection in the summary', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Yes'), 'Yes not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.given('I have already entered my donate contribution selection', function(done){
    browser
    .click('a.donate-contribution')
    .click('label[for="Yes"]')
    .click('input[type="submit"]')
    .click('a.sections')
    .waitForSelector('.section-links')
    .then(() => { done(); })
    .catch(done);
  });

  world.and('I will see the donate contribution selection I chose is selected', function(done){
    browser
    .text('.button.selected')
    .then((eligibility) => { assert.equal(eligibility, 'Yes'); })
    .then(() => { done(); })
    .catch(done);
  });

  world.and('I change my donate contribution selection', function(done){
    browser
    .click('label[for="No"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see my updated donate contribution selection in the summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('No'), 'Voluntary contribution not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });
};
