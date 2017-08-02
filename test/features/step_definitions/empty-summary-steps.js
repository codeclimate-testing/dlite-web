'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.given('I go to the new online DL application', function(done) {
    browser.visit(world.url('/'), done);
  });

  world.when('I visit \'/summary\'', function(done) {
    browser.visit(world.url('/summary'), done);
  });

  world.then('I should see a message \'No information has been entered yet\'', function(done) {
    let text = browser.text('p');
    assert(text.includes('No information has been entered yet'));
    done();
  });
};
