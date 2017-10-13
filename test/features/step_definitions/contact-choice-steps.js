'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see contact choice as Yes in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Yes'), 'contact choice as Yes not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see contact choice as No in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('No'), 'contact choice as No not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

   world.then('I will see contact choice as Skip Question in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Skip Question'), 'contact choice as Skip Question not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });
  

};
