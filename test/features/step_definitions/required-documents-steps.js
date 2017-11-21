'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see proof of social security section', function (done) {
    browser
    .waitForSelector('.proof-of-ssn-documents')
    .then(() => { done(); })
    .catch((err) => {
      throw err;
      done(err);
    });
  });

  world.and('I will not see the proof of social security section', function(done) {
    browser
    .text()
    .then((text) => {
      assert(!text.includes('Proof of Social Security Number'), 'social security section is present');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see an additional bullet for proving my veterans status', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('Proof of veterans service'), 'veterans service section is missing');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.and('I will see a section letting me know what I need to do to prove my status', function(done){
    browser
      .waitForSelector('.proof-of-veterans-service')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
        done(err);
      });
  });

  world.then('I will not see any information about proving veterans status', function(done){
    browser
      .text()
      .then((text) => {
        assert(!text.includes('Proof of veterans service'), 'veterans service section is present');
      })
      .then(() => { done(); })
      .catch(done);
  });

};
