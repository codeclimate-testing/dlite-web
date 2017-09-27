'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I see text for voter preference intro', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('We will now ask for your preferences on the following voter registration details:'), 'voter preference intro page text 1 is incorrect');
      assert.ok(text.includes('Political Party'), 'voter preference intro page text 2 is incorrect');
      assert.ok(text.includes('You can become a member of a political party or change your party membership.'), 'voter preference intro page text 3 is incorrect');
      assert.ok(text.includes('Vote by mail'), 'voter preference intro page text 4 is incorrect');
      assert.ok(text.includes('Choose if you want to get your ballot by mail.'), 'voter preference intro page text 5 is incorrect');
      assert.ok(text.includes('You can always change your mind and vote at a polling place.'), 'voter preference intro page text 6 is incorrect');
      assert.ok(text.includes('Language'), 'voter preference intro page text 7 is incorrect');
      assert.ok(text.includes('Choose what language you would like to get your voting materials in.'), 'voter preference intro page text 8 is incorrect');
      assert.ok(text.includes('Contact Information'), 'voter preference intro page text 9 is incorrect');
      assert.ok(text.includes('How would you like election campaigns to reach you — if at all?'), 'voter preference intro page text 10 is incorrect');
    })
    .then(() => { done(); })
    .catch(done);
  });

};