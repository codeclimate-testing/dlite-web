'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('I click yes to getting a real id on both', function(done) {
    browser
      .click('label[for="both-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I click yes to getting a real id on the ID', function(done) {
    browser
      .click('label[for="ID-Yes"]')
      .then(done)
      .catch(done);
  });

  world.and('I click yes to getting a real id on the DL', function(done) {
    browser
      .click('label[for="DL-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I click no to getting a real id', function(done) {
    browser
      .click('label[for="DL-No"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am getting a real id', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Real-ID CompliantYes'), 'Real ID missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am not getting a real id', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Real-ID CompliantNo'), 'Real ID missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I select ID to have my real id designation', function(done) {
      browser
        .click('label[for="realIdDesignation-ID"]')
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

  world.then('I will see two closed accordions for real ID', function(done) {
    browser
      .attribute('#real-id-info-accordion', 'class')
      .then((className) => {
        assert(className.includes('closed'), 'Accordion for real ID info is not collapsed');
      })
      .attribute('#real-id-requirements-accordion', 'class')
      .then((className) => {
        assert(className.includes('closed'), 'Accordion for real ID requirements is not collapsed');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('The title of each accordion for real ID will be visible', function(done) {
    browser
      .waitForSelector('#real-id-info')
      .waitForSelector('#real-id-requirements')
      .then((d) => { done(); })
      .catch(done);
  });

  world.when('I click in the title for real ID info accordion', function(done) {
    browser
      .click('#real-id-info')
      .then(() => { done(); })
      .catch((err) => { done(new Error(err)); });
  });

  world.then('The real ID info accordion will open to show its full content', function(done) {
    browser
      .attribute('#real-id-info-accordion', 'class')
      .then((className) => {
        assert(className.includes('open'), 'Accordion for real ID info did not open');
      })
      .then((d) => { done(); })
      .catch(done);
  });

  world.then('The real ID info accordion will close', function(done) {
    browser
      .attribute('#real-id-info-accordion', 'class')
      .then((className) => {
        assert(className.includes('closed'), 'Accordion for real ID info did not close');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click in the title for real ID requirements accordion', function(done) {
    browser
      .click('#real-id-requirements')
      .then(() => { done(); })
      .catch((err) => { done(new Error(err)); });
  });

  world.then('The real ID requirements accordion will open to show its full content', function(done) {
    browser
      .attribute('#real-id-requirements-accordion', 'class')
      .then((className) => {
        assert(className.includes('open'), 'Accordion for real ID requirements did not open');
      })
      .then((d) => { done(); })
      .catch(done);
  });

};
