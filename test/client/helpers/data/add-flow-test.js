'use strict';

import assert           from 'assert';
import {
  addSeniorID,
  addingSeniorID,
  addCardHistory,
  addingID,
  addingDL,
  addingExistingCard
} from '../../../../client/helpers/data/add-flow';

describe('Add-flow data helpers', function() {
  let props;
  beforeEach(function() {
    props = {
      flow: 'add',
      cardType: [],
      cardAction: '',
      licenseAndIdHistory: {
        DLIDNumber: '',
        month: '',
        day: '',
        year: ''
      },
      dateOfBirth: {
        year: (new Date().getFullYear() - 40).toString(),
        month: '4',
        day: '13'
      },
      seniorID: ''
    };
  });
  describe('#addSeniorID', function() {
    beforeEach(function() {
      props.cardType = ['ID'];
    });

    it('returns false when user is on edit flow', function() {
      props.flow = 'edit';
      assert.equal(addSeniorID(props), false);
    });

    it('returns false when user is younger than senior', function() {
      assert.equal(addSeniorID(props), false);
    });
    it('returns false when user is getting a DL', function() {
      props.cardType = ['DL'];
      assert.equal(addSeniorID(props), false);
    });

    it('returns true when user is senior adding an ID', function() {
      props.dateOfBirth.year = (new Date().getFullYear() - 70).toString();
      assert.equal(addSeniorID(props), true);
    });
  });

  describe('#addingSeniorID', function() {
    beforeEach(function() {
      props.cardType = ['ID'];
      props.seniorID = 'Yes';
    });

    it('returns false when user is on edit flow', function() {
      props.flow = 'edit';
      assert.equal(addingSeniorID(props), false);
    });

    it('returns false when user is not getting senior ID', function() {
      props.seniorID = 'No';
      assert.equal(addingSeniorID(props), false);
    });

    it('returns true when user is adding a senior ID', function() {
      assert.equal(addingSeniorID(props), true);
    });
  });

  describe('#addCardHistory', function() {
    beforeEach(function() {
      props.cardAction = 'new';
    });

    it('returns false when user is on edit flow', function() {
      props.flow = 'edit';
      assert.equal(addCardHistory(props), false);
    });

    it('returns false when user is not getting a new card', function() {
      props.cardAction = 'replace';
      assert.equal(addCardHistory(props), false);
    });

    it('returns false when user has already entered license and id history', function() {
      props.licenseAndIdHistory.DLIDNumber = 'A100a';
      assert.equal(addCardHistory(props), false);
    });

    it('returns true when user is getting a new card and has not entered history yet', function() {
      assert.equal(addCardHistory(props), true);
    });
  });

  describe('#addingID', function() {
    beforeEach(function() {
      props.cardType = ['ID'];
    });

    it('returns false when user is on edit flow', function() {
      props.flow = 'edit';
      assert.equal(addingID(props), false);
    });

    it('returns false when user is getting a DL', function() {
      props.cardType = ['DL'];
      assert.equal(addingID(props), false);
    });

    it('returns true when user is adding an ID', function() {
      assert.equal(addingID(props), true);
    });
  });

  describe('#addingDL', function() {
    beforeEach(function() {
      props.cardType = ['DL'];
    });

    it('returns false when user is on edit flow', function() {
      props.flow = 'edit';
      assert.equal(addingDL(props), false);
    });

    it('returns false when user is getting an ID', function() {
      props.cardType = ['ID'];
      assert.equal(addingDL(props), false);
    });

    it('returns true when user is adding a DL', function() {
      assert.equal(addingDL(props), true);
    });
  });

  describe('#addingExistingCard', function() {
    it('returns false when user is adding a new card', function() {
      props.cardAction = 'new';
      assert.equal(addingExistingCard(props), false);
    });
    it('returns true when user is renewing, replacing, or changing a card', function() {
      props.cardAction = 'change';
      assert.equal(addingExistingCard(props), true);
    });
  });

});