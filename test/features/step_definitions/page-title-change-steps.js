'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see page title for legal name', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'About me: Legal name'); })
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
      .then((title) => { assert.equal(title, 'About me: Date of birth'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for home address', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'About me: Home address'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for mailing address', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'About me: Mailing address'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for sex identification', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'About me: Sex identification'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for eye color', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'About me: Eye color'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for hair color', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'About me: Hair color'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for height', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'About me: Height'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for weight', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'About me: Weight'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for social security', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'About me: Social security'); })
      .then(() => { done(); })
      .catch(done);
  });

}