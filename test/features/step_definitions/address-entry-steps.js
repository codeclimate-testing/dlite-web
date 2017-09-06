'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a form for entering my residential address', function(done) {
    browser
      .exists('#residentialStreet')
      .then((exists) => {
        assert.ok(exists, 'Street address input not found');
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

  world.when('I enter my residence address', function(done) {
    browser
      .type('#residentialStreet', '123 Main Street')
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
        assert(text.includes('Crazidino'), 'city missing');
        assert(text.includes('CA'), 'state missing');
        assert(text.includes('94666'), 'zip missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my residence address into the form', function(done) {
    browser
      .click('a.addresses')
      .waitForSelector('.both-addresses')
      .type('#residentialStreet', '123 Main Street')
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
      .value('#residentialStreet')
      .then((value) => { assert.equal(value, '123 Main Street'); })
      .value('#residentialCity')
      .then((value) => { assert.equal(value, 'Crazidino'); })
      .value('#residentialZip')
      .then((value) => { assert.equal(value, '94666'); })
      .value('#residentialState')
      .then((value) => { assert.equal(value, 'CA'); })
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
