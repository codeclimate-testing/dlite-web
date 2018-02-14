'use strict';

import assert from 'assert';

import {
  IDorDL,
  hasMultipleCards,
  IDAppExists,
  DLAppExists,
  hasSelectedClass
} from '../../../../client/helpers/data/cards';

function buildCardType(type, action){
  let state = {
    cardType: [type],
    cardAction: action,
    IDApp: {
      isApplying: false,
      action: ''
    },
    DLApp: {
      isApplying: false,
      action: ''
    }
  };
  if (type === 'DL') {
    state.DLApp.isApplying = true;
    state.DLApp.action = action;
  }
  if (type === 'ID') {
    state.IDApp.isApplying = true;
    state.IDApp.action = action;
  }
  return state;
};


describe('Data helpers for cards', function() {
  let data;

  beforeEach(function() {
    data = buildCardType('', '');
  });

  describe('#IDorDL', function() {
    it('returns "ID" if user is just getting an ID', function() {
      data = buildCardType('ID', 'renew');
      assert.equal(IDorDL(data), 'ID');
    });

    it('returns "DL" if user is just getting a DL', function() {
      data = buildCardType('DL', 'renew');
      assert.equal(IDorDL(data), 'DL');
    });

    it('returns "both" if user is getting both cards in current flow', function() {
      data = {
        cardType: ['ID', 'DL']
      };
      assert.equal(IDorDL(data), 'both');
    });

    it('returns "none" if user has not selected any cards yet', function() {
      assert.equal(IDorDL(data), 'none');
    });
  });
  describe('#hasMultipleCards', function() {
    it('is true when getting new DL and ID in current flow', function() {
      data = {
        cardType: ['DL', 'ID']
      };
      assert(
        hasMultipleCards(data),
        'not true when both cards selected'
      );
    });

    it('is false when only getting an ID in current flow', function() {
      data = {
        cardType: ['ID']
      }
      assert(
        !hasMultipleCards(data),
        'true when DL is false'
      );
    });

    it('is false when user has already finished application for one card and now is adding another', function() {
      data = buildCardType('DL', 'renew');
      data.cardType = ['ID'];
      assert.equal(hasMultipleCards(data), false);
    });

    it('is false when not getting an ID card in current flow', function() {
      data = buildCardType('DL', 'new');
      assert(
        !hasMultipleCards(data),
        'true when ID is false'
      );
    });
  });

  describe('#hasSelectedClass', function() {
    let data;
    beforeEach(function() {
      data = {
        DLApp: {
          licenseType: {
            type: []
          }
        }
      };
    });

    it('returns false if array is empty', function() {
      assert.equal(hasSelectedClass(data), false);
    });

    it('returns true if array has a value', function() {
      data.DLApp.licenseType.type = ['car'];
      assert.equal(hasSelectedClass(data), true);
    });
  });
});