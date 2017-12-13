'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('I click yes to getting a real id', function(done) {
      browser
        .click('label[for="getRealIDYes"]')
        .then(() => { done(); })
        .catch(done);
  });

  world.and('I click no to getting a real id', function(done) {
      browser
        .click('label[for="getRealIDNo"]')
        .then(() => { done(); })
        .catch(done)
  });

  world.then('I will see that I am getting a real id', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Real ID: Yes'), 'Real ID missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am not getting a real id', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Real ID: No'), 'Real ID missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I select ID to have my real id designation', function(done) {
      browser
        .click('label[for="realIdDesignationID"]')
        .then(() => { done(); })
        .catch(done);
  });

  world.then('I will see that I have designated my ID to be my real ID', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Real ID Designation: ID'), 'Real ID has not been designated');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see two collapsed FAQ drawers', function(done) {
    browser
      .exists('.faq-fcc-info-body')
      .then((exists) => { assert.ok(!exists, 'FAQ drawer for FCC info not collapsed'); })
      .exists('.faq-fcc-docs-requirement-body')
      .then((exists) => { assert.ok(!exists, 'FAQ drawer for FCC doc requirements not collapsed'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('The title of each FAQ drawers will be visible', function(done) {
    browser
      .waitForSelector('#FCCInfo')
      .waitForSelector('#FCCRequirements')
      .then((d) => { done(); })
      .catch(done);
  });

  world.when('I click in the title FOR FCC info FAQ drawer', function(done) {
    browser
      .click('#FCCInfo')
      .then(() => { done(); })
      .catch((err) => { done(new Error(err)); });
  });

  world.then('The FCC info FAQ drawer will open to show its full content', function(done) {
    browser
      .waitForSelector('.faq-fcc-info-body')
      .then((d) => { done(); })
      .catch(done);
  });

  world.when('I click in the title FOR FCC required documents FAQ drawer', function(done) {
    browser
      .click('#FCCRequirements')
      .then(() => { done(); })
      .catch((err) => { done(new Error(err)); });
  });

  world.then('The FCC required documents FAQ drawer will open to show its full content', function(done) {
    browser
      .waitForSelector('.faq-fcc-docs-requirement-body')
      .then((d) => { done(); })
      .catch(done);
  });

  world.then('The FCC info FAQ drawer will close', function(done) {
    browser
      .exists('.faq-fcc-info-body')
      .then((exists) => { assert.ok(!exists, 'FAQ drawer for FCC info not closing'); })
      .then(() => { done(); })
      .catch(done);
  });

}
