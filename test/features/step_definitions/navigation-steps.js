'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.given('I go to the new online DL application', function(done) {
    browser
      .open(world.url('/'))
      .waitForSelector('.home-page')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I go to the page with my summary', function(done){
    browser
      .click('a.summary')
      .waitForSelector('.summary')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I return to the home page', function(done) {
    browser
      .click('a.home')
      .waitForSelector('.home-page')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I visit the addresses page', function(done) {
    browser
      .click('a.addresses')
      .waitForSelector('.both-addresses')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I visit /about-me/contact', function (done) {
    browser
      .click('a.contact-info')
      .waitForSelector('.contact-details-section')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I visit the legal name page', function(done) {
    browser
      .click('a.names')
      .waitForSelector('.legal-name-form')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I visit /about-me/appearance/eye', function(done){
    browser
      .click('a.appearance-eye')
      .waitForSelector('.eye-color-form')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I visit /about-me/appearance/hair', function (done) {
    browser
      .click('a.appearance-hair')
      .waitForSelector('.hair-color-form')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will be on the page for entering my date of birth', function(done) {
    browser
      .waitForSelector('.date-of-birth-form')
      .url()
      .then((url) => {
        assert.ok(url.match(/services\/about-me\/date-of-birth/), 'Not of the date-of-birth page');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
