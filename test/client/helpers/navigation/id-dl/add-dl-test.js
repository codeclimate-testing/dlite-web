'use strict';

const assert = require('assert');

import {
  addWdywtdt,
  addCurrentCardInfo,
  addMedicalHistory
} from '../../../../../client/helpers/navigation/id-dl/add-dl/next-path';


describe('Add-DL next paths', function() {
  let data;
  beforeEach(function() {
    data = {
      cardType: [],
      cardAction: '',
      currentCardInfo: {
        number: ''
      },
      dateOfBirth: {
        year: (new Date().getFullYear() - 30).toString(),
        month: '10',
        day: '10'
      }
    };
  });

  describe('#addWdywtdt', function() {
    it('returns "addLicenseClass" if user is getting a new card', function() {
      data.cardAction = 'new';
      assert.equal(addWdywtdt(data), 'addLicenseClass');
    });

    it('returns "addCurrentCardInfo" if user is renewing a card and user has not already added currentCardInfo in ID path', function() {
      data.cardAction = 'renew';
      assert.equal(addWdywtdt(data), 'addCurrentCardInfo');
    });

    it('returns "addCurrentCardInfo" if user is replacing a card and user has not already added currentCardInfo in ID path', function() {
      data.cardAction = 'replace';
      assert.equal(addWdywtdt(data), 'addCurrentCardInfo');
    });

    it('returns "addUpdateCorrect" if user is a senior changing a card who has already entered current card info', function() {
      data.cardAction = 'change';
      data.dateOfBirth.year = '1950';
      data.currentCardInfo = {
        number: '00000'
      };
      assert.equal(addWdywtdt(data), 'addUpdateCorrect');
    });

    it('returns "addReplacementDetails" if user is replacing a card but has already entered currentCardInfo in ID flow', function() {
      data.cardAction = 'replace';
      data.currentCardInfo = {
        number: '00000'
      };
      assert.equal(addWdywtdt(data), 'addReplacementDetails');
    });
  });

  describe('#addCurrentCardInfo', function() {
    it('returns "addLicenseClass" if user is getting a new card', function() {
      data.cardAction = 'new';
      assert.equal(addCurrentCardInfo(data), 'addLicenseClass');
    });

    it('returns "addLicenseClass" if user is renewing a card', function() {
      data.cardAction = 'renew';
      assert.equal(addCurrentCardInfo(data), 'addLicenseClass');
    });

    it('returns "addUpdateCorrect" if user is changing a card', function() {
      data.cardAction = 'change';
      assert.equal(addCurrentCardInfo(data), 'addUpdateCorrect');
    });

    it('returns "addReplacementDetails" if user is replacing a card', function() {
      data.cardAction = 'replace';
      assert.equal(addCurrentCardInfo(data), 'addReplacementDetails');
    });
  });

  describe('#addMedicalHistory', function() {
    it('returns "addLicenseHistory" if user is getting a new card', function() {
      data.cardAction = 'new';
      assert.equal(addMedicalHistory(data), 'addLicenseHistory');
    });

    it('returns "addIssueHistory" if user is replacing a card', function() {
      data.cardAction = 'replace';
      assert.equal(addMedicalHistory(data), 'addIssueHistory');
    });

    it('returns "addIssueHistory" if user is changing a card', function() {
      data.cardAction = 'change';
      assert.equal(addMedicalHistory(data), 'addIssueHistory');
    });
  });
});

