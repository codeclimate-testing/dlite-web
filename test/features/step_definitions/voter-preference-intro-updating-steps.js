'use strict';

module.exports = function (world) {
  let browser = world.browser;

  world.then('I see text for updating voter preferences render', function (done) {
    browser
      .waitForSelector('.voter-preferences-intro')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });
};
