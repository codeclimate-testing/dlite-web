'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a button to edit my cdl application', function(done){
    browser
      .exists('a.cdlLegalName .edit-icon')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the name associated with my cdl application', function(done) {
    browser
    .text('.openApp')
    .then((text) => {
      assert.ok(text.includes('Applying for a commercial license'), 'cdl action not rendered');
      assert.ok(text.includes('CDL last name'));
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see a button to edit my id-and-license application', function(done){
    browser
      .exists('a.legalName .edit-icon')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the name associated with my id-and-license application', function(done) {
    browser
    .text('.openApp')
    .then((text) => {
      assert.ok(text.includes('Applying for a driver license'), 'iddl action not rendered');
      assert.ok(text.includes('DL last name'));
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I click on the button to edit my cdl application', function(done) {
    browser
      .click('a.cdlLegalName .edit-icon')
      .then(() => { done(); })
      .catch(done);
  });
  world.then('I click on the button to edit my id-and-license application', function(done) {
    browser
      .click('a.legalName .edit-icon')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my cdl name', function(done) {
    browser
      .value('#lastName')
      .then((value) => { assert.equal(value, 'CDL last name')})
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will not see my cdl name', function(done) {
    browser
      .value('#lastName')
      .then((value) => { assert.ok(value !== 'CDL last name')})
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my id-and-license name', function(done) {
    browser
      .value('#lastName')
      .then((value) => { assert.equal(value, 'CDL last name')})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click on the button to add a cdl application', function(done) {
    browser
      .click('a.cdlLegalName .add-icon')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click on the button to add an id-and-license application', function(done) {
    browser
      .click('a.legalName .add-icon')
      .then(() => { done(); })
      .catch(done);
  });
};
