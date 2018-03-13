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

  world.and('I click to edit my DL', function(done) {
    browser
      .click('.wdywtdt.DL')
      .then(done)
      .catch(done);
  });

  world.and('I choose to renew a card', function(done) {
    browser
      .click('label[for="cardAction-renew"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I choose to change a card', function(done) {
    browser
      .click('label[for="cardAction-change"]')
      .then(done)
      .catch(done);
  });

  world.and('I choose to replace a card', function(done) {
    browser
      .click('label[for="cardAction-replace"]')
      .then(done)
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

  world.when('I choose to renew an ID', function(done) {
    browser
      .click('label[for="renew-ID"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I choose to change an ID', function(done) {
    browser
      .click('label[for="change-ID"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I choose to replace an ID', function(done) {
    browser
      .click('label[for="replace-ID"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I choose to replace a DL', function(done) {
    browser
      .click('label[for="replace-DL"]')
      .then(() => {done(); })
      .catch(done);
  });
  world.when('I choose to add a new DL', function(done) {
    browser
      .click('label[for=DLAction-new]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I choose to renew a DL', function(done) {
    browser
      .click('label[for=DLAction-renew]')
      .then(done)
      .catch(done);
  });

  world.when('I choose to add a new ID', function(done) {
    browser
      .click('label[for=IDAction-new]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I choose to replace an added DL', function(done) {
    browser
      .click('label[for=DLAction-replace]')
      .then(done)
      .catch(done);
  });

  world.when('I choose to add a change ID', function(done) {
    browser
      .click('label[for=IDAction-change]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I choose to add a renewal ID', function(done) {
    browser
      .click('label[for=IDAction-renew]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I choose to add a replacement ID', function(done) {
    browser
      .click('label[for=IDAction-replace]')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I choose to change a DL', function(done) {
    browser
      .click('label[for="DLAction-change"]')
      .then(() => {done(); })
      .catch(done);
  });
  world.and('I choose to update my DL', function(done) {
    browser
      .click('label[for="DL-correctOrUpdate-update"]')
      .then(done)
      .catch(done);
  });

  world.and('I choose to update my ID', function(done) {
    browser
      .click('label[for="ID-correctOrUpdate-update"]')
      .then(done)
      .catch(done);
  });

  world.and('I check the box to update my name', function(done) {
    browser
      .click('label[for="name"]')
      .then(done)
      .catch(done);
  });

  world.and('I select the DL was damaged', function(done) {
    browser
      .click('label[for="DL-reason-damaged"]')
      .then(done)
      .catch(done);
  });

  world.and('I select the ID was damaged', function(done) {
    browser
      .click('label[for="ID-reason-damaged"]')
      .then(done)
      .catch(done);
  });

  world.then('I will see that I am updating the name on my ID', function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('My ID'), 'my id section not shown in summary');
        assert(text.includes('Updating'), 'update sections not shown in summary');
      })
      .then(done)
      .catch(done);
  });

  world.then('I will see that I am updating my DL', function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('My Driver License'), 'my dl section not shown in summary');
        assert(text.includes('Updating'), 'update sections not shown in summary');
      })
      .then(done)
      .catch(done);
  });

  world.then('I will see that I am replacing my DL', function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('My Driver License'), 'my driver license section not shown in summary');
        assert(text.includes('Replacing'), 'replacing not shown in summary');
      })
      .then(done)
      .catch(done);
  });

  world.then('I will see that I am renewing my DL', function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('My Driver License'), 'my driver license section not shown in summary');
        assert(text.includes('Renewing'), 'renewing not shown in summary');
      })
      .then(done)
      .catch(done);
  });

  world.then('I will see that I am getting a new DL', function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('My Driver License'), 'my driver license section not shown in summary');
        assert(text.includes('Applying for the first time'), 'card action not shown in summary');
      })
      .then(done)
      .catch(done);
  });

  world.then('I will see that I am replacing my ID', function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('My IDI amReplacing'));
      })
      .then(done)
      .catch(done);
  });
  world.then('I will see that my ID card type has been saved', function(done) {
    browser
      .text('.inner')
      .then((text) => {
        assert.ok(text.includes('Applying for the first time') || text.includes('Renewing'), 'ID card type not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my DL card type has been saved', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Applying for the first time') || text.includes('Renewing'), 'DL card type not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my renewal DL card type has been saved', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('I amRenewing'), 'DL renewal card type not saved in summary');
      })
      .then(done)
      .catch(done);
  });

  world.then('I will see that my new ID card type has been saved', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('My IDI amApplying for the first time'), 'ID card type not saved in summary');
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

  world.and('I will see my ID card info saved', function(done) {
    browser
      .text()
      .then(text => {
        assert(text.includes('ID card numbera111'));
      })
      .then(done)
      .catch(done);
  });

  world.and('I will see my DL card info saved', function(done) {
    browser
      .text()
      .then(text => {
        assert(text.includes('Driver license numbera111'));
      })
      .then(done)
      .catch(done);
  });

  world.then('I will see the info of the card I want renewed', function(done) {
    browser
      .text()
      .then(text => {
        assert(text.includes('number: a111'));
        assert(text.includes('11/11/2011'))
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the info of the ID card saved', function(done) {
    browser
      .text()
      .then(text => {
        assert(text.includes('ID card numbera111'))
        assert(text.includes('11/11/2011'))
      })
      .then(done)
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
      .click('label[for="needEndorsement-No"]')
      .then(() => {done(); })
      .catch(done);
  });

  world.then('I will see what license type I need', function(done) {
    browser
      .text()
      .then(text => {
        assert.ok(text.includes('Need to driveCar (Class C)'));
        assert.ok(!text.includes('Motorcycle (Class M)'))
        assert.ok(text.includes('Firefighter endorsementNo'));
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that my selection to get a new card is already selected', function(done) {
    browser
      .waitForSelector('.selected label[for="DLAction-new"]')
      .then(done)
      .catch(done);
  });

  world.then('I will see that my selection to get a replacement card is already selected', function(done) {
    browser
      .waitForSelector('.selected label[for="DLAction-replace"]')
      .then(done)
      .catch(done);
  });

  world.then('I will see that my selection to change a card is already selected', function(done) {
    browser
      .waitForSelector('.selected label[for="DLAction-change"]')
      .then(done)
      .catch(done);
  });
};
