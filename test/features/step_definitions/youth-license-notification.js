'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.and('I will see a message asking if I would like an ID instead', function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('Would you like to get a California ID card instead?') || text.includes('Do you want to apply for an ID instead?'), 'message not on page')
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I click to get an ID instead', function(done) {
    browser
      .click('label[for="youthIDInstead-Yes"]')
      .then(() => { done(); })
      .catch(done);
  });


  world.then('I will see a message letting me know that I cannot complete my license application in office until I am 15.5', function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('If you go to a DMV office sooner to complete your application, you can only apply for a Junior permit.'), 'message not on page')
      })
      .then( () => { done(); })
      .catch(done);
  });

  world.then("I will see a notification at the top letting me know I can't yet come in to complete my DL application", function(done) {
    browser
      .text('.summary')
      .then( text => {
        assert(text.includes('If you go to the DMV office to finish your license application before you are 15.5 years old, you can only get a Junior permit. These permits are issued only in exceptional circumstances.'), 'message not on page')
      })
      .then( () => { done(); })
      .catch(done);
  });

  world.and("I will also see that I can make an appointment at any time to get my ID", function(done) {
    browser
      .text()
      .then( text => {
        assert(text.includes('You are eligible to complete your ID application in the office today.'), 'message not on page')
      })
      .then( () => { done(); })
      .catch(done);
  });

  world.and("I will see a message saying that I can't apply for a license until I am 15", function(done) {
    browser
      .text('.youth-license-notification')
      .then( text => {
        assert(text.includes('You must be 15 years old to start an application for a learners permit.'), 'message not on page')
      })
      .then( () => { done(); })
      .catch(done);
  });

  world.then('I will see a message saying that I should come back when I am 15', function(done) {
    browser
      .text('.youth-license-notification')
      .then( text => {
        assert(text.includes('Ok, please come back when you turn 15.'), 'message not on page')
      })
      .then( () => { done(); })
      .catch(done);
  });

  world.then('I will see an info message box show up letting me know limitations on my CDL based on my age', function(done) {
    browser
      .text()
      .then( (text) => {
        assert(text.includes('Applicants under 21 years of age are not allowed to engage in interstate commerce or transport hazardous materials.'), 'message not on page')
      })
      .then( () => { done(); })
      .catch(done);
  });


  world.then('I will see an info message box letting me know I must be 18 years or older', function(done) {
    browser
      .text()
      .then((text) => {
        assert(text.includes('You must be 18 years or older to apply for a commercial driver license in California.'), 'text not rendered');
      })
      .then(() => { done(); })
      .catch(done);
  });

};
