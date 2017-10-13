'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see select buttons for English, Chinese, Japanese, Spanish, Thai, Korean, Tagalog, Hindi, Khmer, and Vietnamese', function(done) {
    browser
      .html('label[for="English"]')
      .then((button) => { assert.ok(button, 'Selector for English language missing')})
      .html('label[for="Chinese"]')
      .then((button) => { assert.ok(button, 'Selector for Chinese language missing')})
      .html('label[for="Japanese"]')
      .then((button) => { assert.ok(button, 'Selector for Japanese languager missing')})
      .html('label[for="Spanish"]')
      .then((button) => { assert.ok(button, 'Selector for Spanish languager missing')})
      .html('label[for="Thai"]')
      .then((button) => { assert.ok(button, 'Selector for Thai languager missing')})
      .html('label[for="Korean"]')
      .then((button) => { assert.ok(button, 'Selector for Korean languager missing')})
      .html('label[for="Tagalog"]')
      .then((button) => { assert.ok(button, 'Selector for Tagalog languager missing')})
      .html('label[for="Hindi"]')
      .then((button) => { assert.ok(button, 'Selector for Hindi languager missing')})
      .html('label[for="Khmer"]')
      .then((button) => { assert.ok(button, 'Selector for Khmer languager missing')})
      .html('label[for="Vietnamese"]')
      .then((button) => { assert.ok(button, 'Selector for Vietnamese languager missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select a language', function(done){
    browser
      .click('label[for="Thai"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the language I chose is selected', function(done){
    browser
      .text('.button.selected')
      .then((language) => { assert.equal(language, 'Thai'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my language in the summary', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Thai'), 'Language not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already entered my language', function(done){
    browser
      .click('a.ballot-language')
      .click('label[for="Thai"]')
      .click('input[type="submit"]')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I change my language', function(done){
    browser
      .click('label[for="Korean"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated language in the summary', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Korean'), 'Language not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};
