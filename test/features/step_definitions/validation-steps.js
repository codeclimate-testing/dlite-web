'use strict'

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see an error message telling me I need to make a selection', function(done) {
    browser
      .exists('.error')
      .then( input => {
        assert.ok(input, 'Please select what you want to do.')
      })
      .then( () => {done();})
      .catch(done);
  });

  world.then('I will see an error message telling me to enter my name', function(done) {
    browser
      .exists('.error')
      .then( input => {
        assert.ok(input, 'Please enter your last name.')
      })
      .then(done)
      .catch(done);
  });

  world.then('I will see an error message telling me to enter a valid date', function(done) {
    browser
      .exists('.error')
      .then( input => {
        assert.ok(input, 'Please enter a valid date.')
      })
      .then(done)
      .catch(done);
  });

  world.then('I will see the error message disapper', function(done) {
    browser
      .text()
      .then( text => {
        assert.ok(!text.includes('Please select what you want to do.'), 'error text is still on page')
      })
      .then( () => { done(); })
      .catch( done );
  });

};