'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.when('I visit /about-me/appearance/hair', function (done) {
    browser.clickLink('hair-color', done);
  });

  world.then('I will see buttons for Auburn, Bald, Black, Blonde, Brown, Gray, Red, White and Other', function (done) {
    assert.ok(browser.button('Auburn'));
    assert.ok(browser.button('Bald'));
    assert.ok(browser.button('Black'));
    assert.ok(browser.button('Blonde'));
    assert.ok(browser.button('Brown'));
    assert.ok(browser.button('Gray'));
    assert.ok(browser.button('Red'));
    assert.ok(browser.button('White'));
    assert.ok(browser.button('Other'));
    done();
  });

  world.and('I will see a button to submit my information about my hair color', function (done) {
    assert.ok(browser.button('submit-hair-color'));
    done();
  });

  world.and('I select a hair color', function (done) {
    browser.pressButton('Auburn', done);
  });

  world.and('I click to submit that description', function (done) {
    browser.pressButton('submit-hair-color', done);
  });

  world.then('I will see my hair color is on that summary', function (done) {
    let text = browser.text('p');
    assert(text.includes('Auburn'));
    done();
  });

  world.given('I have already entered my hair color into the form', function (done) {
    browser.clickLink('Back to application');
    browser.clickLink('hair-color');
    browser.pressButton('Black');
    browser.pressButton('submit-hair-color');
    browser.clickLink('Back to application', done);
  });

  world.then('I will see the hair color I selected', function (done) {
    let text = browser.querySelector('.selected-button').value;
    assert(text.includes('Black'));
    done();
  });

  world.and('I select another hair color', function (done) {
    browser.pressButton('Red', done);
  });

  world.and('I see that color selected', function (done) {
    let text = browser.querySelector('.selected-button').value;
    assert(text.includes('Red'));
    done();
  });

  world.and('I realize I made the wrong selection and change it', function (done) {
    browser.pressButton('Other', done);
  });

  world.then('I will see the original selection as not highlighted', function (done) {
    let text = browser.querySelector('.selected-button').value;
    assert.notEqual(text.includes('Red'));
    done();
  });

  world.and('I will see the new selection has been highlighted', function (done) {
    let text = browser.querySelector('.selected-button').value;
    assert(text.includes('Other'));
    done();
  });

  world.and('I change my hair color selection', function (done) {
    browser.pressButton('Bald', done);
  });

  world.then('I will see my updated hair color', function (done) {
    let text = browser.text('p');
    assert(text.includes('Bald'));
    done();
  });
};