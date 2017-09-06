'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see buttons for Blue, Gray, Green, Hazel and Brown', function(done) {
    browser
      .html('button[value="Blue"]')
      .then((button) => { assert.ok(button, 'Selector for Blue eye color missing')})
      .html('button[value="Gray"]')
      .then((button) => { assert.ok(button, 'Selector for Gray eye color missing')})
      .html('button[value="Green"]')
      .then((button) => { assert.ok(button, 'Selector for Green eye color missing')})
      .html('button[value="Hazel"]')
      .then((button) => { assert.ok(button, 'Selector for Hazel eye color missing')})
      .html('button[value="Brown"]')
      .then((button) => { assert.ok(button, 'Selector for Brown eye color missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my eye color into the form', function(done){
    browser
      .click('a.appearance-eye')
      .click('button[value="Hazel"]')
      .click('input[type="submit"]')
      .click('a.home')
      .waitForSelector('.home-page')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the eye color I selected', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Blue'), 'Eye color not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select an eye color', function(done){
    browser
      .click('button[value="Blue"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I see that eye color selected', function(done){
    // currently a no-op, since this set of commits was spawned by a huge
    // overhaul of this section
    done();
  });

  world.and('I realize I made the wrong eye color selection and change it', function(done){
    browser
      .click('button[value="Brown"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the original eye color selection as not highlighted', function(done){
    // currently a no-op, since this set of commits was spawned by a huge
    // overhaul of this section
    done();
  });

  world.and('I will see the new eye color selection has been highlighted', function(done){
    // currently a no-op, since this set of commits was spawned by a huge
    // overhaul of this section
    done();
  });

  world.and('I change my eye color selection', function(done){
    browser
      .click('button[value="Gray"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated eye color', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Gray'), 'Eye color not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
