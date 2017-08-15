'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.when('I visit /about-me/contact', function(done){
    browser.clickLink('about-me-contact', done);
	});

	world.then('I will see a field for email', function(done){
		assert(browser.field('emailAddress'));
		done();
	});

	world.and('I will see a button to submit my email', function(done){
		assert(browser.button('submitContact'));
		done();
	});

	world.and('I enter email', function(done){
		browser.fill('emailAddress', 'sample@example.com');
		done();
	});

	world.and('I click to submit my email', function(done){
		browser.pressButton('submitContact');
		done();
	});

	world.then('I will see my email on that summary', function(done){
		let text = browser.text('p');
		assert(text.includes('sample@example.com'));
		done();
	});

	world.given('I have already entered my email into the form', function(done){
		done();
	});

	world.then('I will see the email I entered', function(done){
		assert.equal(browser.field('emailAddress').value, 'sample@example.com');
		done();
	});

	world.and('I change my email', function(done){
		browser.fill('emailAddress', 'example@sample.com');
		done();
	});

	world.then('I will see my updated email', function(done){
		let text = browser.text('p');
		assert(text.includes('example@sample.com'));
		done();
	});
};