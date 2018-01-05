'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see the section heading for my history', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('My history'), 'missing my history section heading');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click No for veteran', function(done){
    browser
      .click('label[for="isVeteran-No"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click Yes for veteran', function(done){
    browser
      .click('label[for="isVeteran-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see a question to receive benefits information', function(done){
    browser
      .waitForSelector('.veterans-benefits-form')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });

  world.and('I will see a message thanking me for my service', function(done){
    browser
      .waitForSelector('.veteran-thank-you-message')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });

  world.and('I will see a question about getting the word Veteran added to my license', function(done){
    browser
      .waitForSelector('.veterans-identifier-form')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });

  world.when('I click Yes to receiving additional information about benefits', function(done){
    browser
      .click('label[for="receiveBenefits-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see additional 5 dollars added to my fee message', function(done){
    browser
      .waitForSelector('.veteran-identifier-fee')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });

  world.and('I click Yes to veteran previously being printed on my license', function(done){
    browser
      .click('label[for="previouslyDesignated-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I click Yes about having my license labeled with Veteran', function(done){
    browser
      .click('label[for="veteransIdentifier-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am not a veteran', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Is veteran: No'), 'not a veteran missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am a veteran', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Is veteran: Yes'), 'yes a veteran missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I would like additional veterans benefits info', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Receive veterans benefits: Yes'), 'receive veterans benefits missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I would like that veterans label on my id', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Veterans identifier on license: Yes'), 'veterans identifier missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
