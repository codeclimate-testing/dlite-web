'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see select buttons for all the hair colors', function (done) {
    browser
      .html('label[for="hairColorAuburn"]')
      .then((button) => { assert.ok(button, 'Selector for Auburn hair color missing')})
      .html('label[for="hairColorBald"]')
      .then((button) => { assert.ok(button, 'Selector for Bald hair color missing')})
      .html('label[for="hairColorBlack"]')
      .then((button) => { assert.ok(button, 'Selector for Black hair color missing')})
      .html('label[for="hairColorBlonde"]')
      .then((button) => { assert.ok(button, 'Selector for Blonde hair color missing')})
      .html('label[for="hairColorBrown"]')
      .then((button) => { assert.ok(button, 'Selector for Brown hair color missing')})
      .html('label[for="hairColorGray"]')
      .then((button) => { assert.ok(button, 'Selector for Gray hair color missing')})
      .html('label[for="hairColorRed"]')
      .then((button) => { assert.ok(button, 'Selector for Red hair color missing')})
      .html('label[for="hairColorWhite"]')
      .then((button) => { assert.ok(button, 'Selector for White hair color missing')})
      .html('label[for="hairColorOther"]')
      .then((button) => { assert.ok(button, 'Selector for Other hair color missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I select a hair color', function (done) {
    browser
      .click('label[for="hairColorAuburn"]')
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
      .click('label[for="hairColorAuburn"]')
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
      .click('label[for="hairColorRed"]')
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
