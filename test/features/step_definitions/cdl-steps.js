'use strict';

const assert = require('assert');

module.exports = function(world) {
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

  world.then('I will see that I am applying for a new CDL', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Applying for the first time'), 'applying for new cdl missing');
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
      .then((d) => { done(); })
  world.when('I click Yes to being a resident', function() {
    browser
      .click('label[isResident-Yes]')
      .then(done)
      .catch(done);
  });

  world.when('I click No to being a resident', function() {
    browser
      .click('label[isResident-No]')
      .then(done)
      .catch(done);
  });
};
