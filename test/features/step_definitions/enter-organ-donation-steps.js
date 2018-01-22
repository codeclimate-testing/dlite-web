'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see my organ selection in the summary', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Be an organ donorYes'), 'Donate organ not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.and('I will not see any organ selection in the summary', function(done) {
    browser
      .exists('a.summary')
      .then((exists) => { assert.ok(!exists, 'Be an organ donorYes'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I choose to donate my organs', function(done) {
    browser
      .click('label[for="donateOrgan-Yes"]')
      .click('label[for="donateMoney-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I choose to contribute', function(done) {
    browser
      .click('label[for="donateMoney-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my organ selection', function(done){
    browser
      .click('a.organ-donation')
      .click('label[for="donateOrgan-Yes"]')
      .click('label[for="donateMoney-Yes"]')
      .click('button.forward')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my organ selection', function(done){
    browser
      .click('label[for="donateOrgan-No"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my contribution selection', function(done){
    browser
      .click('label[for="donateMoney-No"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see text for donate - Yes', function(done){
    browser
    .waitForSelector('.donate-organ-yes-info')
    .then(() => { done(); })
    .catch((err) => {
      throw err;
    });
  });

  world.then('I will see text for donate - No', function(done){
    browser
    .waitForSelector('.donate-organ-no-info')
    .then(() => { done(); })
    .catch((err) => {
      throw err;
    });
  });

  world.then('I will see my donate contribution selection in the summary', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Donate $2Yes'), 'Yes not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.given('I have already entered my donate contribution selection', function(done){
    browser
    .click('a.donate-contribution')
    .click('label[for="donateOrgan-Yes"]')
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
    .click('label[for="donateOrgan-No"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see my updated donate contribution selection in the summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Donate$2No'), 'Voluntary contribution not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see text for donate contribution - Yes', function(done){
    browser
    .waitForSelector('.donate-money-yes-info')
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
