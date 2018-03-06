'use strict';

const assert = require('assert');

import {
  addIDWdywtdt,
  addCurrentIDInfo,
  addChangedID,
  addSeniorID
} from '../../../../../client/helpers/navigation/id-dl/add-id/next-path';

describe('Add ID Card next-paths', function() {
  let props;
  beforeEach(function() {
    props = {
      cardType: ['ID'],
      cardAction: 'new',
      dateOfBirth: {
        month: '04',
        day: '10',
        year: (new Date().getFullYear() - 20).toString()
      }
    };
  });

  describe('#addIDWdywtdt', function() {

    it('returns "addReducedFee" if user is a non-senior getting a new card', function() {
      assert.equal(addIDWdywtdt(props), 'addReducedFee');
    });
    it('returns "addReducedFee" if user is a non-senior renewing a card who has already entered current card info', function() {
      props.cardAction = 'renew';
      props.currentCardInfo = {
        number: '0000'
      };
      assert.equal(addIDWdywtdt(props), 'addReducedFee');
    });

    it('returns "addCurrentIDInfo" if user is a senior renewing a card who has not already entered current card info', function() {
      props.dateOfBirth.year = '1950';
      props.cardAction = 'renew';
      assert.equal(addIDWdywtdt(props), 'addCurrentIDInfo');
    });

    it('returns "addCurrentIDInfo" if user is a non-senior replacing a card who has not already entered current card info', function() {
      props.cardAction = 'replace';
      assert.equal(addIDWdywtdt(props), 'addCurrentIDInfo');
    });

    it('returns "addCorrectUpdateID" if user is a senior changing a card who has already entered current card info', function() {
      props.cardAction = 'change';
      props.dateOfBirth.year = '1950';
      props.currentCardInfo = {
        number: '00000000'
      };
      assert.equal(addIDWdywtdt(props), 'addCorrectUpdateID');
    });

    it('returns "addIDReplacementDetails" if user is a senior replacing a card who has already entered current card info', function() {
      props.cardAction = 'replace';
      props.dateOfBirth = '1950';
      props.currentCardInfo = {
        number: '00000000'
      };
      assert.equal(addIDWdywtdt(props), 'addIDReplacementDetails');
    });

    it('returns "addSeniorID" if user is a senior', function() {
      props.dateOfBirth.year = '1950';
      assert.equal(addIDWdywtdt(props), 'addSeniorID');
    });
  });

  describe('#addCurrentIDInfo', function() {
    it('returns "addSeniorID" if user is a senior getting a new card', function() {
      props.cardAction = 'new';
      props.dateOfBirth.year = '1950';
      assert.equal(addCurrentIDInfo(props), 'addSeniorID');
    });

    it('returns "addIDReplacementDetails" if user is replacing a card', function() {
      props.cardAction = 'replace';
      assert.equal(addCurrentIDInfo(props), 'addIDReplacementDetails');
    });

    it('returns "addCorrectUpdateID" if user is updating or correcting a card', function() {
      props.cardAction = 'change';
      assert.equal(addCurrentIDInfo(props), 'addCorrectUpdateID');
    });

    it('returns "addReducedFee" if non-senior user is renewing or getting a new card', function() {
      props.cardAction = 'new';
      assert.equal(addCurrentIDInfo(props), 'addReducedFee');
    });
  });

  describe('#addChangedID', function() {
    it('returns "addSeniorID" if user is a senior', function() {
      props.dateOfBirth.year = '1950';
      assert.equal(addChangedID(props), 'addSeniorID');
    });
    it('returns "addReducedFee" otherwise', function() {
      assert.equal(addChangedID(props), 'addReducedFee');
    });
  });

  describe('#addSeniorID', function() {
    it('returns "summary" if user is getting a senior ID', function() {
      let props = {
        IDApp: {
          seniorID: 'Yes'
        }
      };
      assert.equal(addSeniorID(props), "summary");
    });

    it('returns "addReducedFee" if user is getting a senior ID', function() {
      let props = {
        IDApp: {
          seniorID: 'No'
        }
      };
      assert.equal(addSeniorID(props), "addReducedFee");
    });
  });
});