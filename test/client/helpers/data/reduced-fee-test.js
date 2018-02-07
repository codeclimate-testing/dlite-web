'use strict';

const assert = require('assert');

import {
  eligibleForReducedFee,
  choosingReducedFee,
  canContinue,
  reducedOrNoFee
} from '../../../../client/helpers/data/reduced-fee';

describe('Data helpers for reduced fee', function() {
  let data;
  beforeEach(function() {
    data = {
      cardType: {
        IDDL: [],
        cardAction: ''
      },
      seniorID: '',
      reducedFee: {
        ID: '',
        form: ''
      }
    };
  });

  describe('#eligibleForReducedFee', function() {
    it('is false if the person has already opted for a senior id', function() {
      data.cardType.IDDL = ['ID', 'DL'];
      data.cardType.cardAction = 'new';
      data.seniorID = 'Yes';

      assert.equal(eligibleForReducedFee(data), false);
    });

    it('is true if the person has no seniorId value and is getting an ID', function() {
      data.cardType.IDDL = ['ID'];
      data.cardType.cardAction = 'new';

      assert.equal(eligibleForReducedFee(data), true);
    });

    it('is false if the person is not getting an ID', function() {
      data.cardType.IDDL = ['DL'];
      data.cardType.cardAction = 'new';

      assert.equal(eligibleForReducedFee(data), false);
    });
  });

  describe('#choosingReducedFee', function() {
    it('is true with the correct data structure', function() {
      data.reducedFee.ID = 'Yes';
      assert.equal(choosingReducedFee(data), true);
    });

    it('is false without the correct data structure', function() {
      assert.equal(choosingReducedFee(data), false);
    });
  });

  describe('#canContinue', function() {
    it('is true if user is getting reduced fee and has indicated they have correct papers', function() {
      data.reducedFee.ID = 'Yes';
      data.reducedFee.form = 'Yes';
      assert.equal(canContinue(data), true);
    });

    it('is true if user is getting reduced fee but has indicated they do not have correct papers', function() {
      data.reducedFee.ID = 'Yes';
      data.reducedFee.form = 'No';
      assert.equal(canContinue(data), true);
    });
    it('is false if user is getting reduced fee but has not indicated they have correct papers', function() {
      data.reducedFee.ID = 'Yes';
      data.reducedFee.form = '';
      assert.equal(canContinue(data), false);
    });

    it('is true if user is not getting reduced fee', function() {
      data.reducedFee.ID = 'No';
      assert.equal(canContinue(data), true);
    });

    it('is false if user hasnt indicated getting reduced fee', function() {
      data.reducedFee.ID = '';
      assert.equal(canContinue(data), false);
    });
  });

  describe('#reducedOrNoFee', function() {
    it('returns true if user selected No to getting a reduced fee', function() {
      data.reducedFee.ID = 'No';
      assert.equal(reducedOrNoFee(data), true);
    });
    it('returns true if user selected Yes to getting a reduced fee', function() {
      data.reducedFee.ID = 'Yes';
      assert.equal(reducedOrNoFee(data), true);
    });
    it('returns false if user has not selected to getting a reduced fee and is not getting a senior ID', function() {
      data.reducedFee.ID = '';
      data.seniorID = 'No';
      assert.equal(reducedOrNoFee(data), false);
    });
    it('returns true if user is getting a senior ID', function() {
      data.seniorID = 'Yes';
      assert.equal(reducedOrNoFee(data), true);
    });
  });
});