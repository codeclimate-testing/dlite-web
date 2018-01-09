'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see page title for legal name', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'DMV Card application - Get started'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for summary', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'Summary of my application'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see page title for date of birth', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'DMV Card application - Get started'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the application title says "DMV Card application"', function(done){
    browser
      .html('title')
      .then((title) => {assert(title.includes('DMV Card application')); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the application header says "Card application"', function(done){
    browser
      .text('.application-header')
      .then((header) => { assert.equal(header, 'Card application'); })
      .then(() => { done(); })
      .catch(done);
  });


  world.then('I will see the application title says "DMV Identification card application"', function(done){
    browser
      .html('title')
      .then((title) => {assert(title.includes('DMV Identification card application')); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the application header says "Identification card application"', function(done){
    browser
      .text('.application-header')
      .then((header) => { assert.equal(header, 'Identification card application'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the application title says "DMV Drivers license application"', function(done){
    browser
      .html('title')
      .then((title) => {assert(title.includes('DMV Drivers license application')); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the application header says "Drivers license application"', function(done){
    browser
      .text('.application-header')
      .then((header) => { assert.equal(header, 'Drivers license application'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the application title says "DMV Drivers license and ID application"', function(done){
    browser
      .html('title')
      .then((title) => {assert(title.includes('DMV Drivers license and ID application')); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the application header says "Drivers license and ID application"', function(done){
    browser
      .text('.application-header')
      .then((header) => { assert.equal(header, 'Drivers license and ID application'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the page title has postfix " - My basics"', function(done){
    browser
      .html('title')
      .then((title) => {assert(title.includes(' - My basics')); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the page title has postfix " - My history"', function(done){
    browser
      .html('title')
      .then((title) => {assert(title.includes(' - My history')); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the page title has postfix " - Organ donation"', function(done){
    browser
      .html('title')
      .then((title) => {assert(title.includes(' - Organ donation')); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the page title has postfix " - Voting registration"', function(done){
    browser
      .html('title')
      .then((title) => {assert(title.includes(' - Voting registration')); })
      .then(() => { done(); })
      .catch(done);
  });


};
