'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see text for ballot by mail - Yes', function(done){
    browser
    .waitForSelector('.faq-ballot-by-mail-yes')
    .then(() => { done(); })
    .catch((err) => {
      throw err;
      done(err);
    });
  });

  world.when('I select ballot by mail Yes', function(done){
    browser
    .click('label[for="ballotByMailYes"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select ballot by mail No', function(done){
    browser
    .click('label[for="ballotByMailNo"]')
    .then(() => { done(); })
    .catch(done);
  });


  world.then('I will see text for ballot by mail - No', function(done){
    browser
    .waitForSelector('.faq-ballot-by-mail-no')
    .then(() => { done(); })
    .catch((err) => {
      throw err;
      done(err);
    });
  });

  world.then('I will see mail by ballot as Yes in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Yes'), 'ballot by mail as Yes not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see mail by ballot as No in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('No'), 'ballot by mail as No not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

};
