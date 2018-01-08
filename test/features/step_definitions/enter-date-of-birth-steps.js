'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.then('I will see a number field for month, day and year', function(done) {
    browser
      .exists('#month[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for month missing')})
      .exists('#year[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for year missing')})
      .exists('#day[type="number"]')
      .then((exists) => { assert.ok(exists, 'number input for day missing')})
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I enter my full date of birth into the form', function(done) {
    browser
      .type('#month', '9')
      .type('#day', '7')
      .type('#year', '1967')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my date of birth on that summary', function(done) {
    browser
      .text('.summary')
      .then((text) => {
        assert(text.includes('9/7/1967'), 'date of birth missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I have already entered my date of birth', function(done) {
    browser
      .click('a.date-of-birth')
      .waitForSelector('.date-of-birth-form')
      .type('#month', '9')
      .type('#day', '7')
      .type('#year', '1967')
      .click('a.sections')
      .waitForSelector('.section-links')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see the date of birth that I entered', function(done) {
    browser
      .value('#month')
      .then((value) => { assert.equal(value, '9'); })
      .value('#day')
      .then((value) => { assert.equal(value, '7'); })
      .value('#year')
      .then((value) => { assert.equal(value, '1967'); })
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I change my year of birth', function(done) {
    browser
      .clear('#year')
      .type('#year', '1969')
      .then(() => { done(); })
      .catch(done);
  });

  world.then('I will see my updated birth year', function(done) {
     browser
      .text()
      .then((text) => {
        assert(text.includes('1969'), 'date of birth missing');
      })
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I indicate that I am younger than 14', function(done) {
    var d = new Date();

    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear() - 5;

    browser
      .type('#month', month.toString())
      .type('#day', day.toString())
      .type('#year', year.toString())
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I am under 16 years old', function(done) {
    let d = new Date();
    let month = d.getMonth() + 2;
    let day = d.getDate() + 2;
    let year = d.getFullYear() - 16;

    browser
      .type('#month', month.toString())
      .type('#day', day.toString())
      .type('#year', year.toString())
      .then(() => { done(); })
      .catch(done);
  });

  world.when('I am over 16 years old', function(done) {
    let d = new Date();
    let y = d.getFullYear() - 21;
    browser
      .type('#month', '10')
      .type('#day', '21')
      .type('#year', y.toString())
      .then(() => { done(); })
      .catch(done);
  });

  world.when('Today I turned 16 years old', function(done) {
      let d = new Date();
      let month = (d.getMonth() + 1).toString();
      let day = d.getDate().toString();
      let year = (d.getFullYear() - 16).toString();

    browser
      .type('#month', month)
      .type('#day', day)
      .type('#year', year)
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I indicate that I am between 14 and 15', function(done) {
    var d = new Date();
    // calculate birthday for someone who has just turned 14
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear() - 14;

    browser
      .type('#month', month.toString())
      .type('#day', day.toString())
      .type('#year', year.toString())
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I indicate that I am between 15 and 15.5', function(done) {
    var d = new Date();
    //calculate birth date for someone who just turned 15 today
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear() - 15;

    browser
      .type('#month', month.toString())
      .type('#day', day.toString())
      .type('#year', year.toString())
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I indicate that I am between 15.5 and 17.5', function(done) {
    var d = new Date();

    // calculate a birth date for someone 16 years old
    var month = d.getMonth();
    var year = d.getFullYear() - 16;
    var day = d.getDate();

    browser
      .type('#month', month.toString())
      .type('#day', day.toString())
      .type('#year', year.toString())
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I indicate that I am between 17.5 and 18', function(done) {
    var d = new Date();

    // calculate a date of 3 days shy of being 18
    var month = d.getMonth() + 1;
    var day = d.getDate() + 3 ;
    var year = d.getFullYear() - 18;

    browser
      .type('#month', month.toString())
      .type('#day', day.toString())
      .type('#year', year.toString())
      .then(() => { done(); })
      .catch(done);
  });

  world.and('I indicate that I am turning 62 today', function(done) {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate() ;
    var year = d.getFullYear() - 62;
    browser
      .type('#month', month.toString())
      .type('#day', day.toString())
      .type('#year', year.toString())
      .then(() => { done(); })
      .catch(done);
  });

};
