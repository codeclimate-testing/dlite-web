'use strict';

import assert           from 'assert';
import {
  editSeniorID,
  initialSeniorID,
  editOrAddCurrentCardInfo,
  editOrAddCardChanges,
  editOrAddReplacementDetails,
  editCardHistory,
  editReducedFee,
  initialDL,
  initialGetNewDL,
  initialReducedFee
} from '../../../../client/helpers/data/edit-flow';

describe('Edit-flow data helpers', function() {
  let props;
  beforeEach(function() {
    props = {
      flow: 'edit',
      cardType: [],
      cardAction: '',
      currentCardInfo: {
        number: '',
        year: '',
        day: '',
        month: ''
      },
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
      seniorID: '',
      reducedFee: {
        ID: ''
      }
    };
  });

  describe('#editSeniorID', function() {
    beforeEach(function() {
      props.cardType = ['ID'];
      props.dateOfBirth.year = (new Date().getFullYear() - 65).toString();
    });

    it('returns false when user is on add flow', function() {
      props.flow = 'add';
      assert.equal(editSeniorID(props), false);
    });

    it('returns false when user is too young', function() {
      props.dateOfBirth.year = (new Date().getFullYear() - 40).toString();
      assert.equal(editSeniorID(props), false);
    });

    it('returns false when senior is editing a DL', function() {
      props.cardType = ['DL'];
      assert.equal(editSeniorID(props), false);
    });

    it('returns true when user is a senior editing an ID', function() {
      assert.equal(editSeniorID(props), true);
    });
  });

  describe('#initialSeniorID', function() {
    beforeEach(function() {
      props.flow = '';
      props.cardType = ['ID']
      props.dateOfBirth.year = (new Date().getFullYear() - 65).toString();
    });

    it('returns true when user is a senior going through the ID application', function() {
      assert.equal(initialSeniorID(props), true);
    });

  });

  describe('#editOrAddCurrentCardInfo', function() {
    beforeEach(function() {
      props.cardAction = 'replace';
    });

    it('returns false when user is getting a new card', function() {
      props.cardAction = 'new';
      assert.equal(editOrAddCurrentCardInfo(props), false);
    });

    it('returns false when user has already entered current card info', function() {
      props.currentCardInfo.number = 'd10filjawe';
      assert.equal(editOrAddCurrentCardInfo(props), false);
    });

    it('returns true when user is adding or editing an existing card and has not yet entered info', function() {
      assert.equal(editOrAddCurrentCardInfo(props), true);
    });
  });

  describe('#editOrAddCardChanges', function() {
    beforeEach(function() {
      props.cardAction = 'change';
    });

    it('returns true when user is adding or editing a card to correct or update', function() {
      assert.equal(editOrAddCardChanges(props), true);
    });
  });

  describe('#editOrAddReplacementDetails', function() {
    beforeEach(function() {
      props.cardAction = 'replace';
    });

    it('returns true when user is adding or editing a replacement dcard', function() {
      assert.equal(editOrAddReplacementDetails(props), true);
    });
  });

  describe('#editCardHistory', function() {
    beforeEach(function() {
      props.cardAction = 'new';
    });

    it('returns true when user is editing a new card and has not yet entered info', function() {
      assert.equal(editCardHistory(props), true);
    });
  });

  describe('#editReducedFee', function() {
    it('returns true when user is editing a card and has not made a reduced fee selection and is not getting a senior ID', function() {
      assert.equal(editReducedFee(props), true);
    });
    it('returns false when user is getting a senior ID', function() {
      props.seniorID = 'Yes';
      assert.equal(editReducedFee(props), false);
    });
    it('returns false when user is getting a reduced fee', function() {
      props.reducedFee.ID = 'Yes';
      assert.equal(editReducedFee(props), false);
    });
  });

  describe('#initialDL', function() {
    beforeEach(function() {
      props.flow = '';
      props.cardType = ['DL'];
    });

    it('returns true when user is going through DL application', function() {
      assert.equal(initialDL(props), true);
    });
  });

  describe('#initialGetNewDL', function() {
    beforeEach(function() {
      props.flow = '';
      props.cardType = ['DL'];
      props.cardAction = 'new';
    });

    it('returns true when user is going through new DL application', function() {
      assert.equal(initialGetNewDL(props), true);
    });
    it('returns false when user is going through renewal DL application', function() {
      props.cardAction = 'renew';
      assert.equal(initialGetNewDL(props), false);
    });
  });

  describe('#initialReducedFee', function() {
    beforeEach(function() {
      props.flow = '';
      props.cardType = ['ID'];
    });

    it('returns true when user is going through ID application and is not getting a senior ID', function() {
      assert.equal(initialReducedFee(props), true);
    });
    it('returns false when user is going through DL application', function() {
      props.cardType = ['DL']
      assert.equal(initialReducedFee(props), false);
    });
  });

});