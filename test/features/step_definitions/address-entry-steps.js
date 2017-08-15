'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.when('I visit the addresses page', function(done) {
    browser.clickLink('addresses', done);
  });

  world.then('I will see a form for entering my residential address', function(done) {
    let field = browser.field('street');
    assert.ok(field);

    field = browser.field('city');
    assert.ok(field);

    field = browser.html('#residentialState');
    assert.ok(field);

    field = browser.field('zip');
    assert.ok(field);

    done();
  });

  world.when('I enter my residence address', function(done) {
    browser.fill('street', '123 Main Street');
    browser.fill('city', 'Crazidino');
    browser.select('state', 'CA');
    browser.fill('zip', '94666');
    done();
  });

  world.and('I submit my residence address', function(done) {
    browser.pressButton('Submit', done);
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
    browser.clickLink('addresses', function() {
      browser.fill('street', '123 Main Street');
      browser.fill('city', 'Crazidino');
      browser.select('state', 'CA');
      browser.fill('zip', '94666');
      browser.pressButton('Submit');
      browser.clickLink('Back to application', done);
    });
  });

  world.then('I will see the residence address I entered', function(done) {
    let pageContent = browser.html();
    assert(pageContent.includes('123 Main Street'), 'street address missing from summary');
    assert(pageContent.includes('Crazidino'), 'city missing from summary');
    assert(pageContent.includes('CA'), 'state missing from summary');
    assert(pageContent.includes('94666'), 'zip missing from summary');
    done();
  });

  world.and('I change my residence zip', function(done) {
    browser.fill('zip', '91001');
    done();
  });

  world.then('I will see my updated residence zip', function(done) {
    let pageContent = browser.text('html');
    assert(pageContent.includes('91001'), 'updated zip missing from summary');
    done();
  });
};
