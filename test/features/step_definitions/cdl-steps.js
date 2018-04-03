'use strict';

const assert = require('assert');

module.exports = function(world){
  let browser = world.browser;

  world.when('I select a commercial DL application', function(done) {
    browser
      .click('label[for="chooseApplication-cdl"]')
      .then(done)
      .catch(done);
  });

  world.when('I select a regular ID or DL application', function(done) {
    browser
      .click('label[for="chooseApplication-iddl"]')
      .then(done)
      .catch(done);
  });

  world.when('I select a new commercial DL', function(done) {
    browser
      .click('label[for="cdlWDYWTDT -new"]')
      .then(done)
      .catch(done);
  });

  world.when('I select a renewal CDL', function(done) {
    browser
      .click('label[for="cdlWDYWTDT -renew"]')
      .then(done)
      .catch(done);
  });

  world.when('I select to change my CDL', function(done) {
    browser
      .click('label[for="cdlWDYWTDT -change"]')
      .then(done)
      .catch(done);
  });

  world.when('I click to Update my CDL', function(done) {
    browser
      .click('label[for="correctOrUpdate-update"]')
      .then(done)
      .catch(done);
  });

  world.when('I select to replace my CDL', function(done) {
    browser
      .click('label[for="cdlWDYWTDT -replace"]')
      .then(done)
      .catch(done);
  });

  world.when('I click to change my name section', function(done) {
    browser
      .click('label[for="name"]')
      .then(done)
      .catch(done);
  });

  world.when('I select my reason for replacing my CDL', function(done) {
    browser
      .click('label[for="reason-lostOrStolen"]')
      .then(done)
      .catch(done);
  });

  world.when('I select Class A', function(done) {
    browser
      .click('label[for="class-classA"]')
      .then(done)
      .catch(done);
  });

  world.when('I select No to getting a motorcycle class', function(done) {
    browser
      .click('label[for="classM-No"]')
      .then(done)
      .catch(done);
  });

  world.when('I click to drive interstate', function(done) {
    browser
      .click('label[for="certification-inter"]')
      .then(done)
      .catch(done);
  });

  world.then('I will see that I am applying for a new CDL', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Applying for the first time'), 'applying for new cdl missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am renewing my card', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('I amRenewing'), 'applying for new cdl missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am updating my card', function(done) {
    browser
      .text()
      .then(text=> {
        assert.ok(text.includes('I amUpdating'));
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my current CDL number', function(done) {
    browser
      .text()
      .then(text => {
        assert.ok(text.includes('CDL numberDMV2000'));
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am not getting a motorcycle class', function(done) {
    browser
      .text()
      .then(text => {
        assert.ok(text.includes('Motorcycle on CDLNo'));
      })
      .then(done)
      .catch(done);
  });

  world.then('I will see that I am applying for a class A license', function(done) {
    browser
      .text()
      .then(text => {
        assert.ok(text.includes('License classClass A'));
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the title of each accordion for cdl what can I do page', function(done) {
    browser
      .waitForSelector('#apply-cdl')
      .then((d) => { done(); })
      .catch(done);
  });

  world.when('I click in the title for cdl what can I do accordion', function(done) {
    browser
      .click('#apply-cdl')
      .then(() => { done(); })
      .catch((err) => { done(new Error(err)); });
  });

  world.then('The cdl what can I do info accordion will open to show its full content', function(done) {
    browser
      .attribute('#apply-cdl-accordion', 'class')
      .then((className) => {
        assert(className.includes('open'), 'Accordion for cdl what can i do did not open');
      })
      .then(done)
      .catch(done);
  });

  world.when('I click Yes to being a resident', function(done) {
    browser
      .click('label[for="isResident-Yes"]')
      .then(done)
      .catch(done);
  });

  world.when('I click No to being a resident', function(done) {
    browser
      .click('label[for="isResident-No"]')
      .then(done)
      .catch(done);
  });

  world.when('I click yes to have a social security number', function(done) {
    browser
      .click('label[for="hasSocialSecurity-Yes"]')
      .then(done)
      .catch(done);
  });

  world.when('I click no to have a social security number', function(done) {
    browser
      .click('label[for="hasSocialSecurity-No"]')
      .then(done)
      .catch(done);
  });

  world.when('I click in the self-certification drawer', function(done) {
    browser
      .click('#self-certification-accordion')
      .then(done)
      .catch(done);
  });

  world.when('I click in the voter registration drawer', function(done) {
    browser
      .click('#voter-registration-summary-accordion')
      .then(done)
      .catch(done);
  });

  world.when('I click in the my history drawer', function(done) {
    browser
      .click('#history-summary-accordion')
      .then(done)
      .catch(done);
  });

  world.when('I click in the organ donation drawer', function(done) {
    browser
      .click('#organ-donation-summary-accordion')
      .then(done)
      .catch(done);
  });

  world.then('I will see that I am driving interstate', function(done) {
    browser
      .text()
      .then(text => {
        assert.ok(text.includes('Type of drivingInterstate'));
      })
      .then(done)
      .catch(done);
  });

  world.when('I click yes to wanting an endorsement', function(done) {
    browser
      .click('label[for="needEndorsement-Yes"]')
      .then(done)
      .catch(done);
  });

  world.when('I click on the tank checkbox', function(done) {
    browser
      .click('label[for="tank"]')
      .then(done)
      .catch(done);
  });

  world.then('I will see I selected to get a tank endorsement', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Endorsement(s)Tank'), 'applying for new cdl missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click yes to wanting a certificate', function(done) {
    browser
      .click('label[for="needCertificates-Yes"]')
      .then(done)
      .catch(done);
  });

  world.when('I click on the ambulance checkbox', function(done) {
    browser
      .click('label[for="ambulance"]')
      .then(done)
      .catch(done);
  });

  world.then('I will see I selected to get an ambulance certificate', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Certificates(s)Ambulance'), 'cdl certificate missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my license suspension reason', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('I was not very responsible, I guess!'), 'license issue reason missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

    world.when('I click that I have had out of state license', function(done) {
    browser
      .click('label[for="hasNonCALicense-Yes"]')
      .then(done)
      .catch(done);
  });

  world.when('I click that I will complete form at home', function(done) {
    browser
      .click('label[for="tenYearHistory-home"]')
      .then(done)
      .catch(done);
  });

  world.when('I click to edit my CDL', function(done) {
    browser
      .click('.cdlWdywtdt')
      .then(done)
      .catch(done);
  });

  world.when('I click to edit the name on my CDL', function(done) {
    browser
      .click('.cdlLegalName.button.summary')
      .then(done)
      .catch(done);
  });

  world.when('I click to edit the date of birth on my CDL', function(done) {
    browser
      .click('.cdlDateOfBirth.button.summary')
      .then(done)
      .catch(done);
  });

  world.then('I will see that my selection to get a new CDL is already selected', function(done) {
    browser
      .waitForSelector('.selected label[for="cdlWDYWTDT -new"]')
      .then(done)
      .catch(done);
  });

  world.when('I click on the disclaimers checkbox', function(done) {
    browser
      .click('label[for="agree"]')
      .then(done)
      .catch(done);
  });
};
