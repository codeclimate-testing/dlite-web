'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I should see a message \'No information has been entered yet\'', function(done) {
    browser
      .text('p')
      .then((text) => {
        assert.ok(
          text.includes('No information has been entered yet'),
          'Empty summary message not found'
        );
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will not see the link to the summary', function(done) {
    browser
      .exists('a.summary')
      .then((exists) => { assert.ok(!exists, 'summary link present'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I should see a link to the summary', function(done) {
    browser
      .exists('a.summary')
      .then((exists) => { assert.ok(exists, 'summary link not present'); })
      .then(() => { done(); })
      .catch(done);
  });
};
