'use strict';

import assert   from 'assert';

import rules    from '../../../../client/helpers/validations/dob-page-rules';
import messages from '../../../../client/presentations/error-messages';

describe('DOB page validation rules:', function() {
  it('when there are no data issues, it has no errors', function() {
    let props = {
      month: '09',
      day: '29',
      year: '1988'
    };

    assert.deepEqual(rules.month(props), []);
    assert.deepEqual(rules.day(props), []);
    assert.deepEqual(rules.year(props), []);
  });

  it('when the year is in the future, it gives the invalidOrMissingData error', function() {
    let props = {
      month: '09',
      day: '29',
      year: new Date().getFullYear() + 2
    };

    assert.deepEqual(rules.month(props), []);
    assert.deepEqual(rules.day(props), []);
    assert.deepEqual(rules.year(props), [messages.invalidOrMissingDate]);
  });

  it('when the year is over 130 years ago, it gives the invalidOrMissingData error', function() {
    let props = {
      month: '09',
      day: '29',
      year: new Date().getFullYear() - 135
    };

    assert.deepEqual(rules.month(props), []);
    assert.deepEqual(rules.day(props), []);
    assert.deepEqual(rules.year(props), [messages.invalidOrMissingDate]);
  });

  it('when the year does not have 4 digits, it gives the invalidOrMissingData error', function() {
    let props = {
      month: '09',
      day: '29',
      year: '88'
    };

    assert.deepEqual(rules.month(props), []);
    assert.deepEqual(rules.day(props), []);
    assert.deepEqual(rules.year(props), [messages.invalidOrMissingDate]);
  });

  it('when the month is greater than 12, it gives the invalidOrMissingData error', function() {
    let props = {
      month: '14',
      day: '29',
      year: '1988'
    };

    assert.deepEqual(rules.month(props), [messages.invalidOrMissingDate]);
    assert.deepEqual(rules.day(props), []);
    assert.deepEqual(rules.year(props), []);
  });

  it('when the day is greater than the number of days in the month, it gives the invalidOrMissingData error', function() {
    let props = {
      month: '09',
      day: '31',
      year: '1988'
    };

    assert.deepEqual(rules.month(props), []);
    assert.deepEqual(rules.day(props), [messages.invalidOrMissingDate]);
    assert.deepEqual(rules.year(props), []);
  });

  it('when the month is negative, it gives the invalidOrMissingData error', function() {
    let props = {
      month: '-9',
      day: '29',
      year: '1988'
    };

    assert.deepEqual(rules.month(props), [messages.invalidOrMissingDate]);
    assert.deepEqual(rules.day(props), []);
    assert.deepEqual(rules.year(props), []);
  });

});

