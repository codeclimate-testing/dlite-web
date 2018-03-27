'use strict';

module.exports = function (world) {
  let browser = world.browser;

  world.then('I see text for documents needed for a Class C license', function (done) {
    browser
    .waitForSelector('.appointment-preparation')
    .then(() => { done(); })
    .catch((err) => {
      throw err;
    });
  });

  world.and('I click link for required documents', function(done) {
    browser
    .click('a.required-documents-link')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I choose Thai as my application language', function(done) {
    browser
      .click('label[for="language-th"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I choose English as my application language', function(done) {
    browser
      .click('label[for="language-en"]')
      .then(done)
      .catch(done);
  });
};
