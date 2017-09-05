'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a checkbox to use my residence as my mailing address that is unchecked', function(done){
    browser
      .exists('#copyFromResidentialAddress')
      .then((exists) => { assert.ok(exists, 'checkbox for using residential address for mailing not present')})
      .attribute('#copyFromResidentialAddress', 'checked')
      .then((checked) => { assert.ok(!checked, 'Checkbox should not be checked'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see a field for mailing street, city, state, and zip', function(done){
    browser
      .exists('#mailingStreet')
      .then((exists) => {
        assert.ok(exists, 'Street address input not found');
      })
      .exists('#mailingCity')
      .then((exists) => {
        assert.ok(exists, 'City input not found');
      })
      .exists('#mailingState')
      .then((exists) => {
        assert.ok(exists, 'State input not found');
      })
      .exists('#mailingZip')
      .then((exists) => {
        assert.ok(exists, 'Zip input not found');
      })
      .then(() => { done(); })
      .catch(done);
  });


  world.when('I click the checkbox to use my residence as my mailing address', function(done){
    browser
      .click('#copyFromResidentialAddress')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('The form showing my mailing address will disappear', function(done){
    browser
      .exists('form[name="mailingAddressForm"]')
      .then((exists) => {
        assert.ok(!exists, 'Mailing address form still rendered');
      })
      .then(() => { done(); })
      .catch(done);
  })

  world.when('I enter my mailing address data', function(done){
    browser
      .type('#mailingStreet', '456 Main Street')
      .type('#mailingCity', 'Dinocrazi')
      .select('#mailingState', 'MA')
      .type('#mailingZip', '91234')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my mailing address on that summary', function(done){
    browser
      .text()
      .text()
      .then((text) => {
        assert(text.includes('456 Main Street'), 'mailing street address missing from summary');
        assert(text.includes('Dinocrazi'), 'mailing city missing from summary');
        assert(text.includes('91234'), 'mailing zip missing from summary');
        assert(text.includes('MA'), 'mailing state missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I have entered my mailing address', function(done){
    browser
      .click('a.addresses')
      .waitForSelector('.both-addresses')
      .type('#mailingStreet', '456 Main Street')
      .type('#mailingCity', 'Dinocrazi')
      .select('#mailingState', 'MA')
      .type('#mailingZip', '91234')
      .click('input[type="submit"]')
      .click('a.home')
      .waitForSelector('.home-page')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the mailing address I entered', function(done){
    browser
      .html()
      .then((text) => {
        assert(text.includes('456 Main Street'), 'mailing street address missing from form');
        assert(text.includes('Dinocrazi'), 'mailing city missing from form');
        assert(text.includes('MA'), 'mailing state missing from form');
        assert(text.includes('91234'), 'mailing zip missing from form');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I change my mailing city', function(done){
    browser
      .type('#mailingCity', 'Babelrico')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated mailing city', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Babelrico'), 'updated mailing city missing from summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
};

