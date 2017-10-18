'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.and('I will see input fields for entering my DL/ID info', function(done){
    browser
      .exists('#DLIDNumber')
      .then((exists) => { assert.ok(exists, 'input for DL/ID number missing')})
      .exists('#issuedBy')
      .then((exists) => { assert.ok(exists, 'input for issued-by missing')})
      .exists('#month[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for month missing')})
      .exists('#year[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for year missing')})
      .exists('#day[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for day missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I enter my existing DL/ID card number', function(done){
    browser
      .type('#DLIDNumber', 'DMV10001')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I enter the issuing state or country', function(done){
    browser
      .type('#issuedBy', 'California')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I enter the date of DL/ID expiration', function(done){
    browser
      .type('#month', '10')
      .type('#day', '15')
      .type('#year', '2985')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my previous DL/ID information', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('DMV10001'), 'DL/ID number missing');
        assert(text.includes('California'), 'Issuing entity missing');
        assert(text.includes('10/15/2985'), 'expiration date missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

};