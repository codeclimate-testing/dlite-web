'use strict';

module.exports = function (world) {
  let browser = world.browser;

  world.then('I see text for voter preference intro render', function (done) {
    browser
      .waitForSelector('.voter-preferences-intro')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });

  world.then('I see text for updating voter preferences render', function (done) {
    browser
      .waitForSelector('.updating-voter-preferences')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });

  world.then('I see text for voter registration complete page', function (done) {
    browser
      .waitForSelector('.voter-reg-complete')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });

  world.when('I select yes to getting a ballot by mail', function(done) {
    browser
      .click('label[for="ballotByMail-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });
};
