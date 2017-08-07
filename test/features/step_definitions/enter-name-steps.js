'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  // world.given('I go to the new online DL application page', function(done) {
  //   browser.visit(world.url('/'), done);
  // });

  world.when('I visit about-me-names', function(done){
    browser.clickLink('about-me-names', done);
  });

  world.then('I will see a field for first, middle and last name', function(done){
    let firstName = browser.field('firstName');
    let middleName = browser.field('middleName');
    let lastName = browser.field('lastName');
    assert.ok(firstName);
    assert.ok(middleName);
    assert.ok(lastName);
    done();
  });

  world.and('I will see a button to submit my name', function(done){
    let submitNamesButton = browser.button('submitNamesButton');
    assert.ok(submitNamesButton);
    done();
  });

  world.and('I enter my first name', function(done){
    browser.fill('firstName', 'FirstName1');
    done();
  });

  world.and('I enter my middle name', function(done){
    browser.fill('middleName', 'MiddleName1');
    done();
  });

  world.and('I enter my last name', function(done){
    browser.fill('lastName', 'LastName1');
    done();
  });

  world.and('I click to submit my name', function(done){
    browser.pressButton('submitNamesButton', done);
  });

  // world.and('I click to return application', function(done) {
  //   browser.clickLink('Back to application', done);
  // });

  world.and('I go to the page with my summary', function(done){
    browser.clickLink('summary', done);
  });
  
  world.then('I will see my name on that summary', function(done){
    let text = browser.text('p');
    assert(text.includes('FirstName1'));
    assert(text.includes('MiddleName1'));
    assert(text.includes('LastName1'));
    done();
  });

  world.given('I have already entered my name into the form', function(done){
    browser.clickLink('Back to application');
    browser.clickLink('about-me-names');
    browser.fill('firstName', 'FirstName1')
        .fill('middleName', 'MiddleName1')
        .fill('lastName', 'LastName1')
        .pressButton('submitNamesButton');    
    browser.clickLink('Back to application', done);
  });

  world.then('I will see the name I entered', function(done){
    let firstName = browser.field('firstName').value;
    let middleName = browser.field('middleName').value;
    let lastName = browser.field('lastName').value;
    assert.equal(firstName, "FirstName1");
    assert.equal(middleName, 'MiddleName1');
    assert.equal(lastName, 'LastName1');
    done();   
  });

  world.and('I change my first name', function(done){
    browser.fill('firstName', 'FirstName2');
    done();
  });

  world.then('I will see my updated name', function(done){
    let text = browser.text('p');
    assert(text.includes('FirstName2'));    
    done();
  });

};
