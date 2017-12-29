'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see my organ selection in the summary', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Donate Organs'), 'Donate organ not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see my contribution selection in the summary', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Voluntary Contribution'), 'Voluntary contribution not saved in summary');
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

  world.and('I will not see any organ selection in the summary', function(done) {
    browser
      .exists('a.summary')
      .then((exists) => { assert.ok(!exists, 'Donate Organs'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I choose to donate', function(done) {
    browser
      .click('label[for="donate-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I choose to contribute', function(done) {
    browser
      .click('label[for="contribute-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my organ selection', function(done){
    browser
      .click('a.organ-donation')
      .click('label[for="donate-Yes"]')
      .click('label[for="contribute-Yes"]')
      .click('button.forward')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my organ selection', function(done){
    browser
      .click('label[for="donate-No"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my contribution selection', function(done){
    browser
      .click('label[for="contribute-No"]')
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
    });
  });

  world.then('I will see text for donate - No', function(done){
    browser
    .waitForSelector('.donate-organ-no')
    .then(() => { done(); })
    .catch((err) => {
      throw err;
    });
  });

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
    .click('label[for="donate-Yes"]')
    .click('button.forward')
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
    .click('label[for="donate-No"]')
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

  world.then('I will see text for donate contribution - Yes', function(done){
    browser
    .waitForSelector('.donate-contribution-yes')
    .then(() => { done(); })
    .catch((err) => {
      throw err;
    });
  });

  world.then('I will see organ donation question', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('Do you wish to be an organ or tissue donor?'), 'Organ donation question missing');
    })
    .then(() => { done(); })
    .catch(done);
  });

  
};
