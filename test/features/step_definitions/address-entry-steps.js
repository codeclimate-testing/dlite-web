'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a form for entering my residential address', function(done) {
    browser
      .exists('#residentialStreet_1')
      .then((exists) => {
        assert.ok(exists, 'Street address input not found');
      })
      .exists('#residentialStreet_2')
      .then((exists) => {
        assert.ok(exists, 'Unit or Apartment number input not found');
      })
      .exists('#residentialCity')
      .then((exists) => {
        assert.ok(exists, 'City input not found');
      })
      .exists('#residentialZip')
      .then((exists) => {
        assert.ok(exists, 'Zip input not found');
      })
      .exists('#residentialState')
      .then((exists) => {
        assert.ok(exists, 'State input not found');
      })
      .html('#residentialState option[selected]')
      .value('#residentialState')
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


  world.when('I enter my residence address', function(done) {
    browser
      .type('#residentialStreet_1', '123 Main Street')
      .type('#residentialStreet_2', 'Unit no. 45')
      .type('#residentialCity', 'Crazidino')
      .select('#residentialState', 'CA')
      .type('#residentialZip', '94666')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my residence address on that summary', function(done) {
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

  world.given('I have already entered my residence address into the form', function(done) {
    browser
      .click('a.home-address')
      .waitForSelector('.residential-address-form')
      .type('#residentialStreet_1', '123 Main Street')
      .type('#residentialStreet_2', 'Unit no. 45')
      .type('#residentialCity', 'Crazidino')
      .select('#residentialState', 'CA')
      .type('#residentialZip', '94666')
      .click('input[type="submit"]')
      .click('a.home')
      .waitForSelector('.home-page')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the residence address I entered', function(done) {
    browser
      .value('#residentialStreet_1')
      .then((value) => { assert.equal(value, '123 Main Street'); })
      .value('#residentialStreet_2')
      .then((value) => { assert.equal(value, 'Unit no. 45'); })
      .value('#residentialCity')
      .then((value) => { assert.equal(value, 'Crazidino'); })
      .value('#residentialZip')
      .then((value) => { assert.equal(value, '94666'); })
      .value('#residentialState')
      .then((value) => { assert.equal(value, 'CA'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will be asked if my residence and mailing addresses are the same', function(done){
    browser.waitForSelector('.yes-no-selector')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my residence zip', function(done) {
    browser
      .type('#residentialZip', '91001')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated residence zip', function(done) {
    browser
      .text()
      .then((pageContent) => {
        assert(pageContent.includes('91001'), 'updated zip missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
