'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.given('I go to the new online DL application', function(done) {
    browser.visit(world.url('/'), done);
  });

  world.when('I click to see the summary', function(done) {
    browser.clickLink('summary', done);
  });

  world.then('I should see a message \'No information has been entered yet\'', function(done) {
    let text = browser.text('p');
    assert(text.includes('No information has been entered yet'));
    done();
  });

  world.and('I will not see the link to the summary', function(done) {
    let summaryUrl = world.url('/summary');
    let links = browser.querySelectorAll(`a[href="${summaryUrl}"]`);
    assert.equal(links.length, 0);
    done();
  });

  world.and('I click to return application', function(done) {
    browser.clickLink('Back to application', done);
  });

  world.then('I should see a link to the summary', function(done) {
    let links = browser.querySelectorAll('a');
    assert.equal(links[0].href, world.url('/summary'));
    done();
  });
};
