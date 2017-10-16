'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see voter registration choice as I am a new voter in California in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('I am a new voter in California'), 'voter registration choice as I am a new voter in California not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see voter registration choice as I am already registered to vote in California in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('I am already registered to vote in California'), 'voter registration choice as I am already registered to vote in California in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

 world.then('I will see voter registration choice as I am eligible to vote, but do not want to register to vote in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('I am eligible to vote, but do not want to register to vote'), 'voter registration choice as I am eligible to vote, but do not want to register to vote saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I see three options on opt out page', function(done) {
    browser
    .html('label[for="I am a new voter in California"]')
    .then((button) => { assert.ok(button, 'Selector for I am a new voter in California missing')})
    .html('label[for="I am already registered to vote in California"]')
    .then((button) => { assert.ok(button, 'Selector for I am already registered to vote in California missing')})
    .html('label[for="I am eligible to vote, but do not want to register to vote"]')
    .then((button) => { assert.ok(button, 'Selector for I am eligible to vote, but do not want to register to vote missing')})
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select I am a new voter in California', function(done){
    browser
    .click('label[for="I am a new voter in California"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select I am already registered to vote in California', function(done){
    browser
    .click('label[for="I am already registered to vote in California"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select I am eligible to vote, but do not want to register to vote', function(done){
    browser
    .click('label[for="I am eligible to vote, but do not want to register to vote"]')
    .then(() => { done(); })
    .catch(done);
  });
};