'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  function clickAndWaitForPage(linkSelector, pageSelector, done) {
    browser
      .click(linkSelector)
      .waitForSelector(pageSelector)
      .then(() => { done(); })
      .catch((err) => {
        throw err;
        done(err);
      });
  }

  function assertOnPage(pageSelector, pageRegex, done) {
    browser
      .waitForSelector(pageSelector)
      .url()
      .then((url) => {
        assert.ok(url.match(pageRegex), `Not on page with selector: ${pageSelector}`);
      })
      .then(() => { done(); })
      .catch(done);
  }

  world.given('I go to the new online DL application', function(done) {
    browser
      .open(world.url('/'))
      .waitForSelector('.home-page')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I go to the page with my summary', function(done){
    clickAndWaitForPage('a.summary', '.summary', done);
  });

  world.and('I return to the home page', function(done) {
    clickAndWaitForPage('a.home', '.home-page', done);
  });

  world.when('I visit the home addresses page', function(done) {
    clickAndWaitForPage('a.home-address', '.home-address-form', done);
  });

  world.when('I visit the mailing addresses page', function(done) {
    clickAndWaitForPage('a.mailing-address', '.mailing-address-form', done);
  });

  world.when('I visit /about-me/contact', function (done) {
    clickAndWaitForPage('a.contact-info', '.contact-details-section', done);
  });

  world.when('I visit the legal name page', function(done) {
    clickAndWaitForPage('a.legal-name', '.legal-name-form', done);
  });

  world.and('I visit eye color page', function(done) {
    clickAndWaitForPage('a.eye-color', '.eye-color-form', done);
  });

  world.when('I visit hair color page', function (done) {
    clickAndWaitForPage('a.hair-color', '.hair-color-form', done);
  });

  world.when('I visit the date of birth page', function(done) {
    clickAndWaitForPage('a.date-of-birth', '.date-of-birth-form', done);
  });

  world.when('I visit the sex identification page', function(done) {
    clickAndWaitForPage('a.sex', '.sex-form', done);
  });

  world.when('I visit the height page', function(done) {
    clickAndWaitForPage('a.height', '.height-form', done);
  });

  world.when('I visit the weight page', function(done) {
    clickAndWaitForPage('a.weight', '.weight-form', done);
  });

  world.when('I visit the social security page', function(done) {
    clickAndWaitForPage('a.social-security', '.social-security-form', done);
  });

  world.when('I visit voter citizen status page', function(done) {
    clickAndWaitForPage('a.citizen-status', '.citizen-status-form', done);
  });

  world.then('I will be on the page for entering my eye color', function(done) {
    assertOnPage('.eye-color-form', /about-me\/appearance\/eye/, done);
  });

  world.then('I will be on the page for entering my date of birth', function(done) {
    assertOnPage('.date-of-birth-form', /services\/about-me\/date-of-birth/, done);
  });

  world.then('I will be on the page for entering my home address', function(done) {
    assertOnPage('.home-address-form', /services\/about-me\/home-address/, done);
  });

  world.then('I will be on the page for entering my mailing address', function(done) {
    assertOnPage('.mailing-address-form', /services\/about-me\/mailing-address/, done);
  });

  world.then('I will be on the page for entering my sex identification', function(done) {
    assertOnPage('.sex-form', /about-me\/sex/, done);
  });

  world.then('I will be on the page for entering my hair color', function(done) {
    assertOnPage('.hair-color-form', /about-me\/appearance\/hair/, done);
  });

  world.then('I will be on the page for entering my height', function(done) {
    assertOnPage('.height-form', /about-me\/height/, done);
  });

  world.then('I will be on the page for entering my weight', function(done) {
    assertOnPage('.weight-form', /about-me\/weight/, done);
  });

  world.then('I will be on the page for entering my social security', function(done) {
    assertOnPage('.social-security-form', /about-me\/social-security/, done);
  });

  world.then('I will be on the page for voter citizen status entry', function(done) {
    assertOnPage('.citizen-status-form', /about-me\/voter\/am-citizen/, done);
  });

  world.then('I will be taken to voter eligibility requirements page', function(done){
    assertOnPage('.eligibility-requirements-form', /about-me\/voter\/eligibility-requirements/, done);
  });

};
