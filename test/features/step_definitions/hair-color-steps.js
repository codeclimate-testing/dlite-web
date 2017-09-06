'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see buttons for Auburn, Bald, Black, Blonde, Brown, Gray, Red, White and Other', function (done) {
    browser
      .html('button[value="Auburn"]')
      .then((button) => { assert.ok(button, 'Selector for Auburn hair color missing')})
      .html('button[value="Bald"]')
      .then((button) => { assert.ok(button, 'Selector for Bald hair color missing')})
      .html('button[value="Black"]')
      .then((button) => { assert.ok(button, 'Selector for Black hair color missing')})
      .html('button[value="Blonde"]')
      .then((button) => { assert.ok(button, 'Selector for Blonde hair color missing')})
      .html('button[value="Brown"]')
      .then((button) => { assert.ok(button, 'Selector for Brown hair color missing')})
      .html('button[value="Gray"]')
      .then((button) => { assert.ok(button, 'Selector for Gray hair color missing')})
      .html('button[value="Red"]')
      .then((button) => { assert.ok(button, 'Selector for Red hair color missing')})
      .html('button[value="White"]')
      .then((button) => { assert.ok(button, 'Selector for White hair color missing')})
      .html('button[value="Other"]')
      .then((button) => { assert.ok(button, 'Selector for Other hair color missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I select a hair color', function (done) {
    browser
      .click('button[value="Auburn"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my hair color is on that summary', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Auburn'), 'Hair color not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my hair color into the form', function (done) {
    browser
      .click('a.appearance-hair')
      .waitForSelector('.hair-color-form')
      .click('button[value="Auburn"]')
      .click('input[type="submit"]')
      .click('a.home')
      .waitForSelector('.home-page')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the hair color I selected', function (done) {
    // currently a no-op, since this set of commits was spawned by a huge
    // overhaul of this section
    done();
  });

  world.and('I select another hair color', function (done) {
    browser
      .click('button[value="Red"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I see that color selected', function (done) {
    // currently a no-op, since this set of commits was spawned by a huge
    // overhaul of this section
    done();
  });

  world.and('I realize I made the wrong selection and change it', function (done) {
    browser
      .click('button[value="Other"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the original selection as not highlighted', function (done) {
    // currently a no-op, since this set of commits was spawned by a huge
    // overhaul of this section
    done();
  });

  world.and('I will see the new selection has been highlighted', function (done) {
    // currently a no-op, since this set of commits was spawned by a huge
    // overhaul of this section
    done();
  });

  world.and('I change my hair color selection', function (done) {
    browser
      .click('button[value="Bald"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated hair color', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Bald'), 'Hair color not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
