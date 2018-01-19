'use strict';

import assert from 'assert';

import {
  hasNeither,
  hasAnyPhone,
  hasPhone
} from '../../../../client/helpers/data/contact-methods';

describe('data helpers for contact methods', function() {
  describe('#hasPhone', function() {
    it('returns false if phoneNumber1 is missing', function() {
      let props = {
        phoneNumber1: '',
        phoneNumber2: '22',
        phoneNumber3: '22'
      };
      assert.equal(hasPhone(props), false);
    });
    it('returns false if phoneNumber2 is missing', function() {
      let props = {
        phoneNumber1: '22',
        phoneNumber2: '',
        phoneNumber3: '22'
      };
      assert.equal(hasPhone(props), false);
    });
    it('returns false if phoneNumber3 is missing', function() {
      let props = {
        phoneNumber1: '22',
        phoneNumber2: '22',
        phoneNumber3: ''
      };
      assert.equal(hasPhone(props), false);
    });
    it('returns true if all parts of the phone number are present', function() {
      let props = {
        phoneNumber1: '22',
        phoneNumber2: '22',
        phoneNumber3: '22'
      };
      assert.equal(hasPhone(props), true);
    });
  });

  describe('#hasAnyPhone', function() {
    it('returns true if phoneNumber1 is present', function() {
      let props = {
        phoneNumber1: '22',
        phoneNumber2: '',
        phoneNumber3: ''
      };
      assert.equal(hasAnyPhone(props), true);
    });
    it('returns true if phoneNumber2 is present', function() {
      let props = {
        phoneNumber1: '',
        phoneNumber2: '22',
        phoneNumber3: ''
      };
      assert.equal(hasAnyPhone(props), true);
    });
    it('returns true if phoneNumber3 is present', function() {
      let props = {
        phoneNumber1: '',
        phoneNumber2: '',
        phoneNumber3: '22'
      };
      assert.equal(hasAnyPhone(props), true);
    });
    it('returns false if all of phone is missing', function() {
      let props = {
        phoneNumber1: '',
        phoneNumber2: '',
        phoneNumber3: ''
      };
      assert.equal(hasAnyPhone(props), false);
    });
  });

  describe('#hasNeither', function() {
    it('returns false if part of phone is present', function() {
      let props = {
        phoneNumber1: '',
        phoneNumber2: '22',
        phoneNumber3: '22',
        emailAddress: ''
      };
      assert.equal(hasNeither(props), false);
    });

    it('returns true if both email address and all of phone is missing', function() {
      let props = {
        phoneNumber1: '',
        phoneNumber2: '',
        phoneNumber3: '',
        emailAddress: ''
      };
      assert.equal(hasNeither(props), true);
    });

    it('returns false if email address is present', function() {
      let props = {
        phoneNumber1: '',
        phoneNumber2: '',
        phoneNumber3: '',
        emailAddress: 'text'
      };
      assert.equal(hasNeither(props), false);
    });

    it('returns false if all of phone is present', function() {
      let props = {
        phoneNumber1: '22',
        phoneNumber2: '22',
        phoneNumber3: '22',
        emailAddress: ''
      };
      assert.equal(hasNeither(props), false);
    });
  });
});
