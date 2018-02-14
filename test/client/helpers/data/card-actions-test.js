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
  isUpdating,
  hasActionIsCorrecting,
  hasActionIsUpdating,
  getStringByAction
} from '../../../../client/helpers/data/card-actions';

describe('Data helpers for card actions', function() {
  let data;
  beforeEach(function() {
    data = {
      cardAction: '',
      cardChanges: {
        correctOrUpdate: '',
        sections: []
      }
    };
  });
  describe('#hasExistingCard', function() {
    it('##hasExistingCard should be true if the card action is something other than new', function() {
      data.cardAction = 'renew';
      assert.equal(hasExistingCard(data), true);
    });
    it('##hasExistingCard should be false if the card action is new', function() {
      data.cardAction = 'new';
      assert.equal(hasExistingCard(data), false);
    });
    it('##hasExistingCard should be true if the card action is replace', function() {
      data.cardAction = 'replace';
      assert.equal(hasExistingCard(data), true);
    });
    it('##hasExistingCard should be true if the card action is change', function() {
      data.cardAction = 'change';
      assert.equal(hasExistingCard(data), true);
    });
  });

  describe('#isChangingCard', function() {
    it('is true if cardAction is "change"', function() {
      data.cardAction = 'change';
      assert.equal(isChangingCard(data), true);
    });
    it('is false if cardAction is "new"', function() {
      data.cardAction = 'new';
      assert.equal(isChangingCard(data), false);
    });
    it('is false if cardAction is "replace"', function() {
      data.cardAction = 'replace';
      assert.equal(isChangingCard(data), false);
    });
    it('is false if cardAction is "renew"', function() {
      data.cardAction = 'renew';
      assert.equal(isChangingCard(data), false);
    });
  });

  describe('#isReplacingCard', function() {
    it('is false if cardAction is "change"', function() {
      data.cardAction = 'change';
      assert.equal(isReplacingCard(data), false);
    });
    it('is false if cardAction is "new"', function() {
      data.cardAction = 'new';
      assert.equal(isReplacingCard(data), false);
    });
    it('is true if cardAction is "replace"', function() {
      data.cardAction = 'replace';
      assert.equal(isReplacingCard(data), true);
    });
    it('is false if cardAction is "renew"', function() {
      data.cardAction = 'renew';
      assert.equal(isReplacingCard(data), false);
    });
  });

  describe('#isRenewingCard', function() {
    it('is false if cardAction is "change"', function() {
      data.cardAction = 'change';
      assert.equal(isRenewingCard(data), false);
    });
    it('is false if cardAction is "new"', function() {
      data.cardAction = 'new';
      assert.equal(isRenewingCard(data), false);
    });
    it('is false if cardAction is "replace"', function() {
      data.cardAction = 'replace';
      assert.equal(isRenewingCard(data), false);
    });
    it('is true if cardAction is "renew"', function() {
      data.cardAction = 'renew';
      assert.equal(isRenewingCard(data), true);
    });
  });

  describe('#isGettingNew', function() {
    it('is false if cardAction is "change"', function() {
      data.cardAction = 'change';
      assert.equal(isGettingNew(data), false);
    });
    it('is true if cardAction is "new"', function() {
      data.cardAction = 'new';
      assert.equal(isGettingNew(data), true);
    });
    it('is false if cardAction is "replace"', function() {
      data.cardAction = 'replace';
      assert.equal(isGettingNew(data), false);
    });
    it('is false if cardAction is "renew"', function() {
      data.cardAction = 'renew';
      assert.equal(isGettingNew(data), false);
    });
  });

  describe('#isCardActionSelected', function() {
    it('is true when string is present', function() {
      data.cardAction = 'new';
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

  describe('#hasActionIsCorrecting', function() {
    beforeEach(function() {
      data.cardAction = 'change';
    });
    it('is true when cardAction is "change" and user is correcting card', function() {
      data.cardChanges.correctOrUpdate = 'correct';
      assert.equal(hasActionIsCorrecting(data), true);
    });

    it('is false when user is updating card', function(){
      data.cardChanges.correctOrUpdate = 'update';
      assert.equal(hasActionIsCorrecting(data), false);
    });

    it('is false when user is correcting a card but current cardAction is not "change"', function() {
      data.cardChanges.correctOrUpdate = 'correct';
      data.cardAction = 'renew';
      assert.equal(hasActionIsCorrecting(data), false);
    });
  });

  describe('#hasActionIsUpdating', function() {
    beforeEach(function() {
      data.cardAction = 'change';
    });
    it('is true when cardAction is "change" and user is updating card', function() {
      data.cardChanges.correctOrUpdate = 'update';
      assert.equal(hasActionIsUpdating(data), true);
    });

    it('is false when user is correcting card', function(){
      data.cardChanges.correctOrUpdate = 'correct';
      assert.equal(hasActionIsUpdating(data), false);
    });

    it('is false when user is updating a card but current cardAction is not "change"', function() {
      data.cardChanges.correctOrUpdate = 'update';
      data.cardAction = 'renew';
      assert.equal(hasActionIsUpdating(data), false);
    });
  });

  describe('#getStringByAction', function() {
    const newString = 'new string';
    const renewString = 'this is the string I see when I renew my card';
    const replaceString = 'now i am replacing it';
    const changeString = 'changing but i dont know how';
    const updateString = 'update string';
    const correctString = 'correct string';

    it('returns the new string if cardAction is new', function() {
      data.cardAction = 'new';
      assert.equal(getStringByAction(data, newString, renewString, replaceString, null, updateString, correctString), newString);
    });
    it('returns the renew string if cardAction is renew', function() {
      data.cardAction = 'renew';
      assert.equal(getStringByAction(data, newString, renewString, replaceString, null, updateString, correctString), renewString);
    });
    it('returns the replace string if cardAction is replace', function() {
      data.cardAction = 'replace';
      assert.equal(getStringByAction(data, newString, renewString, replaceString, null, updateString, correctString), replaceString);
    });
    it('returns the change string if cardAction is change and cardChange hasnt been selected', function() {
      data.cardAction = 'change';
      assert.equal(getStringByAction(data, newString, renewString, replaceString, changeString, updateString, correctString), changeString);
    });
    it('returns the update string if cardAction is change and cardChange is update', function() {
      data.cardAction = 'change';
      data.cardChanges.correctOrUpdate = 'update';
      assert.equal(getStringByAction(data, newString, renewString, replaceString, null, updateString, correctString), updateString);
    });
    it('returns the correct string if cardAction is change and cardChange is correct', function() {
      data.cardAction = 'change';
      data.cardChanges.correctOrUpdate = 'correct';
      assert.equal(getStringByAction(data, newString, renewString, replaceString, null, updateString, correctString), correctString);
    });
  });
});
