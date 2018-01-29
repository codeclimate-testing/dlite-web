'use strict';

const assert = require('assert');

import {
  validToContinue,
  tooYoungForDL,
  checkPreReg
} from '../../../../client/helpers/data/youth';

describe('Data helpers for youth', function() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  describe('validToContinue', function() {
    it('should be false if they are under age and dont want to switch to an ID', function() {
      let data = {
        dateOfBirth: {
          year: (year - 10).toString(),
          month: month.toString(),
          day: day.toString()
        },
        cardType: {
          IDDL: ['DL'],
          cardAction: 'new',
          youthIDInstead: 'No'
        }
      };
      assert.equal(validToContinue(data), false);
    });

    it('should be true if they are 15 or over', function() {

      let data = {
        dateOfBirth: {
          year: (year - 15).toString(),
          month: month.toString(),
          day: day.toString()
        },
        cardType: {
          IDDL: ['DL'],
          cardAction: 'new',
          youthIDInstead: 'No'
        }
      };
      assert.equal(validToContinue(data), true);
    });

    it('should be true if they are under age and but will switch to an ID', function() {

      let data = {
        dateOfBirth: {
          year: (year - 10).toString(),
          month: month.toString(),
          day: today.getDate().toString()
        },
        cardType: {
          IDDL: ['DL'],
          cardAction: 'new',
          youthIDInstead: 'Yes'
        }
      };
      assert.equal(validToContinue(data), true);
    });
  });

  describe('#tooYoungForDL', function() {
    it('should be true if they are under 15.5 and also opting for a DL', function() {

      let data = {
        dateOfBirth: {
          year: (year - 10).toString(),
          month: month.toString(),
          day: today.getDate().toString()
        },
        cardType: {
          IDDL: ['ID', 'DL'],
          cardAction: 'new'
        }
      };
      assert.equal(tooYoungForDL(data), true);
    });

    it('should be false if they are under 15.5 but only getting an ID', function() {

      let data = {
        dateOfBirth: {
          year: (year - 10).toString(),
          month: month.toString(),
          day: day.toString()
        },
        cardType: {
          IDDL: ['ID'],
          cardAction: 'new'
        }
      };
      assert.equal(tooYoungForDL(data), false);
    });

    it('should be false if they over 15.5', function() {

      let data = {
        dateOfBirth: {
          year: (year - 16).toString(),
          month: month.toString(),
          day: day.toString()
        },
        cardType: {
          IDDL: ['ID'],
          cardAction: 'new'
        }
      };
      assert.equal(tooYoungForDL(data), false);
    });
  });

  describe('#under16GuardianSingnature', function() {
    it('is true if they are under 16', function() {

      let data = {
        dateOfBirth: {
          year: (year - 15).toString(),
          month: month.toString(),
          day: day.toString()
        },
        cardType: {
          IDDL: ['ID', 'DL'],
          cardAction: 'new'
        }
      };
      assert.equal(tooYoungForDL(data), true);
    });

    it('should be false if they over 16', function() {

      let data = {
        dateOfBirth: {
          year: (year - 10).toString(),
          month: month.toString(),
          day: day.toString()
        },
        cardType: {
          IDDL: ['ID'],
          cardAction: 'new'
        }
      };
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
});
