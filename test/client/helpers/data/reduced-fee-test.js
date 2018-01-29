'use strict';

const assert = require('assert');

import {
  eligibleForReducedFee,
  choosingReducedFee
} from '../../../../client/helpers/data/reduced-fee';

describe('Data helpers for reduced fee', function() {
  describe('eligibleForReducedFee', function() {
    it('is false if the person has already opted for a senior id', function() {
      let data = {
        cardType: {
          IDDL: ['ID', 'DL'],
          cardAction: 'new'
        },
        seniorID: 'Yes'
      };

      assert.equal(eligibleForReducedFee(data), false);
    });

    it('is true if the person has no seniorId value and is getting an ID', function() {
      let data = {
        cardType: {
          IDDL: ['ID'],
          cardAction: 'new',
          youthIDInstead: ''
        },
        seniorID: ''
      };

      assert.equal(eligibleForReducedFee(data), true);
    });

    it('is false if the person is not getting an ID', function() {
      let data = {
        cardType: {
          IDDL: ['DL'],
          cardAction: 'new',
          youthIDInstead: ''
        },
        seniorID: ''
      };

      assert.equal(eligibleForReducedFee(data), false);
    });
  });

  describe('choosingReducedFee', function() {
    it('is true with the correct data structure', function() {
      let data = {
        reducedFee: {
          ID: 'Yes'
        }
      };

      assert.equal(choosingReducedFee(data), true);
    });

    it('is false without the correct data structure', function() {
      let data = {
        reducedFee: {
          ID: ''
        }
      };

      assert.equal(choosingReducedFee(data), false);
    });
  });
});