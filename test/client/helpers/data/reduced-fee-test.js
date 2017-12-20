'use strict';

const assert = require('assert');

import {
  eligibleForReducedFee
} from '../../../../client/helpers/data/reduced-fee';

describe('Data helpers for reduced fee', function() {
  describe('eligibleForReducedFee', function() {
    it('is false if the person has already opted for a senior id', function() {
      let data = {
        cardType: {
          ID: true,
          DL: true
        },
        seniorID: 'Yes'
      };

      assert.equal(eligibleForReducedFee(data), false);
    });

    it('is true if the person has no seniorId value and is getting an ID', function() {
      let data = {
        cardType: {
          ID: true,
          DL: false
        },
        seniorID: ''
      };

      assert.equal(eligibleForReducedFee(data), true);
    });

    it('is false if the person is not getting an ID', function() {
      let data = {
        cardType: {
          ID: false,
          DL: true
        },
        seniorID: ''
      };

      assert.equal(eligibleForReducedFee(data), false);
    });
  });
});
