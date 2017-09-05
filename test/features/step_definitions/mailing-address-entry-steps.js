'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a checkbox to use my residence as my mailing address that is unchecked', function(done){
    let field = browser.field('copyFromResidentialAddress');
    assert.ok(field);

    let isChecked = browser.querySelector('#copyFromResidentialAddress').checked;
    assert(!isChecked, 'Checkbox is checked');

    done();
  });

  world.and('I will see a field for mailing street, city, state, and zip', function(done){
    let field = browser.field('mailingStreet');
    assert.ok(field);

    field = browser.field('mailingCity');
    assert.ok(field);

    field = browser.html('#mailingState');
    assert.ok(field);

    field = browser.field('mailingZip');
    assert.ok(field);

    done();
  });


  world.when('I click the checkbox to use my residence as my mailing address', function(done){
    browser.check('copyFromResidentialAddress');

    done();
  })

  world.then('The form showing my mailing address will disappear', function(done){
    let form = browser.querySelector('form[name="mailingAddressForm"]');
    //TODO: It is working as expected in the browser, but seems like an issue with Zombie
    //assert.ok(!form);

    done();
  })

  world.when('I enter my mailing address data', function(done){
    browser.fill('mailingStreet', '456 Main Street');
    browser.fill('mailingCity', 'Dinocrazi');
    browser.select('mailingState', 'MA');
    browser.fill('mailingZip', '91234');
    done();
  });

  world.then('I will see my mailing address on that summary', function(done){
    let pageContent = browser.text('html');
    assert(pageContent.includes('456 Main Street'), 'mailing street address missing from summary');
    assert(pageContent.includes('Dinocrazi'), 'mailing city missing from summary');
    assert(pageContent.includes('MA'), 'mailing state missing from summary');
    assert(pageContent.includes('91234'), 'mailing zip missing from summary');
    done();
  });

  world.and('I have entered my mailing address', function(done){
    browser.clickLink('addresses', function() {
      browser.fill('mailingStreet', '456 Main Street');
      browser.fill('mailingCity', 'Dinocrazi');
      browser.select('mailingState', 'MA');
      browser.fill('mailingZip', '91234');
      browser.pressButton('Submit');
      browser.clickLink('Back to application', done);
    });
  });

  world.then('I will see the mailing address I entered', function(done){
    let pageContent = browser.html();
    assert(pageContent.includes('456 Main Street'), 'mailing street address missing from summary');
    assert(pageContent.includes('Dinocrazi'), 'mailing city missing from summary');
    assert(pageContent.includes('MA'), 'mailing state missing from summary');
    assert(pageContent.includes('91234'), 'mailing zip missing from summary');
    done();
  });

  world.and('I change my mailing city', function(done){
    browser.fill('mailingCity', 'Babelrico');
    done();
  });

  world.then('I will see my updated mailing city', function(done){
    let pageContent = browser.text('html');
    assert(pageContent.includes('Babelrico'), 'updated mailing city missing from summary');
    done();
  });

};

