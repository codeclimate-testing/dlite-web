'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see contact methods as Add or Update in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Add or Update'), 'contact methods as Add or Update not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see contact methods as Remove in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Remove'), 'contact methods as Remove not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

   world.then('I will see contact methods as Skip Question in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Skip Question'), 'contact methods as Skip Question not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });
  

};