'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.given('I have entered my home address and clicked submit', function(done) {
    browser
      .click('a.home-address')
      .waitForSelector('.home-address-form')
      .type('#homeStreet_1', '123 Main Street')
      .type('#homeStreet_2', 'Unit no. 45')
      .type('#homeCity', 'Crazidino')
      .select('#homeState', 'CA')
      .type('#homeZip', '94666')
      .click('input[type="submit"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I see a page labelled correctly for address interstitial page', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('Do you receive mail at this address too?'), 'Address interstitial question label missing');
      assert(text.includes('The DMV will print your Mailing Address on your Driver License'), 'Address interstitial information label missing');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see residence address and mailing address will have the same information', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('123 Main Street'), 'street address missing');
      assert(text.includes('Unit no. 45'), 'unit number missing');
      assert(text.includes('Crazidino'), 'city missing');
      assert(text.includes('CA'), 'state missing');
      assert(text.includes('94666'), 'zip missing');
    })
    .then(() => { done(); })
    .catch(done);
  });

};
