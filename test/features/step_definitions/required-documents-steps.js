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
      });
  });

  world.then('I will see my appointment preparation information', function(done){
    browser
      .text()
      .then((text) => {
        assert(text.includes('We\'ve received your information.'), 'We\'ve received your information not present');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see an additional bullet for medical information', function(done){
    browser
    .text('.bullet-list')
    .then((text) => {
      assert(text.includes('Medical Information'), 'medical information bullet is missing');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.and('I will see a section about medical information', function(done){
    browser
      .waitForSelector('.medical-information-documents')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });

  world.then('I will see an additional bullet for RealID information', function(done){
    browser
    .text('.bullet-list')
    .then((text) => {
      assert(text.includes('Real ID birth date, name and legal presence proof'), 'real id information bullet is missing');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.and('I will see a section about RealID information', function(done){
    browser
      .waitForSelector('.real-id-documents')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
      });
  });

  world.then('I will not see a section about RealID information', function(done){
    browser
      .text('.required-documents')
      .then((text) => {
        assert(!text.includes('Real ID birth date, name and legal presence proof'), 'real id information section is present');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see section about new driver requirements', function(done) {
    browser
      .text('.required-documents')
      .then( (text) => {
        assert(text.includes('New driver requirements'));
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see section about knowledge test', function(done) {
    browser
      .text('.knowledge-test')
      .then( (text) => {
        assert(text.includes('You will need to take a knowledge test'));
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see at the end two additional bullet points and corresponding sections: "Reduced fee eligibility", and "No fee eligibility"', function(done) {
    browser
      .text('.required-documents')
      .then( text => {
        assert(text.includes('Reduced fee eligibility') && text.includes('No fee eligibility') && text.includes('DL 389') && text.includes('DL 933'));
      })
      .then(() => { done(); })
      .catch(done);
  });
};
