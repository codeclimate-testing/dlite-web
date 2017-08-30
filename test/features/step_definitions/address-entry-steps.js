'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  let element = function (selector) {
    return function() {
      return document.querySelector(selector);
    }
  };

  let pageText = function () {
    return document.querySelector('html').innerText;
  };

  world.then('I will see a form for entering my residential address', function(done) {
    browser
      .evaluate(element('#residentialStreet'))
      .then((input) => { assert.ok(input); })
      .evaluate(element('#residentialCity'))
      .then((input) => { assert.ok(input); })
      .evaluate(element('#residentialZip'))
      .then((input) => { assert.ok(input); })
      .evaluate(element('#residentialState'))
      .then((select) => {
        assert.ok(select);
        assert.equal(select.value, 'CA', 'Default CA value not selected');
      })
      .then(done);
  });

  world.when('I enter my residence address', function(done) {
    browser
      .type('#residentialStreet', '123 Main Street')
      .type('#residentialCity', 'Crazidino')
      .select('#residentialState', 'CA')
      .type('#residentialZip', '94666')
      .then(done);
  });

  world.and('I submit my residence address', function(done) {
    browser
      .click('input[type=submit]')
      .then(done);
  });

  world.then('I will see my residence address on that summary', function(done) {
    let pageContent = browser.text('html');
    assert(pageContent.includes('123 Main Street'), 'street address missing from summary');
    assert(pageContent.includes('Crazidino'), 'city missing from summary');
    assert(pageContent.includes('CA'), 'state missing from summary');
    assert(pageContent.includes('94666'), 'zip missing from summary');
    done();
  });

  world.given('I have already entered my residence address into the form', function(done) {
    browser
      .click('a.addresses')
      .wait('.both-addresses')
      .type('#residentialStreet', '123 Main Street')
      .type('#residentialCity', 'Crazidino')
      .select('#residentialState', 'CA')
      .type('#residentialZip', '94666')
      .click('input[type="submit"]')
      .click('a.home')
      .wait('.home-page')
      .then(done);
  });

  world.then('I will see the residence address I entered', function(done) {
    browser
      .evaluate(pageText)
      .then((pageContent) => {
        assert(pageContent.includes('123 Main Street'), 'street address missing from summary');
        assert(pageContent.includes('Crazidino'), 'city missing from summary');
        assert(pageContent.includes('CA'), 'state missing from summary');
        assert(pageContent.includes('94666'), 'zip missing from summary');
      })
      .then(done);
  });

  world.and('I change my residence zip', function(done) {
    browser
      .type('#residentialZip', '91001')
      .then(done);
  });

  world.then('I will see my updated residence zip', function(done) {
    browser
      .evaluate(pageText)
      .then((pageContent) => {
        assert(pageContent.includes('91001'), 'updated zip missing from summary');
      })
      .then(done);
  });
};
