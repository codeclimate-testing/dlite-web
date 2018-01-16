'use strict';

import assert   from 'assert';

import rules    from '../../../../client/helpers/validations/current-card-rules';
import messages from '../../../../client/presentations/error-messages';

describe('current card page validation rules', function() {
  describe('current card number', function() {
    it('has no errors when entering english characters', function() {
      let props = {
        number: '123123hasfh231'
      };

      assert.deepEqual(rules.number(props), []);
    });

    it('has no errors when left blank', function() {
      let props = {
        number: ''
      };

      assert.deepEqual(rules.number(props), []);
    })

    it('reports errors when using non-english characters', function() {
      let props = {
        number: '12313మీ తెలుగు '
      };

    assert.deepEqual(rules.number(props),  ['Sorry, your card can only include English characters.']);
    });
  })

  describe('current card expiration date', function() {
    it('has no errors when fields are inputted correctly', function() {
      let props = {
        month: '12',
        day: '12',
        year: '1999'
      };

      assert.deepEqual(rules.month(props), []);
      assert.deepEqual(rules.day(props), []);
      assert.deepEqual(rules.year(props), []);
    });

    it('has no errors when fields are left blank', function() {
      let props = {
        month: '',
        day: '',
        year: ''
      };

      assert.deepEqual(rules.month(props), []);
      assert.deepEqual(rules.day(props), []);
      assert.deepEqual(rules.year(props), []);
    });

    it('when the year is in the future, it gives the expirationDateInvalid error', function() {
      let props = {
        month: '09',
        day: '29',
        year: (new Date().getFullYear() + 2).toString()
      };

      assert.deepEqual(rules.month(props), []);
      assert.deepEqual(rules.day(props), []);
      assert.deepEqual(rules.year(props), [messages.expirationDateInvalid]);
    });

    it('when the year is over 130 years ago, it gives the expirationDateInvalid error', function() {
      let props = {
        month: '09',
        day: '29',
        year: (new Date().getFullYear() - 135).toString()
      };

      assert.deepEqual(rules.month(props), []);
      assert.deepEqual(rules.day(props), []);
      assert.deepEqual(rules.year(props), [messages.expirationDateInvalid]);
    });

    it('when the year does not have 4 digits, it gives the expirationDateInvalid error', function() {
      let props = {
        month: '09',
        day: '29',
        year: '88'
      };

      assert.deepEqual(rules.month(props), []);
      assert.deepEqual(rules.day(props), []);
      assert.deepEqual(rules.year(props), [messages.expirationDateInvalid]);
    });

    it('when the month is greater than 12, it gives the expirationDateInvaliderror', function() {
      let props = {
        month: '14',
        day: '29',
        year: '1988'
      };

      assert.deepEqual(rules.month(props), [messages.expirationDateInvalid]);
      assert.deepEqual(rules.day(props), []);
      assert.deepEqual(rules.year(props), []);
    });

    it('when the day is greater than the number of days in the month, it gives the expirationDateInvalid error', function() {
      let props = {
        month: '09',
        day: '31',
        year: '1988'
      };

      assert.deepEqual(rules.month(props), []);
      assert.deepEqual(rules.day(props), [messages.expirationDateInvalid]);
      assert.deepEqual(rules.year(props), []);
    });

    it('when the month is negative, it gives the expirationDateInvalid error', function() {
      let props = {
        month: '-9',
        day: '29',
        year: '1988'
      };

      assert.deepEqual(rules.month(props), [messages.expirationDateInvalid]);
      assert.deepEqual(rules.day(props), []);
      assert.deepEqual(rules.year(props), []);
    });

    it('lets the user proceed with a partial but otherwise valid date', function() {
      let props = {
        month: '09',
        day: '',
        year: '2017'
      };

      assert.deepEqual(rules.month(props), []);
      assert.deepEqual(rules.day(props), []);
      assert.deepEqual(rules.year(props), []);
    });
  });
});
