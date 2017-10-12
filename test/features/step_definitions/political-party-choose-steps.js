'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.when('I select no political party', function(done){
    browser
    .click('label[for="I do not wish to choose a political party"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see Yes for my political party choice', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Yes'), 'Yes not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see No for my political party choice', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('I do not wish to choose a political party'), 'I do not wish to choose a political party not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

};
