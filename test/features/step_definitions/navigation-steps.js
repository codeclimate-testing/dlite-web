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
      .then(() => { done(); })
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
      .on('consoleMessage', function( msg ){
        console.log(msg);
      })
      .on('error', function( err ){
        console.log(err);
      })
      .open(world.url('/'))
      .waitForSelector('.legal-name-form')
      .click('.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I go to the page with my summary', function(done){
    navigateToPath('/apply/summary', '.summary', done);
  });

  world.and('I return to the home page', function(done) {
    navigateToPath('/apply/links', '.section-links', done);
  });

  world.when('I visit the addresses page', function(done) {
    navigateToPath('/apply/my-basics/address', '.home-address-form', done);
  });

  world.when('I visit the legal name page', function(done) {
    navigateToPath('/apply/my-basics/legal-name', '.legal-name-form', done);
  });

  world.when('I visit the date of birth page', function(done) {
    navigateToPath('/apply/my-basics/date-of-birth', '.date-of-birth-form', done);
  });

  world.when('I visit the what do you want to do today page', function(done) {
    navigateToPath('/apply/what-do-you-want-to-do-today', '.choose-card-action', done);
  });

  world.when('I visit the ID or DL selection page', function(done) {
    navigateToPath('/apply/select-id-dl', '.choose-card-form', done);
  });

  world.when('I visit the senior id page', function(done) {
    navigateToPath('/apply/senior-id', '.senior-id-form', done);
  });

  world.when('I visit the real id page', function(done) {
    navigateToPath('/apply/real-id', '.real-id-form', done);
  });

  world.when('I visit the reduced fee page', function(done) {
    navigateToPath('/apply/reduced-fee', '.reduced-fee-form', done);
  });

  world.when('I visit the get started page', function(done) {
    navigateToPath('/apply/get-started', '.intro-info', done);
  });

  world.when('I visit physical traits page', function(done) {
    navigateToPath('/apply/my-basics/physical-traits', '.physical-traits-form', done);
  });

  world.when('I visit the traits height and weight page', function(done) {
    navigateToPath('/apply/my-basics/traits-height-weight', '.traits-height-weight-form', done);
  });

  world.when('I visit the organ page', function(done) {
    navigateToPath('/apply/organ-donation', '.organ-form', done);
  });

  world.when('I visit the donate contribution page', function(done) {
    navigateToPath('/apply/about-me/donate-contribution', '.donate-contribution-form', done);
  });

  world.when('I visit the social security page', function(done) {
    navigateToPath('/apply/my-basics/social-security', '.social-security-option-form', done);
  });

  world.when('I visit the veteran services page', function(done){
    navigateToPath('/apply/my-history/veterans-service', '.veterans-questionnaire-form', done);
  });

  world.when('I visit voter citizen status page', function(done) {
    navigateToPath('/apply/voting-registration/citizenship', '.citizen-status-form', done);
  });

  world.when('I visit ballot by mail option page', function(done) {
    navigateToPath('/apply/voting-registration/vote-by-mail', '.ballot-by-mail-form', done);
  });

  world.when('I visit the voter eligibility requirements page', function(done) {
    navigateToPath('/apply/voting-registration/eligibility', '.eligibility-requirements-form', done);
  });

  world.when('I visit voter preferences intro page', function(done){
    navigateToPath('/apply/voting-registration/preferences', '.voter-preferences-intro', done);
  });

  world.when('I visit updated voter preferences intro page', function(done){
    navigateToPath('/apply/voting-registration/updated-preferences', '.updating-voter-preferences', done);
  });

  world.when('I visit voter registration complete page', function(done){
    navigateToPath('/apply/voting-registration/confirmation', '.voter-reg-complete', done);
  });

  world.when('I visit ballot language page', function(done) {
    navigateToPath('/apply/voting-registration/language', '.ballot-language-form', done);
  });

  world.when('I visit the political party choose page', function(done){
    navigateToPath('/apply/voting-registration/choose-party', '.choose-party', done);
  });

   world.when('I visit voter intro page', function (done) {
    navigateToPath('/apply/voting-registration/introduction', '.voter-intro-info', done);
  });

  world.and('I visit appointment preparation page', function(done) {
    navigateToPath('/apply/appointment-preparation', '.appointment-preparation', done);
  });

  world.when('I visit voter opt out page', function(done) {
    navigateToPath('/apply/voting-registration/opt-out', '.opt-out-form', done);
  });

  world.when('I visit the license issues page', function(done){
    navigateToPath('/apply/my-history/license-issues', '.license-issues-form', done);
  });

  world.when('I visit the page to choose if I ever had previous names', function(done) {
    navigateToPath('/apply/my-history/names', '.previous-names', done);
  });

  world.when('I visit the page to enter existing license and id', function(done) {
    navigateToPath('/apply/my-history/license-and-id', '.license-and-id-history-form', done);
  });

  world.when('I visit contact methods details page', function(done){
    navigateToPath('/apply/voting-registration/contact-methods', '.contact-methods-choice-form', done);
  });

  world.when('I visit the required documents page', function(done){
    navigateToPath('/apply/appointment-preparation/documents', '.required-documents', done);
  });

  world.when('I visit the medical history page', function(done) {
    navigateToPath('/apply/my-history/medical', '.medical-info', done);
  });

  world.then('I will be on the page for entering my date of birth', function(done) {
    assertOnPage('.date-of-birth-form', /apply\/my-basics\/date-of-birth/, done);
  });

  world.then('I will be on the what do you want to do today page', function(done) {
    assertOnPage('.choose-card-action', /apply\/what-do-you-want-to-do-today/, done);
  });

  world.then('I will be on the current card info page', function(done) {
    assertOnPage('.current-card-form', /apply\/current-card-info/, done);
  });

  world.then('I will be on the ID and DL selection page', function(done) {
    assertOnPage('.choose-card-form', /apply\/select-id-dl/, done);
  });

  world.then('I will be on the youth license notification page', function(done) {
    assertOnPage('.youth-license-notification', /apply\/youth-license-notification/, done);
  });

  world.then('I will be on the page for choosing real id', function(done) {
    assertOnPage('.real-id-form', /apply\/real-id/, done);
  });

  world.then('I will be on the reduced fee page', function(done) {
    assertOnPage('.reduced-fee-form', /apply\/reduced-fee/, done);
  });

  world.then('I will be on the page for entering my address', function(done) {
    assertOnPage('.home-address-form', /apply\/my-basics\/address/, done);
  });

  world.then('I will be on the page for entering my physical traits', function(done) {
    assertOnPage('.physical-traits-form', /my-basics\/physical-traits/, done);
  });

  world.then('I will be on the page for entering my height and weight', function(done) {
    assertOnPage('.traits-height-weight-form', /my-basics\/traits-height-weight/, done);
  });

  world.then('I will be on the page for organ selection', function(done) {
    assertOnPage('.organ-form', /organ-donation/, done);
  });

  world.then('I will be on the page for donate contribution', function(done) {
    assertOnPage('.donate-contribution-form', /about-me\/donate-contribution/, done);
  });

  world.then('I will be on the page for entering my social security', function(done) {
    assertOnPage('.social-security-option-form', /my-basics\/social-security/, done);
  });

  world.then('I will be on the page for veteran related services', function(done) {
    assertOnPage('.veterans-questionnaire-form', /my-history\/veterans-service/, done);
  });

  world.then('I will be on the page for voter citizen status entry', function(done) {
    assertOnPage('.citizen-status-form', /voting-registration\/citizenship/, done);
  });

  world.then('I will be on the page for ballot by mail', function(done) {
    assertOnPage('.ballot-by-mail-form', /voting-registration\/vote-by-mail/, done);
  });

  world.then('I will be on the eligibility page', function(done) {
    assertOnPage('.eligibility-requirements-form', /voting-registration\/eligibility/, done);
  });

  world.then('I will be taken to contact methods page', function(done){
    assertOnPage('.contact-methods-choice-form', /voting-registration\/contact-methods/, done);
  });

  world.then('I will be taken to ballot language page', function(done){
    assertOnPage('.ballot-language-form', /voting-registration\/language/, done);
  });

  world.then('I will be on the page for entering voter opt-out', function(done) {
    assertOnPage('.opt-out-form', /voting-registration\/opt-out/, done);
  });

  world.then('I will be on the required documents page', function(done) {
    assertOnPage('.required-documents', /apply\/appointment-preparation\/documents/, done);
  });

  world.then('I will be on the page to enter existing license and id', function(done) {
    assertOnPage('.license-and-id-history-form', /my-history\/license-and-id/, done);
  });

  world.then('I will be on the page with my summary', function(done) {
    assertOnPage('.summary', /apply\/summary/, done);
  });

  world.then('I will be on the page for appointment preparation', function(done) {
    assertOnPage('.appointment-preparation', /apply\/appointment-preparation/, done);
  });

  world.then('I will be taken to the license issues page', function(done){
    assertOnPage('.license-issues-form', /my-history\/license-issues/, done);
  });

  world.then('I will be taken to political party page', function(done){
    assertOnPage('.political-party-preference', /voter\/political-party/, done);
  });

  world.then('I will be taken to the political party choose page', function(done){
    assertOnPage('.choose-party', /voting-registration\/choose-party/, done);
  });

  world.then('I will be taken to the success visit page', function(done){
    assertOnPage('.success-visit-info', /about-me\/success-visit/, done);
  });

  world.then('I will be taken to voter preferences info page', function(done) {
    assertOnPage('.voter-preferences-intro', /voting-registration\/preferences/, done);
  });

  world.then('I will be taken to updated voter preferences info page', function(done) {
    assertOnPage('.updating-voter-preferences', /voting-registration\/preferences-updated/, done);
  });

  world.then('I will be taken to voter intro info page', function(done) {
    assertOnPage('.voter-intro-info', /voting-registration\/introduction/, done);
  });

  world.then('I will be taken to voter registration complete page', function(done) {
    assertOnPage('.voter-reg-complete', /voting-registration\/confirmation/, done);
  });

  world.then('I will be taken to the names page', function(done) {
    assertOnPage('.legal-name-form', /apply\/my-basics\/legal-name/, done);
  });

  world.then('I will be taken to previous names page', function(done) {
    assertOnPage('.previous-names', /my-history\/names/, done);
  });

  world.then('I will be taken to organ donation page', function(done) {
    assertOnPage('.donate-contribution-form', /organ-donation/, done);
  });

  world.then('I will be taken to date of birth page', function(done) {
    assertOnPage('.date-of-birth-form', /my-basics\/date-of-birth/, done);
  });

  world.then('I will be on the get started page', function(done) {
    assertOnPage('.intro-info', /get-started/, done);
  });

  world.then('I will be taken to medical history page', function(done){
    assertOnPage('.medical-info', /my-history\/medical/, done);
  });

  world.then('I will be on the senior id page', function(done) {
    assertOnPage('.senior-id-form', /senior-id/, done);
  });
};
