'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.when('I select no political party', function(done){
    browser
    .click('label[for="No, I do not want to choose a political party"]')
    .then(() => { done(); })
    .catch(done);
  });
};
