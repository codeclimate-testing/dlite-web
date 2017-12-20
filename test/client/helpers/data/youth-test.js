'use strict';

const assert = require('assert');

import {
  validToContinue
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
});
