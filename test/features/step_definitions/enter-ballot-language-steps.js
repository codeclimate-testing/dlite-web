'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see select buttons for English, Chinese, Japanese, Spanish, Thai, Korean, Tagalog, Hindi, Khmer, and Vietnamese', function(done) {
    browser
      .html('label[for="ballotLanguage-English"]')
      .then((button) => { assert.ok(button, 'Selector for English language missing')})
      .html('label[for="ballotLanguage-Chinese"]')
      .then((button) => { assert.ok(button, 'Selector for Chinese language missing')})
      .html('label[for="ballotLanguage-Japanese"]')
      .then((button) => { assert.ok(button, 'Selector for Japanese languager missing')})
      .html('label[for="ballotLanguage-Spanish"]')
      .then((button) => { assert.ok(button, 'Selector for Spanish languager missing')})
      .html('label[for="ballotLanguage-Thai"]')
      .then((button) => { assert.ok(button, 'Selector for Thai languager missing')})
      .html('label[for="ballotLanguage-Korean"]')
      .then((button) => { assert.ok(button, 'Selector for Korean languager missing')})
      .html('label[for="ballotLanguage-Tagalog"]')
      .then((button) => { assert.ok(button, 'Selector for Tagalog languager missing')})
      .html('label[for="ballotLanguage-Hindi"]')
      .then((button) => { assert.ok(button, 'Selector for Hindi languager missing')})
      .html('label[for="ballotLanguage-Khmer"]')
      .then((button) => { assert.ok(button, 'Selector for Khmer languager missing')})
      .html('label[for="ballotLanguage-Vietnamese"]')
      .then((button) => { assert.ok(button, 'Selector for Vietnamese languager missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select a language', function(done){
    browser
      .click('label[for="ballotLanguage-th"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the language I chose is selected', function(done){
    browser
      .text('.selected')
      .then(text => { assert.ok(text.includes('Thai'), 'Language not saved in summary'); })
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
      .click('label[for="ballotLanguage-th"]')
      .click('button.forward')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I change my language', function(done){
    browser
      .click('label[for="ballotLanguage-ko"]')
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

  world.and('I will not see language section in the summary', function(done) {
    browser
    .text()
    .then((text) => {
      assert(!text.includes('Korean'), 'language section is present');
    })
    .then(() => { done(); })
    .catch(done);
  });
};
