'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.when('I select I would like to pre-register to vote', function (done) {
    browser
      .click('label[for="I would like to pre-register to vote"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see I would like to pre-register to vote in summary', function (done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('I would like to pre-register to vote'), 'voter registration choice as I would like to pre-register to vote not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see header for Voting pre-registration', function (done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Voting pre-registration'), 'Voting pre-registration header missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see header for Voting registration', function (done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('Voting registration'), 'Voting registration header missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('Today I turned 19 years old', function(done) {
     let d = new Date();
     let y = d.getFullYear().toString();
     let mm = (d.getMonth() + 1).toString();
     let dd = d.getDay().toString();
     let diff = (y - 19);
     let nineteen = diff.toString();
    browser
      .type('#month', mm)
      .type('#day', dd)
      .type('#year', nineteen)
      .then(() => { done(); })
      .catch(done);
  });
};
