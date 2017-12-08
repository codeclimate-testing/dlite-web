'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('I click yes to getting a real id', function(done) {
      browser
        .click('label[for="getRealIDYes"]')
        .then(() => { done(); })
        .catch(done);
  });

  world.and('I click no to getting a real id', function(done) {
      browser
        .click('label[for="getRealIDNo"]')
        .then(() => { done(); })
        .catch(done)
  });

  world.then('I will see that I am getting a real id', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Real ID: Yes'), 'Real ID missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I am not getting a real id', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Real ID: No'), 'Real ID missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I select ID to have my real id designation', function(done) {
      browser
        .click('label[for="realIdDesignationID"]')
        .then(() => { done(); })
        .catch(done);
  });

  world.then('I will see that I have designated my ID to be my real ID', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Real ID Designation: ID'), 'Real ID has not been designated');
      })
      .then(() => { done(); })
      .catch(done);
  });
}
