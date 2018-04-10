'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.when('I select no political party', function(done){
    browser
    .click('label[for="isSelected-Skip"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select choose party Yes', function(done){
    browser
    .click('label[for="isSelected-Yes"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select choose party No', function(done){
    browser
      .click('label[for="isSelected-No"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see Yes for my political party choice', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Yes'), 'Yes not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see No for my political party choice', function(done) {
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('I do not wish to choose a political party'), 'I do not wish to choose a political party not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see that I declined to choose a political party', function(done) {
    browser
      .text('.summary')
      .then( text => {
        assert(text.includes('Political partyNo answer'), 'wrong political party answer')
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see buttons for each political party', function(done){
    browser
      .html('label[for="politicalPartyChoose-American Independent Party"]')
      .then((button) => { assert.ok(button, 'Selector for American Independent Party missing')})
      .html('label[for="politicalPartyChoose-Libertarian Party"]')
      .then((button) => { assert.ok(button, 'Selector for Libertarian Party missing')})
      .html('label[for="politicalPartyChoose-Democratic Party"]')
      .then((button) => { assert.ok(button, 'Selector for Democratic Party missing')})
      .html('label[for="politicalPartyChoose-Green Party"]')
      .then((button) => { assert.ok(button, 'Selector for Green Party missing')})
      .html('label[for="politicalPartyChoose-Peace and Freedom Party"]')
      .then((button) => { assert.ok(button, 'Selector for Peace and Freedom Party missing')})
      .html('label[for="politicalPartyChoose-Republican Party"]')
      .then((button) => { assert.ok(button, 'Selector for Republican Party missing')})
      .html('label[for="politicalPartyChoose-Other"]')
      .then((button) => { assert.ok(button, 'Selector for Other missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select a political party button', function(done){
    browser
      .click('label[for="politicalPartyChoose-Libertarian Party"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see Yes and political party selected', function(done){
    browser
      .text('.selected .text-region')
      .then((color) => { assert.equal(color, 'YesLibertarian Party'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my political party in summary', function(done){
    browser
      .text()
      .then((text) => {
        assert.ok(text.includes('Libertarian Party'), 'Political party preference not saved in summary');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I change my political party', function(done){
    browser
    .click('label[for="politicalPartyChoose-Peace and Freedom Party"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see my political party updated in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert.ok(text.includes('Peace and Freedom Party'), 'Political party preference not updated in summary');
    })
    .then(() => { done(); })
    .catch(done);
  });

  world.and('I will not see political party section in summary', function(done) {
    browser
    .text()
    .then((text) => {
      assert(!text.includes('Peace and Freedom Party'), 'political party section is present');
    })
    .then(() => { done(); })
    .catch(done);
  });
};
