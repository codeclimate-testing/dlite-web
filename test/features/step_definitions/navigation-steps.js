'use strict';

module.exports = function(world) {
  let browser = world.browser;

  world.given('I go to the new online DL application', function(done) {
    browser
      .open(world.url('/'))
      .waitForSelector('.home-page')
      .then(done)
      .catch(done);
  });

  world.and('I go to the page with my summary', function(done){
    browser
      .click('a.summary')
      .waitForSelector('.summary-section')
      .then(done);
  });

  world.and('I return to the home page', function(done) {
    browser
      .click('a.home')
      .waitForSelector('.home-page')
      .then(done);
  });

  world.when('I visit the addresses page', function(done) {
    browser
      .click('a.addresses')
      .waitForSelector('.both-addresses')
      .then(done);
  });

  world.when('I visit /about-me/contact', function (done) {
    browser
      .click('a.contact-info')
      .waitForSelector('.contact-details-section')
      .then(done);
  });

  world.when('I visit about-me-names', function(done) {
    browser
      .click('a.names')
      .waitForSelector('.legal-name-form')
      .then(done);
  });

  world.and('I visit /about-me/appearance/eye', function(done){
    browser
      .click('appearance-eye')
      .waitForSelector('.eye-color-form')
      .then(done);
  });

  world.when('I visit /about-me/appearance/hair', function (done) {
    browser
      .click('appearance-hair')
      .waitForSelector('.hair-color-form')
      .then(done);
  });
};
