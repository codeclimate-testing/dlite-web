'use strict';

const assert = require('assert');

import {
  hasExistingCard,
  isRenewingCard,
  isChangingCard,
  isReplacingCard,
  isGettingNew,
  isCardActionSelected,
  otherIsSelected,
  hasSpecifiedChange,
  isCorrecting,
  isUpdating
} from '../../../../client/helpers/data/card-actions';

describe('Data helpers for card actions', function() {
  let data;
  beforeEach(function() {
    data = {
      cardType: {
        cardAction: ''
      },
      cardChanges: {
        correctOrUpdate: '',
        sections: []
      }
    };
  });
  describe('#hasExistingCard', function() {
    it('##hasExistingCard should be true if the card action is something other than new', function() {
      data.cardType.cardAction = 'renew';
      assert.equal(hasExistingCard(data), true);
    });
    it('##hasExistingCard should be false if the card action is new', function() {
      data.cardType.cardAction = 'new';
      assert.equal(hasExistingCard(data), false);
    });
    it('##hasExistingCard should be true if the card action is replace', function() {
      data.cardType.cardAction = 'replace';
      assert.equal(hasExistingCard(data), true);
    });
    it('##hasExistingCard should be true if the card action is change', function() {
      data.cardType.cardAction = 'change';
      assert.equal(hasExistingCard(data), true);
    });
  });

  describe('#isChangingCard', function() {
    it('is true if cardAction is "change"', function() {
      data.cardType.cardAction = 'change';
      assert.equal(isChangingCard(data), true);
    });
    it('is false if cardAction is "new"', function() {
      data.cardType.cardAction = 'new';
      assert.equal(isChangingCard(data), false);
    });
    it('is false if cardAction is "replace"', function() {
      data.cardType.cardAction = 'replace';
      assert.equal(isChangingCard(data), false);
    });
    it('is false if cardAction is "renew"', function() {
      data.cardType.cardAction = 'renew';
      assert.equal(isChangingCard(data), false);
    });
  });

  describe('#isReplacingCard', function() {
    it('is false if cardAction is "change"', function() {
      data.cardType.cardAction = 'change';
      assert.equal(isReplacingCard(data), false);
    });
    it('is false if cardAction is "new"', function() {
      data.cardType.cardAction = 'new';
      assert.equal(isReplacingCard(data), false);
    });
    it('is true if cardAction is "replace"', function() {
      data.cardType.cardAction = 'replace';
      assert.equal(isReplacingCard(data), true);
    });
    it('is false if cardAction is "renew"', function() {
      data.cardType.cardAction = 'renew';
      assert.equal(isReplacingCard(data), false);
    });
  });

  describe('#isRenewingCard', function() {
    it('is false if cardAction is "change"', function() {
      data.cardType.cardAction = 'change';
      assert.equal(isRenewingCard(data), false);
    });
    it('is false if cardAction is "new"', function() {
      data.cardType.cardAction = 'new';
      assert.equal(isRenewingCard(data), false);
    });
    it('is false if cardAction is "replace"', function() {
      data.cardType.cardAction = 'replace';
      assert.equal(isRenewingCard(data), false);
    });
    it('is true if cardAction is "renew"', function() {
      data.cardType.cardAction = 'renew';
      assert.equal(isRenewingCard(data), true);
    });
  });

  describe('#isGettingNew', function() {
    it('is false if cardAction is "change"', function() {
      data.cardType.cardAction = 'change';
      assert.equal(isGettingNew(data), false);
    });
    it('is true if cardAction is "new"', function() {
      data.cardType.cardAction = 'new';
      assert.equal(isGettingNew(data), true);
    });
    it('is false if cardAction is "replace"', function() {
      data.cardType.cardAction = 'replace';
      assert.equal(isGettingNew(data), false);
    });
    it('is false if cardAction is "renew"', function() {
      data.cardType.cardAction = 'renew';
      assert.equal(isGettingNew(data), false);
    });
  });

  describe('#isCardActionSelected', function() {
    it('is true when string is present', function() {
      data.cardType.cardAction = 'new';
      assert.equal(isCardActionSelected(data), true);
    });
    it('is false when blank', function() {
      assert.equal(isCardActionSelected(data), false);
    });
  });

  describe('#otherIsSelected', function() {
    it('is true when sections array includes "other"', function() {
      data.cardChanges.sections = ['other', 'name'];
      assert.equal(otherIsSelected(data), true);
    });
    it('is false when sections array does not include "other"', function() {
      assert.equal(otherIsSelected(data), false);
    });
  });

  describe('#hasSpecifiedChange', function() {
    it('is true when correctOrUpdate has value', function() {
      data.cardChanges.correctOrUpdate = 'correct';
      assert.equal(hasSpecifiedChange(data), true);
    });

    it('is false when blank', function() {
      assert.equal(hasSpecifiedChange(data), false);
    });
  });

  describe('#isCorrecting', function() {
    it('is true when field equals "correct"', function() {
      data.cardChanges.correctOrUpdate = 'correct';
      assert.equal(isCorrecting(data), true);
    });

    it('is false when field equals "update"', function() {
      data.cardChanges.correctOrUpdate = 'update';
      assert.equal(isCorrecting(data), false);
    });
    it('is false when field is blank', function() {
      assert.equal(isCorrecting(data), false);
    });
  });
  describe('#isUpdating', function() {
    it('is true when field equals "update"', function() {
      data.cardChanges.correctOrUpdate = 'update';
      assert.equal(isUpdating(data), true);
    });

    it('is false when field equals "correct"', function() {
      data.cardChanges.correctOrUpdate = 'correct';
      assert.equal(isUpdating(data), false);
    });
    it('is false when field is blank', function() {
      assert.equal(isUpdating(data), false);
    });
  });
});
