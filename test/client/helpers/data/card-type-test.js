'use strict';

const assert = require('assert');

import {
  getID,
  getDL,
  getNewID,
  getNewDL,
  replaceID,
  replaceDL,
  changeID,
  changeDL,
  renewID,
  renewDL,
  prettyDL,
  IDorDL,
  IDOnly
} from '../../../../client/helpers/data/card-type';


const bothCards = {
  cardType: {
    IDDL: ['ID', 'DL'],
    cardAction: 'new',
    ID: {
      isApplying: true,
      action: 'new'
    },
    DL: {
      isApplying: true,
      action: 'new'
    }
  }
};


describe('Data helpers for card-type', function() {
  let data;

  function buildCardType(type, action){
    data.cardType.IDDL = [type],
    data.cardType.cardAction = action;
    data.cardType[type] = {
      action: action,
      isAppying: true
    };
    return data;
  };

  beforeEach(function() {
    data = {
      cardType: {
        IDDL: [],
        cardAction: '',
        ID: {
          isApplying: false,
          action: ''
        },
        DL: {
          isApplying: false,
          action: ''
        }
      }
    };
  });

  describe('#getID', function() {
    it('is false if user is not getting a new ID or renewing an ID', function() {
      assert.equal(getID(data), false);
    });

    it('is true if user is getting a new ID', function() {
      buildCardType('ID', 'new');
      assert.equal(getID(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      data = bothCards;
      assert.equal(getID(data), true);
    });

    it('is true if user is renewing an ID', function() {
      buildCardType('ID', 'renew');
      assert.equal(getID(data), true);
    });
  });

  describe('#getDL', function() {
    it('is false if user is not getting a new DL or renewing a DL', function() {
      buildCardType('ID', 'new');
      assert.equal(getDL(data), false);
    });

    it('is true if user is getting a new DL', function() {
      buildCardType('DL', 'new');
      assert.equal(getDL(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      data = bothCards;
      assert.equal(getDL(data), true);
    });

    it('is true if user is renewing a DL', function() {
      buildCardType('DL', 'renew');
      assert.equal(getDL(data), true);
    });
  });

  describe('#getNewDL', function() {
    it('is false if user is not getting a new ID or renewing an ID', function() {
      assert.equal(getNewDL(data), false);
    });

    it('is true if user is getting a new DL', function() {
      buildCardType('DL', 'new');
      assert.equal(getNewDL(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      data = bothCards;
      assert.equal(getNewDL(data), true);
    });

    it('is false if user is renewing a DL', function() {
      buildCardType('DL', 'renew');
      assert.equal(getNewDL(data), false);
    });
  });

  describe('#getNewID', function() {
    it('is false if user is not getting a new ID or renewing an ID', function() {
      assert.equal(getNewID(data), false);
    });

    it('is true if user is getting a new ID', function() {
      buildCardType('ID', 'new');
      assert.equal(getNewID(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      data = bothCards;
      assert.equal(getNewID(data), true);
    });

    it('is false if user is renewing an ID', function() {
      buildCardType('ID', 'renew');
      assert.equal(getNewID(data), false);
    });
  });

  describe('#replaceID', function() {
    beforeEach(function() {
      buildCardType('ID', 'replace');
    });

    it('is true if the ID object is true and action is replace', function(){
      assert.equal(replaceID(data), true);
    });
    it('is false if the ID object action is not replace', function() {
      data.cardType.ID.action = 'change';
      assert.equal(replaceID(data), false);
    });
  });

  describe('#changeID', function() {
    beforeEach(function() {
      buildCardType('ID', 'change');
    });

    it('is true if the ID object is true and action is change', function(){
      assert.equal(changeID(data), true);
    });
    it('is false if the ID object action is not change', function() {
      buildCardType('ID', 'renew');
      assert.equal(changeID(data), false);
    });
  });

  describe('#renewID', function() {
    beforeEach(function() {
      buildCardType('ID', 'renew');
    });

    it('is true if the ID object is true and action is renew', function(){
      assert.equal(renewID(data), true);
    });
    it('is false if the ID object action is not renew', function() {
      buildCardType('ID', 'change');
      assert.equal(renewID(data), false);
    });
  });

  describe('#prettyDL', function() {

    it('returns "Driver License" when user is renewing a DL', function() {
      buildCardType('DL', 'renew');
      assert.equal(prettyDL(IDorDL(data)), 'Driver License');
    });
  });

  describe('#IDorDL', function() {
    it('returns "ID" if user is just getting an ID', function() {
      buildCardType('ID', 'renew');
      assert.equal(IDorDL(data), 'ID');
    });

    it('returns "DL" if user is just getting a DL', function() {
      buildCardType('DL', 'renew');
      assert.equal(IDorDL(data), 'DL');
    });

    it('returns "both" if user is getting both cards', function() {
      data = bothCards;
      assert.equal(IDorDL(data), 'both');
    });

    it('returns "none" if user has not selected any cards yet', function() {
      assert.equal(IDorDL(data), 'none');
    });
  });

  describe('#IDOnly', function() {
    it('returns true if IDDL array only contains an ID', function() {
      buildCardType('ID', 'replace');
      assert.equal(IDOnly(data), true);
    });
    it('returns false if IDDL array only contains a DL', function() {
      data = buildCardType('DL', 'new')
      assert.equal(IDOnly(data), false);
    });
    it('returns false if IDDL array only contains both ID and DL', function() {
      data = bothCards;
      assert.equal(IDOnly(data), false);
    });
    it('returns false if IDDL array is empty', function() {
      assert.equal(IDOnly(data), false);
    });
  });
});
