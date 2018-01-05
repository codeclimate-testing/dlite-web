'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('I will see input fields for date and reason for suspension', function(done){
    browser
      .exists('#month[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for month missing')})
      .exists('#year[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for year missing')})
      .exists('#day[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for day missing')})
      .exists('#reason')
      .then((exists) => { assert.ok(exists, 'input for reason missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select suspended license Yes', function(done){
    browser
    .click('label[for="isSuspended-Yes"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select suspended license No', function(done){
    browser
    .click('label[for="isSuspended-No"]')
    .then(() => { done(); })
    .catch(done);
  });


  world.when('I enter date of my license suspension', function(done){
    browser
      .type('#month', '10')
      .type('#day', '15')
      .type('#year', '1985')
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I enter the reason for my license suspension', function(done){
    browser
      .type('#reason', 'I was not very responsible, I guess!')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the date and reason for my license suspension', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('10/15/1985'), 'license suspension date missing');
        assert(text.includes('I was not very responsible, I guess!'), 'license suspension reason missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see Yes in my suspended license selection', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('Yes'), 'is license suspended value missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see No in my suspended license selection', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('No'), 'is license suspended value missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

};
