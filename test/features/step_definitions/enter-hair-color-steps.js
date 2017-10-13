'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see select buttons for all the hair colors', function (done) {
    browser
      .html('label[for="Auburn"]')
      .then((button) => { assert.ok(button, 'Selector for Auburn hair color missing')})
      .html('label[for="Bald"]')
      .then((button) => { assert.ok(button, 'Selector for Bald hair color missing')})
      .html('label[for="Black"]')
      .then((button) => { assert.ok(button, 'Selector for Black hair color missing')})
      .html('label[for="Blonde"]')
      .then((button) => { assert.ok(button, 'Selector for Blonde hair color missing')})
      .html('label[for="Brown"]')
      .then((button) => { assert.ok(button, 'Selector for Brown hair color missing')})
      .html('label[for="Gray"]')
      .then((button) => { assert.ok(button, 'Selector for Gray hair color missing')})
      .html('label[for="Red"]')
      .then((button) => { assert.ok(button, 'Selector for Red hair color missing')})
      .html('label[for="White"]')
      .then((button) => { assert.ok(button, 'Selector for White hair color missing')})
      .html('label[for="Other"]')
      .then((button) => { assert.ok(button, 'Selector for Other hair color missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I select a hair color', function (done) {
    browser
      .click('label[for="Auburn"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my hair color in the summary', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Auburn'), 'Hair color not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my hair color', function (done) {
    browser
      .click('a.hair-color')
      .waitForSelector('.hair-color-form')
      .click('label[for="Auburn"]')
      .click('input[type="submit"]')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the hair color I chose is selected', function (done) {
    browser
      .text('.button.selected')
      .then((color) => { assert.equal(color, 'Auburn'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my hair color', function (done) {
    browser
      .click('label[for="Red"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated hair color', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Red'), 'Hair color not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
