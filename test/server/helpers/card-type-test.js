'use strict';

const assert            = require('assert');
const cardTypeParser    = require('../../../server/helpers/card-type');
const dataHelper        = require('../../support/data-helper');

let cardType;

describe('cardType', function() {
  beforeEach(function() {
    cardType = {
      IDDL: [],
      cardAction: '',
      youthIDInstead: '' ,
      ID: {action: ''},
      DL: {action: ''}
    }
  });
  describe('#getNew', function() {
    it('returns false when cardAction is not new', function() {
      cardType.ID.action = 'replace';
      cardType.DL.action = 'change'
      assert.equal(cardTypeParser.getNew(cardType), false);
    });
    it('returns true when cardAction is new', function() {
      cardType.ID.action = 'new';
      assert.equal(cardTypeParser.getNew(cardType), true);
    });
  });

  describe('#getReplace', function() {
    it('returns false when cardAction is not replace', function() {
      cardType.ID.action = 'renew';
      assert.equal(cardTypeParser.getReplace(cardType), false);
    });
    it('returns true when cardAction is replace', function() {
      cardType.DL.action = 'replace';
      assert.equal(cardTypeParser.getReplace(cardType), true);
    });
  });

  describe('#getChange', function() {
    it('returns false when cardAction is not change', function() {
      cardType.ID.action = 'replace';
      assert.equal(cardTypeParser.getChange(cardType), false);
    });
    it('returns true when cardAction is change', function() {
      cardType.DL.action = 'change';
      assert.equal(cardTypeParser.getChange(cardType), true);
    });
  });

  describe('#needCurrentCardInfo', function(){
    it('returns false when cardAction is new', function() {
      cardType.DL.action = 'new';
      assert.equal(cardTypeParser.needCurrentCardInfo(cardType), false);
    });
    it('returns true when cardAction is replace, renew, or change', function() {
      cardType.DL.action = 'replace';
      assert.equal(cardTypeParser.needCurrentCardInfo(cardType), true);
    });
  });

  describe('#hasNewID', function() {
    it('returns false when new ID is not selected', function() {
      cardType = { IDDL: ['DL'], ID: {action: ''}, DL: {action: 'new'}, youthIDInstead: ''};
      assert.equal(cardTypeParser.hasNewID(cardType), false);
    });

    it('returns true when new ID is selected', function() {
      cardType = { IDDL: ['ID'], ID: {action: 'new'}, DL: {action: ''},youthIDInstead: ''};
      assert.equal(cardTypeParser.hasNewID(cardType), true);
    });
  });

  describe('#hasID', function() {
    it('returns false when an ID is not selected', function() {
      cardType = { IDDL: ['DL'], DL: {action: 'new'}, ID: {action: ''}, youthIDInstead: ''};
      assert.equal(cardTypeParser.hasID(cardType), false);
    });

    it('returns true when new ID is selected', function() {
      cardType = { IDDL: ['ID'], ID: {action: 'new'}, DL: {action: 'new'}, youthIDInstead: ''};
      assert.equal(cardTypeParser.hasID(cardType), true);
    });

    it('returns true when card option is to renew an ID', function() {
      cardType = { IDDL: ['ID'], ID: {action: 'renew'}, DL: {action: ''}, youthIDInstead: ''};
      assert.equal(cardTypeParser.hasID(cardType), true);
    });

    it('returns true when card option is to change an ID', function() {
      cardType = { IDDL: ['ID'], ID: {action: 'renew'}, DL: {action: ''}, youthIDInstead: ''};
      assert.equal(cardTypeParser.hasID(cardType), true);
    });
  });

  describe('#hasNewDL', function() {
    it('returns false when new DL is not selected', function() {
      cardType = { IDDL: ['ID'], ID: {action: 'new'}, DL: {action: ''}, youthIDInstead: ''};
      assert.equal(cardTypeParser.hasNewDL(cardType), false);
    });

    it('returns true when new DL is selected', function() {
      cardType = { IDDL: ['DL'], DL: {action: 'new'}, ID: {action: ''}, youthIDInstead: ''};
      assert.equal(cardTypeParser.hasNewDL(cardType), true);
    });
  });

  describe('#hasDL', function() {
    it('returns false when an DL is not selected', function() {
      cardType = { IDDL: ['ID'], ID: {action: 'renew'}, DL: {action: ''}, youthIDInstead: ''};
      assert.equal(cardTypeParser.hasDL(cardType), false);
    });

    it('returns true when new DL is selected', function() {
      cardType = { IDDL: ['DL'], ID: {action: ''}, DL: {action: 'new'}, youthIDInstead: ''};
      assert.equal(cardTypeParser.hasDL(cardType), true);
    });

    it('returns true when card option is to renew a DL', function() {
      cardType = { IDDL: ['DL'], DL: {action: 'renew'}, ID: {action: ''}, youthIDInstead: ''};
      assert.equal(cardTypeParser.hasDL(cardType), true);
    });

    it('returns true when card option is to change a DL', function() {
      cardType = { IDDL: ['DL'], DL: {action: 'change'}, ID: {action: ''}, youthIDInstead: ''};
      assert.equal(cardTypeParser.hasDL(cardType), true);
    });
  });

  describe('#getSingleCardType', function() {
    it('returns DL when only DL is selected', function() {
      cardType = { IDDL: ['DL'], ID: {action: 'new'}, DL: {action: ''}, youthIDInstead: ''};
      assert.equal(cardTypeParser.getSingleCardType(cardType), 'DL');
    });

    it('returns ID when only ID is selected', function() {
      cardType = { IDDL: ['ID'], ID: {action: 'new'}, DL: {action: ''}, youthIDInstead: ''};
      assert.equal(cardTypeParser.getSingleCardType(cardType), 'ID');
    });
  });

});
