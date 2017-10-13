'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a form for entering my home address', function(done) {
    browser
      .exists('#homeStreet_1')
      .then((exists) => {
        assert.ok(exists, 'Street address input not found');
      })
      .exists('#homeStreet_2')
      .then((exists) => {
        assert.ok(exists, 'Unit or Apartment number input not found');
      })
      .exists('#homeCity')
      .then((exists) => {
        assert.ok(exists, 'City input not found');
      })
      .exists('#homeZip')
      .then((exists) => {
        assert.ok(exists, 'Zip input not found');
      })
      .exists('#homeState')
      .then((exists) => {
        assert.ok(exists, 'State input not found');
      })
      .html('#homeState option[selected]')
      .value('#homeState')
      .then((value) => { assert.equal(value, 'CA'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see correct home address lables', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('Where do you live?'), 'Address label missing');
      assert(text.includes('For example: 1234 H Street, Apt. 200, Los Angeles, CA. 90017'), 'Address example label missing');
      assert(text.includes('Street Address'), 'Street address label missing');
      assert(text.includes('Apartment or Unit Number (optional)'), 'Apartment or Unit Number label missing');
      assert(text.includes('City'), 'City label missing');
      assert(text.includes('Zip Code'), 'Zip Code label missing');
    })
    .then(() => { done(); })
    .catch(done);
  });


  world.when('I enter my home address', function(done) {
    browser
      .type('#homeStreet_1', '123 Main Street')
      .type('#homeStreet_2', 'Unit no. 45')
      .type('#homeCity', 'Crazidino')
      .select('#homeState', 'CA')
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

  world.given('I have already entered my home address into the form', function(done) {
    browser
      .click('a.home-address')
      .waitForSelector('.home-address-form')
      .type('#homeStreet_1', '123 Main Street')
      .type('#homeStreet_2', 'Unit no. 45')
      .type('#homeCity', 'Crazidino')
      .select('#homeState', 'CA')
      .type('#homeZip', '94666')
      .click('input[type="submit"]')
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
      .then((value) => { assert.equal(value, 'CA'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will be asked if my home and mailing addresses are the same', function(done){
    browser.waitForSelector('.interstitial-address-form')
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
};
