'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a form for entering my mailing address', function(done) {
    browser
      .exists('#mailingStreet_1')
      .then((exists) => {
        assert.ok(exists, 'Street address input not found');
      })
      .exists('#mailingStreet_2')
      .then((exists) => {
        assert.ok(exists, 'Unit or Apartment number input not found');
      })
      .exists('#mailingCity')
      .then((exists) => {
        assert.ok(exists, 'City input not found');
      })
      .exists('#mailingZip')
      .then((exists) => {
        assert.ok(exists, 'Zip input not found');
      })
      .exists('#mailingState')
      .then((exists) => {
        assert.ok(exists, 'State input not found');
      })
      .html('#mailingState option[selected]')
      .value('#mailingState')
      .then((value) => { assert.equal(value, 'CA'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see correct mailing address lables', function(done){
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
      .select('#mailingState', 'CA')
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

  world.given('I have already entered my mailing address into the form', function(done) {
    browser
      .click('a.mailing-address')
      .waitForSelector('.mailing-address-form')
      .type('#mailingStreet_1', '123 Main Street')
      .type('#mailingStreet_2', 'Unit no. 45')
      .type('#mailingCity', 'Crazidino')
      .select('#mailingState', 'CA')
      .type('#mailingZip', '94666')
      .click('input[type="submit"]')
      .click('a.home')
      .waitForSelector('.home-page')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the mailing address I entered', function(done) {
    browser
      .value('#mailingStreet_1')
      .then((value) => { assert.equal(value, '123 Main Street'); })
      .value('#mailingStreet_2')
      .then((value) => { assert.equal(value, 'Unit no. 45'); })
      .value('#mailingCity')
      .then((value) => { assert.equal(value, 'Crazidino'); })
      .value('#mailingZip')
      .then((value) => { assert.equal(value, '94666'); })
      .value('#mailingState')
      .then((value) => { assert.equal(value, 'CA'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my mailing zip', function(done) {
    browser
      .type('#mailingZip', '91001')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated mailing zip', function(done) {
    browser
      .text()
      .then((pageContent) => {
        assert(pageContent.includes('91001'), 'updated zip missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
