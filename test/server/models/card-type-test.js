'use strict';

const assert            = require('assert');
const cardTypeParser    = require('../../../server/models/parsers/card-type');
const dataHelper        = require('../../support/data-helper');

let cardType = { new: [], renew: '', change: '', youthIDInstead: '' };

describe('cardType', function() {
  describe('hasNewID', function() {
    it('returns false when new ID is not selected', function() {
      cardType = { new: ['DL'], renew: '', change: '', youthIDInstead: ''};
      assert.equal(cardTypeParser.hasNewID(cardType), false);
    });

    it('returns true when new ID is selected', function() {
      cardType = { new: ['ID'], renew: '', change: '', youthIDInstead: ''};
      assert.equal(cardTypeParser.hasNewID(cardType), true);
    });
  });

  describe('hasID', function() {
    it('returns false when an ID is not selected', function() {
      cardType = { new: [], renew: 'DL', change: '', youthIDInstead: ''};
      assert.equal(cardTypeParser.hasID(cardType), false);
    });

    it('returns true when new ID is selected', function() {
      cardType = { new: ['ID'], renew: '', change: '', youthIDInstead: ''};
      assert.equal(cardTypeParser.hasID(cardType), true);
    });

    it('returns true when card option is to renew an ID', function() {
      cardType = { new: [''], renew: 'ID', change: '', youthIDInstead: ''};
      assert.equal(cardTypeParser.hasID(cardType), true);
    });

    it('returns true when card option is to change an ID', function() {
      cardType = { new: [''], renew: 'ID', change: '', youthIDInstead: ''};
      assert.equal(cardTypeParser.hasID(cardType), true);
    });
  });

  describe('hasNewDL', function() {
    it('returns false when new DL is not selected', function() {
      cardType = { new: ['ID'], renew: '', change: '', youthIDInstead: ''};
      assert.equal(cardTypeParser.hasNewDL(cardType), false);
    });

    it('returns true when new DL is selected', function() {
      cardType = { new: ['DL'], renew: '', change: '', youthIDInstead: ''};
      assert.equal(cardTypeParser.hasNewDL(cardType), true);
    });
  });

  describe('hasDL', function() {
    it('returns false when an DL is not selected', function() {
      cardType = { new: [], renew: 'ID', change: '', youthIDInstead: ''};
      assert.equal(cardTypeParser.hasDL(cardType), false);
    });

    it('returns true when new DL is selected', function() {
      cardType = { new: ['DL'], renew: '', change: '', youthIDInstead: ''};
      assert.equal(cardTypeParser.hasDL(cardType), true);
    });

    it('returns true when card option is to renew a DL', function() {
      cardType = { new: [''], renew: 'DL', change: '', youthIDInstead: ''};
      assert.equal(cardTypeParser.hasDL(cardType), true);
    });

    it('returns true when card option is to change a DL', function() {
      cardType = { new: [''], renew: 'DL', change: '', youthIDInstead: ''};
      assert.equal(cardTypeParser.hasDL(cardType), true);
    });
  });
});
