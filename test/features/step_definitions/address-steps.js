'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see correct home address labels', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('Where do you live?'), 'Address label missing');
      assert(text.includes('Example: 1234 Main St., Los Angeles, CA 90017'), 'Address example label missing');
      assert(text.includes('Street address'), 'Street address label missing');
      assert(text.includes('Apartment or unit number'), 'Apartment or Unit Number label missing');
      assert(text.includes('City'), 'City label missing');
      assert(text.includes('Zip code'), 'Zip Code label missing');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I enter my home address', function(done) {
    browser
      .type('#homeStreet_1', '123 Main Street')
      .type('#homeStreet_2', 'Unit no. 45')
      .type('#homeCity', 'Crazidino')
      .type('#homeZip', '94666')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my home address on that summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('123 Main Street'), 'street address missing');
        assert(text.includes('Unit no. 45'), 'unit number missing');
        assert(text.includes('Crazidino'), 'city missing');
        assert(text.includes('CA'), 'state missing');
        assert(text.includes('94666'), 'zip missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my address into the form', function(done) {
    browser
      .click('a.address')
      .waitForSelector('.home-address-form')
      .type('#homeStreet_1', '123 Main Street')
      .type('#homeStreet_2', 'Unit no. 45')
      .type('#homeCity', 'Crazidino')
      .type('#homeZip', '94666')
      .click('label[for="homeAddressSameAsMailing-true"]')
      .click('button.forward')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the home address I entered', function(done) {
    browser
      .value('#homeStreet_1')
      .then((value) => { assert.equal(value, '123 Main Street'); })
      .value('#homeStreet_2')
      .then((value) => { assert.equal(value, 'Unit no. 45'); })
      .value('#homeCity')
      .then((value) => { assert.equal(value, 'Crazidino'); })
      .value('#homeZip')
      .then((value) => { assert.equal(value, '94666'); })
      .value('#homeState')
      .then((value) => { assert.equal(value, ''); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my home zip', function(done) {
    browser
      .type('#homeZip', '91001')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated home zip', function(done) {
    browser
      .text()
      .then((pageContent) => {
        assert(pageContent.includes('91001'), 'updated zip missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });


  world.given('I have entered my home address', function(done) {
    browser
      .click('a.address')
      .waitForSelector('.home-address-form')
      .type('#homeStreet_1', '123 Main Street')
      .type('#homeStreet_2', 'Unit no. 45')
      .type('#homeCity', 'Crazidino')
      .type('#homeZip', '94666')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select address interstitial Yes', function(done){
    browser
    .click('label[for="homeAddressSameAsMailing-Yes"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select address interstitial No', function(done){
    browser
    .click('label[for="homeAddressSameAsMailing-No"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see residence address and mailing address will have the same information', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('123 Main Street'), 'street address missing');
      assert(text.includes('Unit no. 45'), 'unit number missing');
      assert(text.includes('Crazidino'), 'city missing');
      assert(text.includes('CA'), 'state missing');
      assert(text.includes('94666'), 'zip missing');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see correct mailing address labels', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('Where do you receive mail?'), 'Address label missing');
      assert(text.includes('For example: 1234 H Street, Apt. 200, Los Angeles, CA. 90017'), 'Address example label missing');
      assert(text.includes('Street Address'), 'Street address label missing');
      assert(text.includes('Apartment or Unit Number (optional)'), 'Apartment or Unit Number label missing');
      assert(text.includes('City'), 'City label missing');
      assert(text.includes('Zip Code'), 'Zip Code label missing');
    })
    .then(() => { done(); })
    .catch(done);
  });


  world.when('I enter my mailing address', function(done) {
    browser
      .type('#mailingStreet_1', '123 Main Street')
      .type('#mailingStreet_2', 'Unit no. 45')
      .type('#mailingCity', 'Crazidino')
      .type('#mailingZip', '94666')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my mailing address on that summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('123 Main Street'), 'street address missing');
        assert(text.includes('Unit no. 45'), 'unit number missing');
        assert(text.includes('Crazidino'), 'city missing');
        assert(text.includes('CA'), 'state missing');
        assert(text.includes('94666'), 'zip missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click to edit my address', function(done) {
    browser
      .click('.addresses.button.summary')
      .then(done)
      .catch(done);
  });
};
