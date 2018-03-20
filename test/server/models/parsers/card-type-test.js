'use strict';

const assert            = require('assert');
const cardTypeParser    = require('../../../../server/models/parsers/card-type');

let data;

describe('cardType', function() {
  beforeEach(function() {
    data = {
      cardType: [],
      cardAction: '',
      youthIDInstead: '',
      IDApp: {
        isApplying: false,
        action: ''
      },
      DLApp: {
        isApplying: false,
        action: ''
      }
    };
  });

  describe('#getNew', function() {
    it('returns false when neither card type has action value equal to new', function() {
      data.IDApp.action = 'replace';
      data.DLApp.action = 'change'
      assert.equal(cardTypeParser.getNew(data), false);
    });
    it('returns true when IDApp action is new', function() {
      data.IDApp.action = 'new';
      assert.equal(cardTypeParser.getNew(data), true);
    });
    it('returns true when DLApp action is new', function() {
      data.DLApp.action = 'new';
      assert.equal(cardTypeParser.getNew(data), true);
    });
    it('returns true when both card types have new action', function() {
      data.IDApp.action = 'new';
      data.DLApp.action = 'new';
      assert.equal(cardTypeParser.getNew(data), true);
    });
  });

  describe('#getReplace', function() {
    it('returns false when action value is not replace', function() {
      let action = 'renew';
      assert.equal(cardTypeParser.getReplace(action), false);
    });
    it('returns true when value is replace', function() {
      let action = 'replace';
      assert.equal(cardTypeParser.getReplace(action), true);
    });
  });

  describe('#getChange', function() {
    it('returns false when value is not change', function() {
      let action = 'replace';
      assert.equal(cardTypeParser.getChange(action), false);
    });
    it('returns true when cardAction is change', function() {
      let action = 'change';
      assert.equal(cardTypeParser.getChange(action), true);
    });
  });

  describe('#needCurrentCardInfo', function(){
    it('returns false when action is new', function() {
      let action = 'new';
      assert.equal(cardTypeParser.needCurrentCardInfo(action), false);
    });
    it('returns true when action is replace, renew, or change', function() {
      let action = 'replace';
      assert.equal(cardTypeParser.needCurrentCardInfo(action), true);
    });
  });

  describe('#hasNewID', function() {
    it('returns false when new ID is not selected', function() {
      assert.equal(cardTypeParser.hasNewID(data.IDApp), false);
    });

    it('returns true when new ID is selected', function() {
      data.IDApp.isApplying = true;
      data.IDApp.action = 'new';
      assert.equal(cardTypeParser.hasNewID(data.IDApp), true);
    });
  });

  describe('#hasID', function() {
    it('returns false when an ID is not selected', function() {
      assert.equal(cardTypeParser.hasID(data.IDApp), false);
    });

    it('returns true when new ID is selected', function() {
      data.IDApp.isApplying = true;
      data.IDApp.action = 'new';
      assert.equal(cardTypeParser.hasID(data.IDApp), true);
    });

    it('returns true when card option is to renew an ID', function() {
      data.IDApp.isApplying = true;
      data.IDApp.action = 'renew';
      assert.equal(cardTypeParser.hasID(data.IDApp), true);
    });

    it('returns true when card option is to change an ID', function() {
      data.IDApp.isApplying = true;
      data.IDApp.action = 'change';
      assert.equal(cardTypeParser.hasID(data.IDApp), true);
    });
  });

  describe('#hasNewDL', function() {
    it('returns false when new DL is not selected', function() {
      assert.equal(cardTypeParser.hasNewDL(data.DLApp), false);
    });

    it('returns true when new DL is selected', function() {
      data.DLApp.isApplying = true;
      data.DLApp.action = 'new';
      assert.equal(cardTypeParser.hasNewDL(data.DLApp), true);
    });
  });

  describe('#hasDL', function() {
    it('returns false when an DL is not selected', function() {
      assert.equal(cardTypeParser.hasDL(data.DLApp), false);
    });

    it('returns true when new DL is selected', function() {
      data.DLApp.isApplying = true;
      data.DLApp.action = 'new';
      assert.equal(cardTypeParser.hasDL(data.DLApp), true);
    });

    it('returns true when card option is to renew a DL', function() {
      data.DLApp.isApplying = true;
      data.DLApp.action = 'renew';
      assert.equal(cardTypeParser.hasDL(data.DLApp), true);
    });

    it('returns true when card option is to change a DL', function() {
      data.DLApp.isApplying = true;
      data.DLApp.action = 'change';
      assert.equal(cardTypeParser.hasDL(data.DLApp), true);
    });
  });
});
