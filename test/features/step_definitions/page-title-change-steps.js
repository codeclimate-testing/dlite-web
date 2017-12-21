'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see page title for legal name', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'DMV: Card application - Get started'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for summary', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'Summary of my application'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for date of birth', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'DMV: License application - My basics'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for address', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'DMV: License application - My basics'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for sex identification', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'DMV: License application - My basics'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for height and weight', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'DMV: License application - My basics'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for social security', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'DMV: License application - My basics'); })
      .then(() => { done(); })
      .catch(done);
  });
};
