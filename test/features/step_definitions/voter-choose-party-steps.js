'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.when('I select no political party', function(done){
    browser
    .click('label[for="isSelectedI do not wish to choose a political party"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select choose party Yes', function(done){
    browser
    .click('label[for="isSelectedYes"]')
    .then(() => { done(); })
    .catch(done);
  });

  world.when('I select choose party No', function(done){
    browser
    .click('label[for="isSelectedNo"]')
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

    world.then('I will see buttons for each political party', function(done){
    browser
      .html('label[for="politicalPartyChooseAmerican Independent Party"]')
      .then((button) => { assert.ok(button, 'Selector for American Independent Party missing')})
      .html('label[for="politicalPartyChooseLibertarian Party"]')
      .then((button) => { assert.ok(button, 'Selector for Libertarian Party missing')})
      .html('label[for="politicalPartyChooseDemocratic Party"]')
      .then((button) => { assert.ok(button, 'Selector for Democratic Party missing')})
      .html('label[for="politicalPartyChooseGreen Party"]')
      .then((button) => { assert.ok(button, 'Selector for Green Party missing')})
      .html('label[for="politicalPartyChoosePeace and Freedom Party"]')
      .then((button) => { assert.ok(button, 'Selector for Peace and Freedom Party missing')})
      .html('label[for="politicalPartyChooseRepublican Party"]')
      .then((button) => { assert.ok(button, 'Selector for Republican Party missing')})
      .html('label[for="politicalPartyChooseOther"]')
      .then((button) => { assert.ok(button, 'Selector for Other missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I select a political party button', function(done){
    browser
      .click('label[for="politicalPartyChooseLibertarian Party"]')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see Yes and political party selected', function(done){
    browser
      .text('.button.selected')
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
    .click('label[for="politicalPartyChoosePeace and Freedom Party"]')
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
};
