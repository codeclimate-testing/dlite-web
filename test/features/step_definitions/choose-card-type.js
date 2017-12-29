'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('I choose to get a new card', function(done) {
    browser
      .click('label[for="cardAction-new"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I choose to renew a card', function(done) {
    browser
      .click('label[for="cardAction-renew"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I click on the DL checkbox', function(done) {
    browser
      .click('[for="DL"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click on the ID checkbox', function(done) {
    browser
      .click('[for="ID"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click to renew my ID', function(done) {
    browser
      .click('label[for="renew-ID"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click to renew my DL', function(done) {
    browser 
      .click('label[for="renew-DL"]')
      .then(() => {done(); })
      .catch(done);
  });

  world.then('I will see that my ID card type has been saved', function(done) {
    browser
      .text('.inner')
      .then((text) => {
        assert.ok(text.includes('Applying for new: ID') || text.includes('Renewing: ID'), 'ID card type not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my DL card type has been saved', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Applying for new: Driver License') || text.includes('Renewing: Driver License'), 'DL card type not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my card types have been saved', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('ID') && text.includes('Driver License'), 'card types not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see that I am not getting a DL', function(done) {
    browser
      .text('.inner')
      .then( text => {
        assert(!text.includes('Applying for new: Driver License'), 'DL is shown in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I enter my current card data', function(done) {
    browser
      .type('#number', 'a111')
      .type('#day', '11')
      .type('#month', '11')
      .type('#year', '2011')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the info of the card I want renewed', function(done) {
    browser
      .text()
      .then(text => {
        assert(text.includes('number: a111'));
        assert(text.includes('expiration date: 11/11/2011'))
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I click on the car checkbox', function(done) {
    browser 
      .click('label[for="car"]')
      .then(() => {done(); })
      .catch(done);
  });

  world.then('I click to not need endorsements', function(done) {
    browser 
      .click('label[for="No"]')
      .then(() => {done(); })
      .catch(done);
  });

  world.then('I will see what license type I need', function(done) {
    browser 
      .text()
      .then(text => {
        assert.ok(text.includes('Need to drive: Car'));
        assert.ok(text.includes('Endorsements: not needed'));
      })
      .then(() => { done(); })
      .catch(done);
  });
};
