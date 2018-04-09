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
  };


  /* IDDL NavigateToPath */
  world.when('I go to the page with my summary', function(done){
    navigateToPath('/apply/id-and-license/summary', '.summary', done);
  });
  world.when('I go to the choose language page', function(done) {
    navigateToPath('/apply/choose-language/', '.choose-language-form' , done);
  });

  world.when('I go to the IDDL sign-in page', function(done) {
    navigateToPath('/apply/id-and-license/sign-in', '.id-me', done);
  });

  world.when('I go to the logged in page', function(done) {
    navigateToPath('/apply/logged-in/3f', '.legal-name-form', done);
  });

  world.when('I visit the page to choose application language', function(done) {
    navigateToPath('/apply/choose-language', '.choose-language-form', done);
  });

  world.when('I visit the addresses page', function(done) {
    navigateToPath('/apply/id-and-license/my-basics/address', '.home-address-form', done);
  });

  world.when('I visit the current card info page', function(done) {
    navigateToPath('id-and-license/current-card-information', '.current-card-form', done);
  });

  world.when('I visit the legal name page', function(done) {
    navigateToPath('/apply/id-and-license/my-basics/legal-name', '.legal-name-form', done);
  });

  world.when('I visit the date of birth page', function(done) {
    navigateToPath('/apply/id-and-license/my-basics/date-of-birth', '.date-of-birth-form', done);
  });

  world.when('I visit the what do you want to do today page', function(done) {
    navigateToPath('/apply/id-and-license/what-do-you-want-to-do-today', '.choose-card-action', done);
  });

  world.when('I visit the ID or DL selection page', function(done) {
    navigateToPath('/apply/id-and-license/select-id-dl', '.choose-card-form', done);
  });

  world.when('I visit the senior id page', function(done) {
    navigateToPath('/apply/id-and-license/senior-id', '.senior-id-form', done);
  });

  world.when('I visit the real id page', function(done) {
    navigateToPath('/apply/id-and-license/real-id', '.real-id-form', done);
  });

  world.when('I visit the reduced fee page', function(done) {
    navigateToPath('/apply/id-and-license/reduced-fee', '.reduced-fee-form', done);
  });

  world.when('I visit physical traits page', function(done) {
    navigateToPath('/apply/id-and-license/my-basics/physical-traits', '.physical-traits-form', done);
  });

  world.when('I visit the traits height and weight page', function(done) {
    navigateToPath('/apply/id-and-license/my-basics/traits-height-weight', '.traits-height-weight-form', done);
  });

  world.when('I visit the organ donation page', function(done) {
    navigateToPath('/apply/id-and-license/organ-donation', '.donate-organ-form', done);
  });

  world.when('I visit the donate contribution page', function(done) {
    navigateToPath('/apply/id-and-license/about-me/donate-contribution', '.donate-contribution-form', done);
  });

  world.when('I visit the social security page', function(done) {
    navigateToPath('/apply/id-and-license/my-basics/social-security', '.social-security-option-form', done);
  });


  world.when('I visit the veteran services page', function(done){
    navigateToPath('/apply/id-and-license/my-history/veterans-service', '.veterans-questionnaire-form', done);
  });
  world.when('I visit the license issues page', function(done){
    navigateToPath('/apply/id-and-license/my-history/license-issues', '.license-issues-form', done);
  });
  world.when('I visit the page to choose if I ever had previous names', function(done) {
    navigateToPath('/apply/id-and-license/my-history/names', '.previous-names-form', done);
  });
  world.when('I visit the medical history page', function(done) {
    navigateToPath('/apply/id-and-license/my-history/medical', '.medical-history-form', done);
  });
  world.when('I visit the page to enter existing license and id', function(done) {
    navigateToPath('/apply/id-and-license/my-history/license-and-id', '.license-and-id-history-form', done);
  });

  world.when('I will be on the CDL other state licenses page', function(done) {
    assertOnPage('.other-state-licenses-form', /apply\/cdl\/my-history\/other-state-licenses/, done);
  });

  world.when('I visit contact methods details page', function(done){
    navigateToPath('/apply/id-and-license/voting-registration/contact-methods', '.contact-methods-choice-form', done);
  });
  world.when('I visit voter opt out page', function(done) {
    navigateToPath('/apply/id-and-license/voting-registration/opt-out', '.opt-out-form', done);
  });
  world.when('I visit ballot language page', function(done) {
    navigateToPath('/apply/id-and-license/voting-registration/language', '.ballot-language-form', done);
  });
  world.when('I visit the political party choose page', function(done) {
    navigateToPath('/apply/id-and-license/voting-registration/choose-party', '.choose-party-form', done);
  });
  world.when('I visit the voter eligibility requirements page', function(done) {
    navigateToPath('/apply/id-and-license/voting-registration/eligibility', '.eligibility-requirements-form', done);
  });
  world.when('I visit voter preferences intro page', function(done){
    navigateToPath('/apply/id-and-license/voting-registration/preferences', '.voter-preferences-intro', done);
  });
  world.when('I visit voter citizen status page', function(done) {
    navigateToPath('/apply/id-and-license/voting-registration/citizenship', '.citizen-status-form', done);
  });

  world.when('I visit ballot by mail option page', function(done) {
    navigateToPath('/apply/id-and-license/voting-registration/vote-by-mail', '.ballot-by-mail-form', done);
  });

  world.when('I visit updated voter preferences intro page', function(done){
    navigateToPath('/apply/id-and-license/voting-registration/updated-preferences', '.updating-voter-preferences', done);
  });

  world.when('I visit voter registration complete page', function(done){
    navigateToPath('/apply/id-and-license/voting-registration/confirmation', '.voter-reg-complete', done);
  });


  world.and('I visit appointment preparation page', function(done) {
    navigateToPath('/apply/id-and-license/appointment-preparation', '.appointment-preparation', done);
  });
  world.when('I visit the required documents page', function(done){
    navigateToPath('/apply/id-and-license/appointment-preparation/documents', '.required-documents', done);
  });

  /* IDDL assertOnPage */
  world.when('I will be on the choose language page', function(done) {
    assertOnPage('.choose-language-form', /apply\/choose-language/, done);
  });
  world.when('I will be on the choose application page', function(done) {
    assertOnPage('.choose-application-form', /apply\/choose-application/, done);
  });
  world.when('I will be on the IDDL sign-in page', function(done) {
    assertOnPage('.id-me', /apply\/id-and-license\/sign-in/, done);
  });

  world.then('I will be taken to date of birth page', function(done) {
    assertOnPage('.date-of-birth-form', /id-and-license\/my-basics\/date-of-birth/, done);
  });
  world.then('I will be taken to edit date of birth page', function(done) {
    assertOnPage('.date-of-birth-form', /id-and-license\/edit\/my-basics\/date-of-birth/, done);
  });
  world.then('I will be on the page for entering my legal name', function(done) {
    assertOnPage('.legal-name-form', /apply\/id-and-license\/my-basics\/legal-name/, done);
  });
  world.then('I will be taken to the names page', function(done) {
    assertOnPage('.legal-name-form', /id-and-license\/my-basics\/legal-name/, done);
  });
  world.then('I will be taken to the edit names page', function(done) {
    assertOnPage('.legal-name-form', /id-and-license\/edit\/my-basics\/legal-name/, done);
  });
  world.then('I will be on the page for entering my date of birth', function(done) {
    assertOnPage('.date-of-birth-form', /apply\/id-and-license\/my-basics\/date-of-birth/, done);
  });

  world.when('I will be on the id.me page', function(done) {
    assertOnPage('.id-me', /apply\/id-and-license\/sign-in/, done);
  });

  world.then('I will be on the what do you want to do today page', function(done) {
    assertOnPage('.choose-card-action', /apply\/id-and-license\/what-do-you-want-to-do-today/, done);
  });

  world.then('I will be on the current card info page', function(done) {
    assertOnPage('.current-card-form', /apply\/id-and-license\/current-card-information/, done);
  });
  world.then('I will be on the add current card info page', function(done) {
    assertOnPage('.current-card-form', /apply\/id-and-license\/add\/current-card-information/, done);
  });
  world.then('I will be on the edit current card info page', function(done) {
    assertOnPage('.current-card-form', /apply\/id-and-license\/edit\/current-card-information/, done);
  });
  world.then('I will be on the ID and DL selection page', function(done) {
    assertOnPage('.choose-card-form', /apply\/id-and-license\/select-id-dl/, done);
  });
  world.then('I will be on the page for choosing to update or correct my card', function(done) {
    assertOnPage('.choose-card-change', /apply\/id-and-license\/updates-and-corrections/, done);
  });
  world.then('I will be on the page to add choosing to update or correct my card', function(done) {
    assertOnPage('.choose-card-change', /apply\/id-and-license\/add\/updates-and-corrections/, done);
  });
  world.then('I will be on the page to edit choosing to update or correct my card', function(done) {
    assertOnPage('.choose-card-change', /apply\/id-and-license\/edit\/updates-and-corrections/, done);
  });
  world.then('I will be on the page for choosing reason for replacement', function(done) {
    assertOnPage('.choose-replacement-detail', /apply\/id-and-license\/replacement-details/, done);
  });
  world.then('I will be on the page to add choosing reason for replacement', function(done) {
    assertOnPage('.choose-replacement-detail', /apply\/id-and-license\/add\/replacement-details/, done);
  });
  world.then('I will be on the page to edit choosing reason for replacement', function(done) {
    assertOnPage('.choose-replacement-detail', /apply\/id-and-license\/edit\/replacement-details/, done);
  });
  world.then('I will be on the youth license notification page', function(done) {
    assertOnPage('.youth-license-notification', /apply\/id-and-license\/youth-license-notification/, done);
  });
  world.then('I will be on the page for choosing real id', function(done) {
    assertOnPage('.real-id-form', /apply\/id-and-license\/real-id/, done);
  });
  world.then('I will be on the license type page', function(done) {
    assertOnPage('.license-type-form', /apply\/id-and-license\/license-type/, done);
  });
  world.then('I will be on the add license type page', function(done) {
    assertOnPage('.license-type-form', /apply\/id-and-license\/add\/license-type/, done);
  });
  world.then('I will be on the senior id page', function(done) {
    assertOnPage('.senior-id-form', /id-and-license\/senior-id/, done);
  });
  world.then('I will be on the add senior id page', function(done) {
    assertOnPage('.senior-id-form', /id-and-license\/add\/senior-id/, done);
  });
  world.then('I will be on the reduced fee page', function(done) {
    assertOnPage('.reduced-fee-form', /apply\/id-and-license\/reduced-fee/, done);
  });
  world.then('I will be on the add reduced fee page', function(done) {
    assertOnPage('.reduced-fee-form', /apply\/id-and-license\/add\/reduced-fee/, done);
  });

  world.then('I will be on the page for entering my address', function(done) {
    assertOnPage('.home-address-form', /id-and-license\/my-basics\/address/, done);
  });
  world.then('I will be on the page for editing my address', function(done) {
    assertOnPage('.home-address-form', /id-and-license\/edit\/my-basics\/address/, done);
  });
  world.then('I will be on the page for entering my physical traits', function(done) {
    assertOnPage('.physical-traits-form', /id-and-license\/my-basics\/physical-traits/, done);
  });
  world.then('I will be on the page for editing my physical traits', function(done) {
    assertOnPage('.physical-traits-form', /id-and-license\/edit\/my-basics\/physical-traits/, done);
  });
  world.then('I will be on the page for entering my height and weight', function(done) {
    assertOnPage('.traits-height-weight-form', /id-and-license\/my-basics\/traits-height-weight/, done);
  });
  world.then('I will be on the page for editing my height and weight', function(done) {
    assertOnPage('.traits-height-weight-form', /id-and-license\/edit\/my-basics\/traits-height-weight/, done);
  });
  world.then('I will be on the page for entering my social security', function(done) {
    assertOnPage('.social-security-option-form', /id-and-license\/my-basics\/social-security/, done);
  });
  world.then('I will be on the page for editing my social security', function(done) {
    assertOnPage('.social-security-option-form', /id-and-license\/edit\/my-basics\/social-security/, done);
  });


  world.then('I will be on the page to enter existing license and id', function(done) {
    assertOnPage('.license-and-id-history-form', /apply\/id-and-license\/my-history\/license-and-id/, done);
  });
  world.then('I will be on the page to add existing license and id', function(done) {
    assertOnPage('.license-and-id-history-form', /apply\/id-and-license\/add\/my-history\/license-and-id/, done);
  });
  world.then('I will be on the page to edit existing license and id', function(done) {
    assertOnPage('.license-and-id-history-form', /apply\/id-and-license\/edit\/my-history\/license-and-id/, done);
  });
  world.then('I will be taken to previous names page', function(done) {
    assertOnPage('.previous-names-form', /id-and-license\/my-history\/names/, done);
  });
  world.then('I will be taken to edit previous names page', function(done) {
    assertOnPage('.previous-names-form', /id-and-license\/edit\/my-history\/names/, done);
  });
  world.then('I will be taken to medical history page', function(done){
    assertOnPage('.medical-history-form', /id-and-license\/my-history\/medical/, done);
  });
  world.then('I will be taken to add medical history page', function(done){
    assertOnPage('.medical-history-form', /id-and-license\/add\/my-history\/medical/, done);
  });
  world.then('I will be taken to edit medical history page', function(done){
    assertOnPage('.medical-history-form', /id-and-license\/edit\/my-history\/medical/, done);
  });
  world.then('I will be taken to the license issues page', function(done){
    assertOnPage('.license-issues-form', /id-and-license\/my-history\/license-issues/, done);
  });
  world.then('I will be taken to the add license issues page', function(done){
    assertOnPage('.license-issues-form', /id-and-license\/add\/my-history\/license-issues/, done);
  });
  world.then('I will be taken to the edit license issues page', function(done){
    assertOnPage('.license-issues-form', /id-and-license\/edit\/my-history\/license-issues/, done);
  });
  world.then('I will be on the page for veteran related services', function(done) {
    assertOnPage('.veterans-questionnaire-form', /id-and-license\/my-history\/veterans-service/, done);
  });
  world.then('I will be on the page for editing veteran related services', function(done) {
    assertOnPage('.veterans-questionnaire-form', /id-and-license\/edit\/my-history\/veterans-service/, done);
  });

  world.then('I will be on the page for organ donation', function(done) {
    assertOnPage('.donate-organ-form', /organ-donation/, done);
  });

  world.then('I will be on the page for CDL organ donation', function(done) {
    assertOnPage('.donate-organ-form', /cdl\/organ-donation/, done);
  });

  world.then('I will be on the page for donate contribution', function(done) {
    assertOnPage('.donate-contribution-form', /id-and-license\/about-me\/donate-contribution/, done);
  });
  world.then('I will be on the page for voter citizen status entry', function(done) {
    assertOnPage('.citizen-status-form', /id-and-license\/voting-registration\/citizenship/, done);
  });

  world.then('I will be taken to political party page', function(done){
    assertOnPage('.political-party-preference', /id-and-license\/voter\/political-party/, done);
  });
  world.then('I will be taken to the political party choose page', function(done){
    assertOnPage('.choose-political-party', /id-and-license\/voting-registration\/choose-party/, done);
  });
  world.then('I will be taken to voter preferences info page', function(done) {
    assertOnPage('.voter-preferences-intro', /id-and-license\/voting-registration\/preferences/, done);
  });
  world.then('I will be taken to updated voter preferences info page', function(done) {
    assertOnPage('.updating-voter-preferences', /id-and-license\/voting-registration\/preferences-updated/, done);
  });
  world.then('I will be taken to voter registration complete page', function(done) {
    assertOnPage('.voter-reg-complete', /id-and-license\/voting-registration\/confirmation/, done);
  });

  world.then('I will be on the page for CDL veteran related services', function(done) {
    assertOnPage('.veterans-questionnaire-form', /cdl\/my-history\/veteran/, done);
  });

  world.then('I will be on the page for ballot by mail', function(done) {
    assertOnPage('.ballot-by-mail-form', /id-and-license\/voting-registration\/vote-by-mail/, done);
  });
  world.then('I will be on the eligibility page', function(done) {
    assertOnPage('.eligibility-requirements-form', /id-and-license\/voting-registration\/eligibility/, done);
  });
  world.then('I will be taken to contact methods page', function(done){
    assertOnPage('.contact-methods-choice-form', /id-and-license\/voting-registration\/contact-methods/, done);
  });
  world.then('I will be taken to ballot language page', function(done){
    assertOnPage('.ballot-language-form', /id-and-license\/voting-registration\/language/, done);
  });
  world.then('I will be on the page for entering voter opt-out', function(done) {
    assertOnPage('.opt-out-form', /id-and-license\/voting-registration\/opt-out/, done);
  });
  world.then('I will be on the page for guardian signature', function(done){
    assertOnPage('.guardian-signature-form', /id-and-license\/guardian-signature/, done);
  });


  world.then('I will be on the page with my summary', function(done) {
    assertOnPage('.summary', /apply\/id-and-license\/summary/, done);
  });
  world.then('I will see a blank page with the loading icon', function(done) {
    assertOnPage('.loading', /id-and-license\/summary/, done);
  });
  world.then('I will be on the page for appointment preparation', function(done) {
    assertOnPage('.appointment-preparation', /apply\/id-and-license\/appointment-preparation/, done);
  });
  world.then('I will be on the required documents page', function(done) {
    assertOnPage('.required-documents', /apply\/id-and-license\/appointment-preparation\/documents/, done);
  });
  world.then('I will be taken to the success visit page', function(done){
    assertOnPage('.success-visit-info', /id-and-license\/about-me\/success-visit/, done);
  });


  /* CDL NavigateToPath */

  world.when('I go to the CDL summary', function(done){
    navigateToPath('/apply/cdl/summary', '.summary', done);
  });

  world.when('I visit the CDL name page', function(done) {
    navigateToPath('/apply/cdl/my-basics/true-name', '.legal-name-form', done);
  });

  world.when('I visit the CDL dob page', function(done) {
    navigateToPath('/apply/cdl/my-basics/date-of-birth', '.date-of-birth-form', done);
  });

  world.when('I visit the CDL WDYWTDT page', function(done) {
    navigateToPath('/apply/cdl/what-do-you-want-to-do-today', '.choose-card-action', done);
  });

  world.when('I visit the CDL page to enter my current DL', function(done) {
    navigateToPath('/apply/cdl/current-ca-license/', '.cdl-current-dl-yes-no', done);
  });

  world.when('I visit the endorsements page', function(done) {
    navigateToPath('/apply/cdl/endorsements/', '.cdl-endorsements-form', done);
  });

  world.when('I go to the page to specify my changes to my CDL', function(done) {
    navigateToPath('/apply/cdl/change-details', '.choose-card-change', done);
  });

  world.when('I go to the page to specify my changes to my CDL', function(done) {
    navigateToPath('/apply/cdl/change-details', '.choose-card-change', done);
  });

  world.when('I visit the CDL motorcycle license page', function(done) {
    navigateToPath('/apply/cdl/motorcycle', '.cdl-class-m', done);
  });

  world.when('I visit the CDL class page', function(done) {
    navigateToPath('/apply/cdl/license-class', '.cdl-class-form', done);
  });

  world.when('I visit the self cert page for CDL', function(done) {
    navigateToPath('/apply/cdl/self-certification', '.cdl-self-certification', done);
  });

  world.when('I visit the CDL name history page', function(done) {
    navigateToPath('/apply/cdl/my-history/names', '.names-history-form', done);
  });

  world.when('I visit the CDL Social Security page', function(done) {
    navigateToPath('/apply/cdl/my-basics/social-security', '.social-security-form', done);
  });

  world.and('I return to the home page', function(done) {
    navigateToPath('/apply/id-and-license/links', '.section-links', done);
  });

  world.when('I visit the page about what I can do in the CDL application', function(done) {
    navigateToPath('/apply/cdl', '.apply-cdl', done);
  });

  world.when('I visit the CDL page for entering my physical traits', function(done) {
    navigateToPath('/apply/cdl/my-basics/physical-traits', '.physical-traits-form', done);
  });

  world.when('I visit the CDL page for Organ Donation', function(done) {
    navigateToPath('/apply/cdl/organ-donation', '.donate-organ-form', done);
  });

  /* CDL AssertOnPage */
  world.when('I will be on the page to choose application', function(done) {
    assertOnPage('.choose-application-form', /apply\/choose-application/, done);
  });

  world.when('I will be on the cdl disclaimers page', function(done) {
    assertOnPage('.disclaimers-form', /apply\/cdl\/disclaimers/, done);
  });

  world.when('I will be on the cdl id.me page', function(done) {
    assertOnPage('.id-me', /apply\/cdl\/sign-in/, done);
  });

  world.when('I will be on the CDL welcome page', function(done) {
    assertOnPage('.apply-cdl', /apply\/cdl/, done);
  });
  world.when('I will be on the CDL name page', function(done) {
    assertOnPage('.legal-name-form', /apply\/cdl\/my-basics\/true-name/, done);
  });
  world.when('I will be on the CDL edit name page', function(done) {
    assertOnPage('.legal-name-form', /apply\/cdl\/edit\/my-basics\/true-name/, done);
  });
  world.when('I will be on the CDL dob page', function(done) {
    assertOnPage('.date-of-birth-form', /apply\/cdl\/my-basics\/date-of-birth/, done);
  });
  world.when('I will be on the CDL edit dob page', function(done) {
    assertOnPage('.date-of-birth-form', /apply\/cdl\/edit\/my-basics\/date-of-birth/, done);
  });
  world.when('I will be on the CDL WDYWTDT page', function(done) {
    assertOnPage('.choose-card-action', /apply\/cdl\/what-do-you-want-to-do-today/, done);
  });
  world.when('I will be on the current CDL page', function(done) {
    assertOnPage('.enter-current-card-info', /apply\/cdl\/current-card-information/, done);
  });
  world.when('I will be on the edit current CDL page', function(done) {
    assertOnPage('.enter-current-card-info', /apply\/cdl\/edit\/current-card-information/, done);
  });

  world.when('I will be on the page to specify my changes to my CDL', function(done) {
    assertOnPage('.choose-card-change', /apply\/cdl\/change-details/, done);
  });
  world.when('I will be on the page to edit my changes to my CDL', function(done) {
    assertOnPage('.choose-card-change', /apply\/cdl\/edit\/change-details/, done);
  });
  world.when('I will be on the page to select reason for replacing my CDL', function(done) {
    assertOnPage('.choose-replacement-detail', /apply\/cdl\/replacement-details/, done);
  });

  world.when('I will be on the CDL page to enter my current DL', function(done) {
    assertOnPage('.current-card-form', /apply\/cdl\/current-ca-license/, done);
  });
  world.when('I will be on the CDL page to edit existing DL', function(done) {
    assertOnPage('.current-card-form', /apply\/cdl\/edit\/current-ca-license/, done);
  });
  world.when('I will be on the residency page', function(done) {
    assertOnPage('.cdl-residency', /apply\/cdl\/my-basics\/california-residency/, done);
  });

  world.then('I will be on the CDL page for entering my height and weight', function(done) {
    assertOnPage('.traits-height-weight-form', /cdl\/my-basics\/traits-height-weight/, done);
  });

  world.then('I will be on the CDL page for entering my physical traits', function(done) {
    assertOnPage('.physical-traits-form', /apply\/cdl\/my-basics\/physical-traits/, done);
  });

  world.when('I will be on the self certification page for CDL', function(done) {
    assertOnPage('.cdl-self-certification', /apply\/cdl\/self-certification/, done);
  });

  world.then('I will be taken to the CDL medical history page', function(done){
    assertOnPage('.medical-history-form', /apply\/cdl\/my-history\/medical/, done);
  });

  world.when('I will be on the CDL name history page', function(done) {
    assertOnPage('.names-history-form', /apply\/cdl\/my-history\/names/, done);
  });

  world.when('I will be on the CDL license issues page', function(done) {
    assertOnPage('.license-issues-form', /apply\/cdl\/my-history\/issues/, done);
  });

  world.when('I will be on the CDL page to edit motorcycle class', function(done) {
    assertOnPage('.cdl-class-m', /apply\/cdl\/edit\/motorcycle/, done);
  });

  world.when('I will be on the CDL page for motorcycle class', function(done) {
    assertOnPage('.cdl-class-m', /apply\/cdl\/motorcycle/, done);
  });

  world.when('I will be on the CDL class page', function(done) {
    assertOnPage('.cdl-class-form', /apply\/cdl\/license-class/, done);
  });

  world.when('I will be on the CDL endorsements page', function(done) {
    assertOnPage('.cdl-endorsements-form', /apply\/cdl\/endorsements/, done);
  });

  world.when('I will be on the CDL certificates page', function(done) {
    assertOnPage('.cdl-certificates-form', /apply\/cdl\/certificates/, done);
  });

  world.when('I will be on the CDL Social Security page', function(done) {
    assertOnPage('.social-security-form', /apply\/cdl\/my-basics\/social-security/, done);
  });

  world.when('I will be on the CDL Real ID page', function(done) {
    assertOnPage('.real-id-form', /apply\/cdl\/real-id/, done);
  });

  world.when('I will be on the page to add a motorcycle class', function(done) {
    assertOnPage('.cdl-class-m', /apply\/cdl\/motorcycle/, done);
  });

  world.when('I will be on the CDL citizen status page', function(done) {
    assertOnPage('.citizen-status-form', /apply\/cdl\/voting-registration\/citizenship/, done);
  });

  world.then('I will be on the CDL eligibility page', function(done) {
    assertOnPage('.eligibility-requirements-form', /apply\/cdl\/voting-registration\/eligibility/, done);
  });

  world.then('I will be taken to the CDL voter preferences info page', function(done) {
    assertOnPage('.voter-preferences-intro', /apply\/cdl\/voting-registration\/preferences/, done);
  });

  world.then('I will be on the page for entering CDL voter opt-out', function(done) {
    assertOnPage('.opt-out-form', /apply\/cdl\/voting-registration\/opt-out/, done);
  });

  world.then('I will be on the CDL page for choosing a party', function(done) {
    assertOnPage('.choose-party-form', /apply\/cdl\/voting-registration\/choose-party/, done);
  });

  world.then('I will be on the CDL page for selecting a ballot language', function(done) {
    assertOnPage('.ballot-language-form', /apply\/cdl\/voting-registration\/language/, done);
  });

   world.then('I will be on the CDL page for supplying my contact information', function(done) {
    assertOnPage('.contact-methods-choice-form', /apply\/cdl\/voting-registration\/contact-methods/, done);
  });

  world.then('I will be on the CDL page for selecting whether to get my ballot by mail', function(done) {
    assertOnPage('.ballot-by-mail-form', /apply\/cdl\/voting-registration\/vote-by-mail/, done);
  });

  world.then('I will be on the CDL voting registration summary', function(done) {
    assertOnPage('.voter-reg-complete', /apply\/cdl\/voting-registration\/confirmation/, done);
  });

  world.then('I will be on the CDL summary', function(done) {
    assertOnPage('.summary', /apply\/cdl\/summary/, done);
  });
};
