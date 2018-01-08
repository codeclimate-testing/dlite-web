'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I will see page title for legal name', function(done){
    browser
      .html('title')
      .then((title) => { assert.equal(title, 'DMV card application - Get started'); })
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
      .then((title) => { assert.equal(title, 'DMV card application - Get started'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the application title says "DMV card application"', function(done){
    browser
      .html('title')
      .then((title) => {assert(title.includes('DMV card application')); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the application header says "DMV card application"', function(done){
    browser
      .text('.application-header')
      .then((header) => { assert.equal(header, 'DMV card application'); })
      .then(() => { done(); })
      .catch(done);
  });


  world.then('I will see the application title says "DMV identification card application"', function(done){
    browser
      .html('title')
      .then((title) => {assert(title.includes('DMV identification card application')); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the application header says "DMV identification card application"', function(done){
    browser
      .text('.application-header')
      .then((header) => { assert.equal(header, 'DMV identification card application'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the application title says "DMV drivers license application"', function(done){
    browser
      .html('title')
      .then((title) => {assert(title.includes('DMV drivers license application')); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the application header says "DMV drivers license application"', function(done){
    browser
      .text('.application-header')
      .then((header) => { assert.equal(header, 'DMV drivers license application'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the application title says "DMV drivers license and ID application"', function(done){
    browser
      .html('title')
      .then((title) => {assert(title.includes('DMV drivers license and ID application')); })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I will see the application header says "DMV drivers license and ID application"', function(done){
    browser
      .text('.application-header')
      .then((header) => { assert.equal(header, 'DMV drivers license and ID application'); })
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
