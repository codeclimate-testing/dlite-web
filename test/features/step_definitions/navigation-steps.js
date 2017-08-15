'use strict';

module.exports = function(world) {
  let browser = world.browser;

  world.given('I go to the new online DL application', function(done) {
    browser.visit(world.url('/'), done);
  });

  world.and('I go to the page with my summary', function(done){
    browser.clickLink('summary', done);
  });

  world.and('I return to the home page', function(done) {
    browser.clickLink('Back to application', done);
  });
};
