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
    done(world.pending());
  });

  world.then('I will see the residence address I entered', function(done) {
    done(world.pending());
  });

  world.given('I have already entered my residence address into the form', function(done) {
    done(world.pending());
  });

  world.and('I change my residence zip', function(done) {
    done(world.pending());
  });

  world.then('I will see my updated residence zip', function(done) {
    done(world.pending());
  });
};
