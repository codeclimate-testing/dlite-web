'use strict';

module.exports = function(world) {
  let browser = world.browser;

  world.given('I go to the new online DL application', function(done) {
    browser
      .goto(world.url('/'))
      .wait('.home-page')
      .then(done);
  });

  world.and('I go to the page with my summary', function(done){
    browser
      .click('a.summary')
      .wait('.summary-section')
      .then(done);
  });

  world.and('I return to the home page', function(done) {
    browser
      .click('a.home')
      .wait('.home-page')
      .then(done);
  });

  world.when('I visit the addresses page', function(done) {
    browser
      .click('a.addresses')
      .wait('.both-addresses')
      .then(done);
  });

  world.when('I visit /about-me/contact', function (done) {
    browser
      .click('a.contact-info')
      .wait('.contact-details-section')
      .then(done);
  });

  world.when('I visit about-me-names', function(done){
    browser
      .click('a.names')
      .wait('legal-name-form')
      .then(done);
  });

  world.and('I visit /about-me/appearance/eye', function(done){
    browser
      .click('appearance-eye')
      .wait('.eye-color-form')
      .then(done);
  });

  world.when('I visit /about-me/appearance/hair', function (done) {
    browser
      .click('appearance-hair')
      .wait('.hair-color-form')
      .then(done);
  });
};
