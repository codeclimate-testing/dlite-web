'use strict';

import assert       from 'assert';
import {
  checkIfYearError,
  compareValues,
  expirationDateValidator,
  dateValidator,
  hasDate
}   from '../../../../client/helpers/validations/date-validator';

describe('date validator:', function() {
  describe('#checkIfYearError', function(){
    it('returns false if name is not "year"', function() {
      let props = {
        month: '10'
      };
      assert.equal(checkIfYearError('month', props), false);
    });

    it('returns false if year has 4 digits', function() {
      let props = {
        year: '2000'
      };
      assert.equal(checkIfYearError('year', props), false);
    });

    it('returns true if year has 2 digits', function() {
      let props = {
        year: '00'
      };
      assert.equal(checkIfYearError('year', props), true);
    });

    it('returns false if year has 0 digits', function() {
      let props = {
        year: ''
      };
      assert.equal(checkIfYearError('year', props), false);
    });
  });

  describe('#compareValues', function() {
    it('returns false if the input has non-numerical characters', function() {
      let props = {
        month: 'january'
      };
      let name = 'month';
      assert.equal(compareValues(name, props), false);
    });

    it('returns false if the month is greater than 12', function() {
      let props = {
        month: '13'
      };
      let name = 'month';
      assert.equal(compareValues(name, props), false);
    });

    it('returns false if the year is more than 130 years ago', function() {
      let props = {
        year: '1800'
      };
      let name = 'year';
      assert.equal(compareValues(name, props), false);
    });

    it('returns false if the day is less than the 1st', function() {
      let props = {
        month: '-2'
      };
      let name = 'month';
      assert.equal(compareValues(name, props), false);
    });

    it('returns false if the day is greater than the number of days in that month', function() {
      let props = {
        month: '01',
        day: '32'
      };
      let name = 'day';
      assert.equal(compareValues(name, props), false);
    });

    it('returns false if no month and day is greater than 31', function() {
      let props = {
        month: '',
        day: '32'
      };
      let name = 'day';
      assert.equal(compareValues(name, props), false);
    });

    it('returns true when the year has 4 digits and has only numerical characters', function() {
      let props = {
        year: '2000'
      };
      let name = 'year';
      assert.equal(compareValues(name, props), true);
    });

    it('returns true when the day is between 1 and the number alloted to the month and has only numerical characters', function() {
      let props = {
        day: '29',
        month: '09'
      };
      let name = 'day';
      assert.equal(compareValues(name, props), true);
    });

    it('returns true when the month is between 1 and 12 and has only numerical characters', function() {
      let props = {
        month: '09'
      };
      let name = 'month';
      assert.equal(compareValues(name, props), true);
    });
  });

  describe('dateValidator', function() {
    it('returns false if the year is in the future', function() {
      let props = {
        year: '2020'
      };
      let name = 'year';
      assert.equal(dateValidator(name, props), false);
    });
  });

  describe('expirationDateValidator', function() {
    it('returns true if the year is in the future', function() {
      let props = {
        year: '2020'
      };
      let name = 'year';
      assert.equal(expirationDateValidator(name, props), true);
    });
  });

  describe('hasDate', function() {
    it('returns true if any month, year, or day of the date is present', function() {
      let props = {
        year: '1000',
        day: '',
        month: ''
      };
      assert.equal(hasDate(props), true);
    });

    it('returns false if month, year, and day are missing', function() {
      let props = {
        year: '',
        day: '',
        month: ''
      };
      assert.equal(hasDate(props), false);
    });
  });
});

