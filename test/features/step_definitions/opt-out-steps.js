'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see voter registration choice as I want to register to vote in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('I want to register to vote'), 'voter registration choice as I want to register to vote not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see voter registration choice as I am already registered to vote in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('I am already registered to vote'), 'voter registration choice as I am already registered to vote in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

 world.then('I will see voter registration choice as I am eligible but to not want to be registered to vote at this time in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('I am eligible but to not want to be registered to vote at this time'), 'voter registration choice as I am eligible but to not want to be registered to vote at this time saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });
  
  world.then('I see three buttons labelled I want to register to vote, I am already registered to vote,  and I am eligible but to not want to be registered to vote at this time', function(done) {
    browser
    .html('label[for="I want to register to vote"]')
    .then((button) => { assert.ok(button, 'Selector for I want to register to vote missing')})
    .html('label[for="I am already registered to vote"]')
    .then((button) => { assert.ok(button, 'Selector for I am already registered to vote missing')})
    .html('label[for="I am eligible but to not want to be registered to vote at this time"]')
    .then((button) => { assert.ok(button, 'Selector for I am eligible but to not want to be registered to vote at this time missing')})
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select I want to register to vote', function(done){
    browser
    .click('label[for="I want to register to vote"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select I am already registered to vote', function(done){
    browser
    .click('label[for="I am already registered to vote"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select I am eligible but to not want to be registered to vote at this time', function(done){
    browser
    .click('label[for="I am eligible but to not want to be registered to vote at this time"]')
    .then(() => { done(); })
    .catch(done);
  });
};