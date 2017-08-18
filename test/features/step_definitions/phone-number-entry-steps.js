'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see a field for my phone number', function (done) {
    assert(browser.field('phoneNumber'));
    done();
  });

  world.and('I will see a button to submit my phone number', function (done) {
    assert(browser.button('submitContactDetails'));
    done();
  });

  world.and('I enter my phone number', function (done) {
    browser.fill('phoneNumber', '(111) 000-8888');
    done();
  });

  world.and('I click to submit my phone', function (done) {
    browser.pressButton('submitContactDetails');
    done();
  });

  world.then('I will see my phone on that summary', function (done) {
    let text = browser.text('p');
    assert(text.includes('(111) 000-8888'));
    done();
  });

  world.given('I have already entered my phone into the form', function (done) {
    done();
  });

  world.then('I will see the phone I entered', function (done) {
    assert.equal(browser.field('phoneNumber').value, '(111) 000-8888');
    done();
  });

  world.and('I change my phone number', function (done) {
    browser.fill('phoneNumber', '(999) 000-1111');
    browser.pressButton('submitContactDetails');
    done();
  });

  world.then('I will see my updated phone', function (done) {
    let text = browser.text('p');
    assert(text.includes('(999) 000-1111'));
    done();
  });

};