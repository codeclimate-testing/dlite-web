'use strict';

const assert = require('assert');

import {
  validToContinue,
  tooYoungForDL
} from '../../../../client/helpers/data/youth';

describe('Data helpers for youth', function() {
  describe('validToContinue', function() {
    it('should be false if they are under age and dont want to switch to an ID', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 10).toString(),
          month: (today.getMonth() + 1).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          DL: true,
          ID: false,
          youthIDInstead: 'No'
        }
      };
      assert.equal(validToContinue(data), false);
    });

    it('should be true if they are 15 or over', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 15).toString(),
          month: (today.getMonth() + 1).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          DL: true,
          ID: false,
          youthIDInstead: 'No'
        }
      };
      assert.equal(validToContinue(data), true);
    });

    it('should be true if they are under age and but will switch to an ID', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 10).toString(),
          month: (today.getMonth() + 1).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          DL: true,
          ID: false,
          youthIDInstead: 'Yes'
        }
      };
      assert.equal(validToContinue(data), true);
    });
  });

  describe('#tooYoungForDL', function() {
    it('should be true if they are under 15.5 and also opting for a DL', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 10).toString(),
          month: (today.getMonth() + 1).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: ['ID', 'DL']
        }
      };
      assert.equal(tooYoungForDL(data), true);
    });

    it('should be false if they are under 15.5 but only getting an ID', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 10).toString(),
          month: (today.getMonth() + 1).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: ['ID']
        }
      };
      assert.equal(tooYoungForDL(data), false);
    });

    it('should be false if they over 15.5', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 16).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: ['ID']
        }
      };
      assert.equal(tooYoungForDL(data), false);
    });
  });
});
