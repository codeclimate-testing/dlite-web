'use strict';

module.exports = function (world) {
  let browser = world.browser;

  world.then('I see text introducing the page', function (done) {
    browser
      .waitForSelector('.intro-info')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });
};
