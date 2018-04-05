'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;
  world.given('I go to the new online DL application', function(done) {
    browser
      .on('consoleMessage', function( msg ){
        console.log('log', msg);
      })
      .on('error', function( err ){
        console.log('error', err);
      })
      .open(world.url('/'))
      .waitForSelector('.choose-language-form')
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already filled out my ID application', function(done) {
    browser
      .on('consoleMessage', function( msg ){
        console.log('log', msg);
      })
      .on('error', function( err ){
        console.log('error', err);
      })
      .open(world.url('/'))
      .evaluate(function() {
        window.__reactHistory.push(('/apply/id-and-license/what-do-you-want-to-do-today'));
      })
      .click('label[for="cardAction-new"]')
      .click('.forward')
      .click('label[for="ID"]')
      .evaluate(function() {
        window.__reactHistory.push('/apply/id-and-license/summary')
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.given('I have already filled out my DL application', function(done) {
    browser
      .on('consoleMessage', function( msg ){
        console.log('log', msg);
      })
      .on('error', function( err ){
        console.log('error', err);
      })
      .open(world.url('/'))
      .evaluate(function() {
        window.__reactHistory.push(('/apply/id-and-license/what-do-you-want-to-do-today'));
      })
      .click('label[for="cardAction-new"]')
      .click('.forward')
      .click('label[for="DL"]')
      .evaluate(function() {
        window.__reactHistory.push('/apply/id-and-license/summary')
      })
      .then(done)
      .catch(done);
  });

  world.given('I have already filled out an application to replace a DL', function(done) {
    browser
      .on('consoleMessage', function( msg ){
        console.log('log', msg);
      })
      .on('error', function( err ){
        console.log('error', err);
      })
      .open(world.url('/'))
      .evaluate(function() {
        window.__reactHistory.push(('/apply/id-and-license/what-do-you-want-to-do-today'));
      })
      .click('label[for="cardAction-replace"]')
      .click('.forward')
      .click('label[for="replace-DL"]')
      .click('.forward')
      .type(
        '#number', '1111zae'
      )
      .evaluate(function() {
        window.__reactHistory.push('/apply/id-and-license/summary')
      })
      .then(done)
      .catch(done);
  });

  world.given('I have already filled out an application to correct a DL', function(done) {
    browser
      .on('consoleMessage', function( msg ){
        console.log('log', msg);
      })
      .on('error', function( err ){
        console.log('error', err);
      })
      .open(world.url('/'))
      .evaluate(function() {
        window.__reactHistory.push(('/apply/id-and-license/what-do-you-want-to-do-today'));
      })
      .click('label[for="cardAction-change"]')
      .click('.forward')
      .click('label[for="change-DL"]')
      .click('.forward')
      .type(
        '#number', '1111zae'
      )
      .click('.forward')
      .click('label[for="DL-correctOrUpdate-correct"]')
      .evaluate(function() {
        window.__reactHistory.push('/apply/id-and-license/summary')
      })
      .then(done)
      .catch(done);
  });

  world.given('I have already filled out my CDL application', function(done) {
    browser
      .on('consoleMessage', function( msg ){
        console.log('log', msg);
      })
      .on('error', function( err ){
        console.log('error', err);
      })
      .open(world.url('/'))
      .evaluate(function() {
        window.__reactHistory.push(('/apply/cdl/what-do-you-want-to-do-today'));
      })
      .click('label[for="cdlWDYWTDT -new"]')
      .evaluate(function() {
        window.__reactHistory.push('/apply/cdl/summary')
      })
      .then(done)
      .catch(done);
  });

  world.given('I have already filled out an application to replace a CDL', function(done) {
    browser
      .on('consoleMessage', function( msg ){
        console.log('log', msg);
      })
      .on('error', function( err ){
        console.log('error', err);
      })
      .open(world.url('/'))
      .evaluate(function() {
        window.__reactHistory.push(('/apply/cdl/what-do-you-want-to-do-today'));
      })
      .click('label[for="cdlWDYWTDT -replace"]')
      .click('.forward')
      .type(
        '#number', '1111zae'
      )
      .evaluate(function() {
        window.__reactHistory.push('/apply/cdl/summary')
      })
      .then(done)
      .catch(done);
  });
};
