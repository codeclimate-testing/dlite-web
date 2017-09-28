'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see text for ballot by mail - Yes', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('Ok, your ballot will now come by mail. You can still vote in-person at your polling place.'), 'missing text for yes ballot by mail');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see text for ballot by mail - No', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('Ok, you vote in-person at your polling place.'), 'missing text for no ballot by mail');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see text for ballot by mail - Skip Section', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('If you are already registered to vote-by-mail: Choosing Skip Question mean you will continue to get yout ballot by mail. If you are a new voter or If you are already registered to vote but have not chosen to vote-by-mail: Choosing Skip Question mean you will need to vote at your local polling place.'), 'missing text for skip ballot by mail');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see mail by ballot as Yes in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Ballot by mail: Yes'), 'ballot by mail as Yes not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see mail by ballot as No in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Ballot by mail: No'), 'ballot by mail as No not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see mail by ballot as No Answer in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Ballot by mail: No Answer'), 'ballot by mail as No Answer not saved in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

};
