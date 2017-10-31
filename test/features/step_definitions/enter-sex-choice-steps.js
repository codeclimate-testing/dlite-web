'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see select buttons for male and female', function(done) {
    browser
      .html('label[for="sexFemale"]')
      .then((button) => { assert.ok(button, 'Selector for Female missing')})
      .html('label[for="sexMale"]')
      .then((button) => { assert.ok(button, 'Selector for Male missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select my sex', function(done) {
    browser
      .click('label[for="sexFemale"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I see my sex selected', function(done){
    browser
      .text('.button.selected')
      .then((value) => { assert.equal(value, 'Female'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my sex listed in the summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Female'), 'Sex not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I have already selected my sex', function(done) {
    browser
      .click('a.sex')
      .waitForSelector('.sex-form')
      .click('label[for="sexFemale"]')
      .click('input[type="submit"]')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the sex I chose is selected', function(done) {
    browser
      .text('.button.selected')
      .then((value) => { assert.equal(value, 'Female'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I change my sex', function(done) {
    browser
      .click('label[for="sexMale"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated sex listed in the summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Male'), 'Sex not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
