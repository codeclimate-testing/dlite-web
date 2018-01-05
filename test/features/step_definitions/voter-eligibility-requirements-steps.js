'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see buttons for Yes, No and Skip Section', function(done) {
    browser
    .html('label[for="eligibilityRequirements-Yes"]')
    .then((button) => { assert.ok(button, 'Selector for Yes missing')})
    .html('label[for="eligibilityRequirements-No"]')
    .then((button) => { assert.ok(button, 'Selector for No missing')})
    .html('label[for="eligibilityRequirements-Skip"]')
    .then((button) => { assert.ok(button, 'Selector for Skip Section missing')})
    .then(() => { done();})
    .catch(done);
  });

  world.when('I select voter registration Yes', function(done){
    browser
    .click('label[for="eligibilityRequirements-Yes"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select voter registration No', function(done){
    browser
    .click('label[for="eligibilityRequirements-No"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select voter registration Skip Section', function(done){
    browser
    .click('label[for="eligibilityRequirements-Skip"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see that I do qualify to register to vote', function(done){
  browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Yes'), 'Yes not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
});

  world.then('I will see that I do not qualify to register to vote', function(done){
  browser
    .text()
    .then((text) => {
      assert.ok(text.includes('eligibilityRequirements-No'), 'No not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
});

  world.then('I will see No Answer for if I qualify to register to vote', function(done){
  browser
    .text()
    .then((text) => {
      assert.ok(text.includes('No Answer'), 'No Answer not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
});

world.given('I have already entered my voter eligibility requirement status into the form', function(done){
  browser
    .click('a.eligibility-requirements')
    .click('label[for="eligibilityRequirements-Yes"]')
    .click('button.forward')
    .click('a.sections')
    .waitForSelector('.section-links')
    .then(() => { done(); })
    .catch(done);
});

world.and('I will see the eligibility requirement status I entered', function(done){
  browser
    .text('.selected')
    .then((eligibility) => { assert.equal(eligibility, 'Yes'); })
    .then(() => { done(); })
    .catch(done);
});

world.and('I change my eligibility requirement', function(done){
  browser
    .click('label[for="eligibilityRequirements-No"]')
    .then(() => { done(); })
    .catch(done);
});

world.then('I will see my updated eligibility requirement status', function(done){
  browser
    .text()
    .then((text) => {
      assert.ok(text.includes('No'), 'No not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
});





};
