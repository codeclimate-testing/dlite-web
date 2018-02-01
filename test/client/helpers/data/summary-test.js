'use strict';

const assert = require('assert');

import {
  IDChanging,
  DLChanging,
  IDReplacing,
  DLReplacing,
  IDGettingNew,
  DLGettingNew,
  IDRenewing,
  DLRenewing,
  summaryHasID,
  summaryHasDL
} from '../../../../client/helpers/data/summary';

describe('#summary status helpers', function() {
  let data;
  beforeEach(function() {
    data = {
      cardType: {
        ID: {
          action: ''
        },
        DL: {
          action: ''
        }
      }
    }
  });
  describe('#changing an ID', function() {
    it('is true when ID action is change', function() {
      data.cardType.ID.action = 'change';
      assert.equal(IDChanging(data), true);
    });
    it('is false when DL action is change but ID is blank', function() {
      data.cardType.DL.action = 'change';
      assert.equal(IDChanging(data), false);
    });
    it('is false when neither action is change', function() {
      data.cardType.ID.action = 'renew';
      assert.equal(IDChanging(data), false);
    });
  });

  describe('#Replacing an ID', function() {
    it('is true when ID action is replace', function() {
      data.cardType.ID.action = 'replace';
      assert.equal(IDReplacing(data), true);
    });
    it('is false when DL action is replace and ID is blank', function() {
      data.cardType.DL.action = 'replace';
      assert.equal(IDReplacing(data), false);
    });
    it('is false when neither action is replace', function() {
      data.cardType.DL.action = 'new';
      data.cardType.ID.action = 'renew';
      assert.equal(IDReplacing(data), false);
    });
  });

  describe('#summaryIsRenewing', function() {
    it('is true when ID action is renew and DL action is not renew', function() {
      data.cardType.ID.action = 'renew';
      data.cardType.DL.action = 'new';
      assert.equal(IDRenewing(data), true);
    });
    it('is false when ID action is not renew', function() {
      data.cardType.ID.action = 'new';
      data.cardType.DL.action = 'renew';
      assert.equal(IDRenewing(data), false);
    });
    it('is false when neither action is renew', function() {
      assert.equal(IDRenewing(data), false);
    });
  });

  describe('#summaryIsGettingNew', function() {
    it('is true when ID action is new and DL action is not new', function() {
      data.cardType.ID.action = 'new';
      assert.equal(IDGettingNew(data), true);
    });
    it('is false when ID action is not new', function() {
      data.cardType.ID.action = 'replace';
      data.cardType.DL.action = 'new';
      assert.equal(IDGettingNew(data), false);
    });
    it('is false when neither action is new', function() {
      assert.equal(IDGettingNew(data), false);
    });
  });
});
