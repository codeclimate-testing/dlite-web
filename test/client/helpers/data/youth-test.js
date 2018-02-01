'use strict';

const assert = require('assert');

import {
  validToContinue,
  tooYoungForDL,
  checkPreReg,
  continueHidden
} from '../../../../client/helpers/data/youth';

describe('Data helpers for youth', function() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let data;

  beforeEach(function() {
    data = {
      dateOfBirth: {
        year: (year - 15).toString(),
        month: month.toString(),
        day: day.toString()
      },
      cardType: {
        IDDL: ['DL'],
        cardAction: 'new',
        youthIDInstead: ''
      }
    };
  });

  describe('validToContinue', function() {
    it('should be false if they are under 15 and dont want to switch to an ID', function() {
      data.dateOfBirth.year = (year - 10).toString();
      data.cardType.youthIDInstead = 'No';
      assert.equal(validToContinue(data), false);
    });

    it('should be true if they are 15 or over', function() {
      assert.equal(validToContinue(data), true);
    });

    it('should be true if they are a month under 15 but will switch to an ID', function() {
      data.dateOfBirth.year = (year - 15).toString();
      data.dateOfBirth.month = (month + 1).toString();
      data.cardType.youthIDInstead = 'Yes';

      assert.equal(validToContinue(data), true);
    });
  });

  describe('#tooYoungForDL', function() {
    it('should be true if they are under 15.5 and getting both an ID and a DL', function() {
      data.cardType.IDDL = ['ID', 'DL'];
      assert.equal(tooYoungForDL(data), true);
    });

    it('should be false if they are under 15.5 but only getting an ID', function() {
      data.cardType.IDDL = ['ID'];
      assert.equal(tooYoungForDL(data), false);
    });

    it('should be false if user is over 15.5 and getting a DL', function() {
      data.dateOfBirth.year = (year - 16).toString();

      assert.equal(tooYoungForDL(data), false);
    });
  });

  describe('#under16GuardianSignature', function() {
    it('is true if they are under 16', function() {
      assert.equal(tooYoungForDL(data), true);
    });

    it('should be false if they over 16', function() {
      data.dateOfBirth.year = (year - 16).toString();

      assert.equal(tooYoungForDL(data), false);
    });
  });

  describe('#checkPreReg', function() {
    it('returns "voterPreRegistration" if user is pre-registering to vote', function() {
      let dateOfBirth = {
        year: (year - 17).toString(),
        month: month.toString(),
        day: day.toString()
      };
      assert.equal(checkPreReg(dateOfBirth), 'voterPreRegistration');
    });

    it('returns "voterRegistration" if user is old enough to register to vote', function() {
      let dateOfBirth = {
        year: (year - 20).toString(),
        month: month.toString(),
        day: day.toString()
      };
      assert.equal(checkPreReg(dateOfBirth), 'voterRegistration');
    });
  });

  describe('#continueHidden', function() {
    it('returns true if user is not valid to continue', function() {
      data.dateOfBirth.year = (year - 10).toString();
      data.cardType.youthIDInstead = 'No';
      assert.equal(continueHidden(data), true);
    });

    it('returns false if user is valid to continue because they are over 15', function() {
      data.cardType.youthIDInstead = 'No';

      assert.equal(continueHidden(data), false);
    });

    it('returns false if user is under 15 but selects Yes to getting an ID instead of a DL', function() {
      data.dateOfBirth.year = (year - 15).toString();
      data.dateOfBirth.month = (month + 1).toString();
      data.cardType.youthIDInstead = 'Yes';
      assert.equal(continueHidden(data), false);
    });
  });
});
