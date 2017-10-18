'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see Yes for having a previous name', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Yes'), 'Previous name not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see No for having a previous name', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('No'), 'Previous name not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

};
