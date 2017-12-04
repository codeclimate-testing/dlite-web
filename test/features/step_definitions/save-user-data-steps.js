'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('The Continue button now reads Save and Continue', function(done) {
    browser
      .exists("button:contains('Save and Continue')")
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I click the save and continue button', function(done) {
    browser
      .click('input[type="submit"]')
      .wait(2500)
      .then(() => { done(); })
      .catch(done);
  });
};
