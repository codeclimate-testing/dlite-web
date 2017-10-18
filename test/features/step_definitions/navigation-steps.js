'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  function navigateToPath(path, pageSelector, done) {
    browser
      .evaluate(function(path) {
        window.__reactHistory.push((path));
      }, path)
      .waitForSelector(pageSelector)
      .then((d) => { done(); })
      .catch(done);
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
      .waitForSelector('.intro-info')
      .click('.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I go to the page with my summary', function(done){
    navigateToPath('/apply/summary', '.summary', done);
  });

  world.and('I return to the home page', function(done) {
    navigateToPath('/apply/links', '.section-links', done);
  });

  world.when('I visit the home addresses page', function(done) {
    navigateToPath('/apply/about-me/home-address', '.home-address-form', done);
  });

  world.when('I visit the mailing addresses page', function(done) {
    navigateToPath('/apply/about-me/mailing-address', '.mailing-address-form', done);
  });

  world.when('I visit voter contact details page', function (done) {
    navigateToPath('/apply/about-me/voter/email-phone', '.contact-details-form', done);
  });

  world.when('I visit the legal name page', function(done) {
    navigateToPath('/apply/about-me/legal-name', '.legal-name-form', done);
  });

  world.and('I visit eye color page', function(done) {
    navigateToPath('/apply/about-me/appearance/eye', '.eye-color-form', done);
  });

  world.when('I visit hair color page', function (done) {
    navigateToPath('/apply/about-me/appearance/hair', '.hair-color-form', done);
  });

  world.when('I visit the date of birth page', function(done) {
    navigateToPath('/apply/about-me/date-of-birth', '.date-of-birth-form', done);
  });

  world.when('I visit the sex identification page', function(done) {
    navigateToPath('/apply/about-me/sex', '.sex-form', done);
  });

  world.when('I visit the height page', function(done) {
    navigateToPath('/apply/about-me/height', '.height-form', done);
  });

  world.when('I visit the weight page', function(done) {
    navigateToPath('/apply/about-me/weight', '.weight-form', done);
  });

  world.when('I visit the organ page', function(done) {
    navigateToPath('/apply/about-me/organ', '.organ-form', done);
  });

  world.when('I visit the donate contribution page', function(done) {
    navigateToPath('/apply/about-me/donate-contribution', '.donate-contribution-form', done);
  });

  world.when('I visit the social security page', function(done) {
    navigateToPath('/apply/about-me/social-security', '.social-security-form', done);
  });

  world.when('I visit voter citizen status page', function(done) {
    navigateToPath('/apply/about-me/voter/am-citizen', '.citizen-status-form', done);
  });

  world.when('I visit ballot by mail option page', function(done) {
    navigateToPath('/apply/about-me/voter/ballot-by-mail', '.ballot-by-mail-form', done);
  });

  world.when('I visit the voter eligibility requirements page', function(done) {
    navigateToPath('/apply/about-me/voter/eligibility-requirements', '.eligibility-requirements-form', done);
  });

  world.when('I visit voter preferences intro page', function(done){
    navigateToPath('/apply/about-me/voter/voter-preferences-intro', '.voter-preferences-intro', done);
  });

  world.when('I visit voter preferences intro preregistered page', function(done){
    navigateToPath('/apply/about-me/voter/voter-preferences-intro-preregistered', '.voter-preferences-intro-preregistered', done);
  });

  world.when('I visit voter registration complete page', function(done){
    navigateToPath('/apply/about-me/voter/voter-reg-complete', '.voter-reg-complete', done);
  });

  world.when('I visit contact choice page', function(done) {
    navigateToPath('/apply/about-me/voter/contact-choice', '.contact-choice-form', done);
  });

  world.when('I visit ballot language page', function(done) {
    navigateToPath('/apply/about-me/voter/ballot-language', '.ballot-language-form', done);
  });

  world.when('I visit the political party choose page', function(done){
    navigateToPath('/apply/about-me/voter/political-party-choose', '.political-party-choose', done);
  });

  world.when('I visit the political party preference page', function(done){
    navigateToPath('/apply/about-me/voter/political-party', '.political-party-preference-form', done);
  });

  world.when('I visit app intro page', function(done){
    navigateToPath('/apply/what-do-you-want-to-do-today', '.intro-info', done);
  });

   world.when('I visit voter intro page', function (done) {
    navigateToPath('/apply/voter/voter-introduction', '.voter-intro-info', done);
  });

  world.and('I visit success visit page', function(done) {
    navigateToPath('/apply/about-me/success-visit', '.success-visit-info', done);
  });

  world.when('I visit voter opt out page', function(done) {
    navigateToPath('/apply/about-me/voter/opt-out', '.opt-out-form', done);
  });

  world.when('I visit the page to choose if license was suspended', function(done){
    navigateToPath('/apply/about-me/revoked-suspended', '.is-suspended-license-form', done);
  });

  world.when('I visit the page to enter my suspended license info', function(done) {
    navigateToPath('/apply/about-me/enter-revoked-suspended', '.suspended-license-form', done);
  });

  world.when('I visit the page to enter my existing DL/ID license info', function(done) {
    navigateToPath('/apply/about-me/dl-id-number', '.existing-dl-id-number-form', done);
  });

  world.when('I visit the page to enter my previously used names', function(done) {
    navigateToPath('/apply/about-me/enter-previous-names', '.previous-names-form', done);
  });

  world.then('I will be on the page for entering my eye color', function(done) {
    assertOnPage('.eye-color-form', /about-me\/appearance\/eye/, done);
  });

  world.then('I will be on the page for entering my date of birth', function(done) {
    assertOnPage('.date-of-birth-form', /apply\/about-me\/date-of-birth/, done);
  });

  world.then('I will be on the page for entering my home address', function(done) {
    assertOnPage('.home-address-form', /apply\/about-me\/home-address/, done);
  });

  world.then('I will be on the page for entering my mailing address', function(done) {
    assertOnPage('.mailing-address-form', /apply\/about-me\/mailing-address/, done);
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

  world.then('I will be on the page for organ selection', function(done) {
    assertOnPage('.organ-form', /about-me\/organ/, done);
  });

  world.then('I will be on the page for donate contribution', function(done) {
    assertOnPage('.donate-contribution-form', /about-me\/donate-contribution/, done);
  });

  world.then('I will be on the page for entering my social security', function(done) {
    assertOnPage('.social-security-form', /about-me\/social-security/, done);
  });

  world.then('I will be on the page for voter citizen status entry', function(done) {
    assertOnPage('.citizen-status-form', /about-me\/voter\/am-citizen/, done);
  });

  world.then('I will be on the page for ballot by mail', function(done) {
    assertOnPage('.ballot-by-mail-form', /about-me\/voter\/ballot-by-mail/, done);
  });

  world.then('I will be taken to voter eligibility requirements page', function(done){
    assertOnPage('.eligibility-requirements-form', /about-me\/voter\/eligibility-requirements/, done);
  });

  world.then('I will be taken to contact choice page', function(done){
    assertOnPage('.contact-choice-form', /about-me\/voter\/contact-choice/, done);
  });

  world.then('I will be taken to ballot language page', function(done){
    assertOnPage('.ballot-language-form', /about-me\/voter\/ballot-language/, done);
  });

  world.then('I will be on the page for entering voter opt-out', function(done) {
    assertOnPage('.opt-out-form', /about-me\/voter\/opt-out/, done);
  });

  world.when('I will be on the page for choosing my contact preference', function(done) {
    assertOnPage('.contact-choice', /about-me\/voter\/contact-choice/, done);
  });

  world.then('I will be on the page with my summary', function(done) {
    assertOnPage('.summary', /apply\/summary/, done);
  });

  world.then('I will be taken to political party page', function(done){
    assertOnPage('.political-party-preference-form', /about-me\/voter\/political-party/, done);
  });

  world.then('I will be taken to the political party choose page', function(done){
    assertOnPage('.political-party-choose', /about-me\/voter\/political-party-choose/, done);
  });

  world.then('I will be taken to the success visit page', function(done){
    assertOnPage('.success-visit-info', /about-me\/success-visit/, done);
  });

  world.then('I will be taken to voter preferences info page', function(done) {
    assertOnPage('.voter-preferences-intro', /voter\/voter-preferences-intro/, done);
  });

  world.then('I will be taken to voter intro info page', function(done) {
    assertOnPage('.voter-intro-info', /voter\/voter-introduction/, done);
  });

  world.then('I will be taken to voter preferences preregistered info page', function(done) {
    assertOnPage('.voter-preferences-intro-preregistered', /about-me\/voter\/voter-preferences-intro-preregistered/, done);
  });

  world.then('I will be taken to voter registration complete page', function(done) {
    assertOnPage('.voter-reg-complete', /about-me\/voter\/voter-reg-complete/, done);
  });

  world.then('I will be taken to email phone page', function(done) {
    assertOnPage('.contact-details-form', /about-me\/voter\/email-phone/, done);
  });

  world.then('I will be taken to the names page', function(done) {
    assertOnPage('.legal-name-form', /about-me\/legal-name/, done);
  });

  world.then('I will be taken to revoke or suspended license page', function(done){
    assertOnPage('.is-suspended-license-form', /apply\/about-me\/revoked-suspended/, done);
  });

  world.then('I will be taken to suspended license info page', function(done){
    assertOnPage('.suspended-license-form', /about-me\/enter-revoked-suspended/, done);
  });

  world.then('I will be taken to previous names page', function(done) {
    assertOnPage('.previous-name-form', /about-me\/previous-names/, done);
  });
};
