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

 world.then('I will see I am already registered to vote as voter registration in summary', function(done) {
     browser
      .text()
      .then((text) => {
        assert.ok(text.includes('already registered to vote'), 'Already registered to vote not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
    
};