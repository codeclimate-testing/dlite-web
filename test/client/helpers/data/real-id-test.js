'use strict';

const assert = require('assert');

import {
  validToContinue,
  mustChooseCard
} from '../../../../client/helpers/data/real-id';

describe('Data helpers for real-id', function() {
  let data;
  beforeEach(function() {
    data = {
      realID: {
        getRealID: '',
        realIdDesignation: ''
      },
      IDApp: {
        isApplying: false
      },
      DLApp: {
        isApplying: false
      }
    }
  });
  describe('mustChooseCard', function() {
    it('is false if real id has not been chosen', function() {
      data.realID.getRealID = 'No';
      assert.equal(mustChooseCard(data), false);
    });

    it('is false if real id has been chosen but only one card exists', function() {
      data.realID.getRealID = 'Yes';
      data.IDApp.isApplying = true;
      assert.equal(mustChooseCard(data), false);
    });

    it('is true if real id has been chosen and both cards are desired', function() {
      data.realID.getRealID = 'Yes';
      data.IDApp.isApplying = true;
      data.DLApp.isApplying = true;

      assert.equal(mustChooseCard(data), true);
    });
  });

  describe('validToContinue', function() {
    it('should be false if the person has not yet made a decision about real id', function() {
      assert.equal(validToContinue(data), false);
    });

    it('should be true if the person is not getting a real id', function() {
      data.realID.getRealID = 'No';
      assert.equal(validToContinue(data), true);
    });

    it('should be false if the person is choosing a real id and has not yet chosen which card', function() {
      data.realID.getRealID = 'Yes';
      data.IDApp.isApplying = true;
      data.DLApp.isApplying = true;

      assert.equal(validToContinue(data), false);
    });

    it('should be true if the person is choosing a real id and does not need to choose a card', function() {
      data.realID.getRealID = 'Yes';
      data.DLApp.isApplying = true;

      assert.equal(validToContinue(data), true);
    });

    it('should be true if the person is choosing a real id and has chosen which card', function() {
      data.realID.getRealID = 'Yes';
      data.IDApp.isApplying = true;
      data.DLApp.isApplying = true;
      data.realID.realIdDesignation = 'ID';

      assert.equal(validToContinue(data), true);
    });
  });
});
