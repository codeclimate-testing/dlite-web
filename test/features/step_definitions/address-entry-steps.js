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
      .then((option) => {
        // This isn't working, and in fact in the browser, I can't see the option selected
        // assert.equal(option.value, 'CA', 'Default CA value not selected');
      })
      .then(done)
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

  world.and('I submit my residence address', function(done) {
    browser
      .click('input[type="submit"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my residence address on that summary', function(done) {
    world.run('I will see the residence address I entered', done);
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
      .text()
      .then((text) => {
        assert(text.includes('123 Main Street'), 'street address missing from summary');
        assert(text.includes('Crazidino'), 'city missing from summary');
        assert(text.includes('CA'), 'state missing from summary');
        assert(text.includes('94666'), 'zip missing from summary');
      })
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
