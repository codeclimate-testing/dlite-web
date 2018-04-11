'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see 4 open applications', function(done){
    browser
      .exists('.question.1')
      .exists('.question.2')
      .exists('.question.3')
      .exists('.question.4')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see a button to edit a CDL application id 1', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('CDL person'), 'name not rendered');
      assert.ok(text.includes('Applying for a commercial driver license'));
      assert.ok(text.includes('Submitted:'));
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see a button to edit a DL application id 2', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('DL person'), 'name not rendered');
      assert.ok(text.includes('Applying for a driver license'));
      assert.ok(text.includes('Submitted: '));
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see a button to edit an ID and DL application id 3', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('new ID and DL person'), 'name not rendered');
      assert.ok(text.includes('Applying for a driver license and an ID card'));
      assert.ok(text.includes('Submitted: '));
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see a button to edit ID and DL application id 4', function(done) {
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('renew ID and change DL person'), 'name not rendered');
      assert.ok(text.includes('Applying for a driver license and an ID card'));
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I click on the button to edit id 1', function(done) {
    browser
      .click('a.cdlLegalName.1')
      .then(() => { done(); })
      .catch(done);
  });
  world.then('I click on the button to edit id 2', function(done) {
    browser
      .click('a.legalName.2')
      .then(() => { done(); })
      .catch(done);
  });
  world.then('I click on the button to edit id 3', function(done) {
    browser
      .click('a.legalName.3')
      .then(() => { done(); })
      .catch(done);
  });
  world.then('I click on the button to edit id 4', function(done) {
    browser
      .click('a.legalName.4')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my cdl name', function(done) {
    browser
      .value('#lastName')
      .then((value) => {
        assert.ok(value.includes('CDL person'), 'existing name not found in form');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will not see my cdl name', function(done) {
    browser
      .value('#lastName')
      .then((value) => {
        assert.ok(!value.includes('CDL person'), 'existing name found in form');
        assert.equal(value, '');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my id 2 name', function(done) {
    browser
      .value('#lastName')
      .then((value) => { assert.equal(value, 'DL person')})
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my id 3 name', function(done) {
    browser
      .value('#lastName')
      .then((value) => { assert.equal(value, 'new ID and DL person')})
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my id 4 name', function(done) {
    browser
      .value('#lastName')
      .then((value) => { assert.equal(value, 'renew ID and change DL person')})
      .then(() => { done(); })
      .catch(done);
  });
  world.then('I will see my cdl info saved in the summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('CDL person'), 'existing name not found in summary');
        assert.ok(text.includes('Applying for the first time'), 'action not found in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });
  world.then('I will see my id 2 info saved in the summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('DL person'));
        assert.ok(text.includes('I amReplacing'));
      })
      .then(() => { done(); })
      .catch(done);
  });
  world.then('I will see my id 3 info saved in the summary', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('new ID and DL person'));
        assert.ok(text.includes('Applying for the first time'));
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that getting a new CDL is already selected', function(done) {
    browser
      .exists('.selected label[for="cdlWDYWTDT -new"]')
      .then(done)
      .catch(done);
  });

  world.then('I will see that I am getting a new card', function(done) {
    browser
      .waitForSelector('.selected label[for="cardAction-new"]')
      .then(done)
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

  world.then('I will see a button to add a CDL application', function(done) {
    browser
      .exists('.addApp a.cdlLegalName')
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click the button to add a CDL application', function(done) {
    browser
      .click('.addApp a.cdlLegalName')
      .then(() => { done(); })
      .catch(done);
  });
};
