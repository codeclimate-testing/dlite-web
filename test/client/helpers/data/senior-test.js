'use strict';

const assert = require('assert');

import {
  eligibleForSeniorID,
  gettingSeniorID
} from '../../../../client/helpers/data/senior';

describe('Data helpers for senior', function() {
  describe('#eligibleForSeniorID', function() {
    let today = new Date();
    it('eligibleForSeniorID should be false if under 62', function() {
      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 61).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: ['ID'],
        cardAction: 'new'
      };
      assert.equal(eligibleForSeniorID(data), false);
    });

    it('eligibleForSeniorID should be false if over 62, but not getting an ID', function() {

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 63).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: ['DL'],
        cardAction: 'new'
      };
      assert.equal(eligibleForSeniorID(data), false);
    });

    it('eligibleForSeniorID should be true if over 62, and getting an ID', function() {
      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 63).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType:['ID'],
        cardAction: 'new'
      };
      assert.equal(eligibleForSeniorID(data), true);
    });
  });

  describe('#gettingSeniorID', function() {
    let props;
    beforeEach(function() {
      props = {
        seniorID: ''
      }
    });
    it('returns false if value is No', function() {
      props.seniorID = 'No';
      assert.equal(gettingSeniorID(props), false);
    });
    it('returns false if value is blank', function() {
      props.seniorID = '';
      assert.equal(gettingSeniorID(props), false);
    });
    it('returns true if value is Yes', function() {
      props.seniorID = 'Yes';
      assert.equal(gettingSeniorID(props), true);
    });
  });
});
