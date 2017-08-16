'use strict';

module.exports = function (world) {
  let browser = world.browser;

  world.and('I visit /about-me/appearance/eye', function(done){
    browser.clickLink('eye-color');
    done();
  });

  world.then('I will see buttons for Blue, Gray, Green, Hazel and Brown', function(done){
    assert.ok(browser.button('Blue'));
    assert.ok(browser.button('Gray'));
    assert.ok(browser.button('Green'));
    assert.ok(browser.button('Hazel'));
    assert.ok(browser.button('Brown'));
    done();
  });

  world.and('I will see a button to submit my information about my eye color', function(done){
    assert.ok(browser.button('submitEyeColor'));
    done();
  });

  world.when('I select eye color', function(done){
    browser.pressButton('Green', done);
  });

  world.and('I click to submit that description of my eye color', function(done){
    browser.pressButton('submitEyeColor', done);
  });

  world.then('I will see my eye color is on that summary', function(done){
    let pageContent = browser.text('html');
    assert(pageContent.includes('Green'), 'Eye color missing from summary');
    done();
  });

  world.given('I have already entered my eye color into the form', function(done){
    browser.clickLink('eye-color', function(){
      browser.pressButton('Hazel');
      browser.pressButton('submitEyeColor');
      browser.clickLink('Back to application', done);
    });
  });

  world.then('I will see the eye color I selected', function(done){
    let text = browser.querySelector('.selected-button').value;
    assert(text.includes('Hazel'));
    done();
  });

  world.when('I select an eye color', function(done){
    browser.pressButton('Blue', done);
  });

  world.and('I see that color selected', function(done){
    let text = browser.querySelector('.selected-button').value;
    assert(text.includes('Blue'));
    done();
  });

  world.and('I realize I made the wrong selection and change it', function(done){
    browser.pressButton('Brown', done);
  });

  world.then('I will see the original selection as not highlighted', function(done){
    let text = browser.querySelector('.selected-button').value;
    assert.notEqual(text.includes('Blue'));
    done();
  });

  world.and('I will see the new selection has been highlighted', function(done){
    let text = browser.querySelector('.selected-button').value;
    assert(text.includes('Brown'));
    done();
  });

  world.and('I change my eye color selection', function(done){
    browser.pressButton('Gray', done);
  });

  world.then('I will see my updated eye color', function(done){
    let pageContent = browser.text('html');
    assert(pageContent.includes('Gray'), 'Eye color no updated in summary');
    done();
  });

};
