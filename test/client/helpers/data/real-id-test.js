'use strict';

const assert = require('assert');

import {
  validToContinue,
  mustChooseCard,
  isSelected,
  IDgettingRealID,
  DLgettingRealID
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
        isApplying: true
      },
      DLApp: {
        isApplying: true
      }
    }
  });
  describe('#mustChooseCard', function() {
    it('is false if real id has not been chosen', function() {
      data.realID.getRealID = 'No';
      data.IDApp.isApplying = false;
      data.DLApp.isApplying = false;
      assert.equal(mustChooseCard(data), false);
    });

    it('is false if real id has been chosen but only one card exists', function() {
      data.realID.getRealID = 'Yes';
      data.IDApp.isApplying = true;
      data.DLApp.isApplying = false;
      assert.equal(mustChooseCard(data), false);
    });

    it('is true if real id has been chosen and both cards are desired', function() {
      data.realID.getRealID = 'Yes';
      data.IDApp.isApplying = true;
      data.DLApp.isApplying = true;

      assert.equal(mustChooseCard(data), true);
    });
  });

  describe('#validToContinue', function() {
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
      data.IDApp.isApplying = false;
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

  describe('#DLAsRealID', function() {
    it('returns true if realIdDesignation equals "DL"', function() {
      data.realID.realIdDesignation = 'DL';
      data.realID.getRealID = 'Yes';
      assert.equal(DLgettingRealID(data), true);
    });
    it('returns false if realIdDesignation equals "ID"', function() {
      data.realID.realIdDesignation = 'ID';
      data.realID.getRealID = 'Yes';
      assert.equal(DLgettingRealID(data), false);
    });
    it('returns false if realIdDesignation is blank', function() {
      data.realID.realIdDesignation = '';
      data.realID.getRealID = 'Yes';
      assert.equal(DLgettingRealID(data), false);
    });
    it('returns false if DLApp does not exist', function() {
      data.DLApp.isApplying = false;
      data.realID.getRealID = 'Yes';
      assert.equal(DLgettingRealID(data), false);
    });
    it('returns false if user is not getting real id', function() {
      data.DLApp.isApplying = true;
      data.realID.getRealID = 'No';
      assert.equal(DLgettingRealID(data), false);
    });
  });

  describe('#IDgettingRealID', function() {
    it('returns true if realIdDesignation equals "ID"', function() {
      data.realID.realIdDesignation = 'ID';
      data.realID.getRealID = 'Yes';
      assert.equal(IDgettingRealID(data), true);
    });
    it('returns false if realIdDesignation equals "DL"', function() {
      data.realID.realIdDesignation = 'DL';
      data.realID.getRealID = 'Yes';
      assert.equal(IDgettingRealID(data), false);
    });
    it('returns false if realIdDesignation is blank', function() {
      data.realID.realIdDesignation = '';
      data.realID.getRealID = 'Yes';
      assert.equal(IDgettingRealID(data), false);
    });
  });

  describe('#isSelected', function() {
    it('returns false if getRealID is blank', function() {
      assert.equal(isSelected(data), false);
    });
  });

});
