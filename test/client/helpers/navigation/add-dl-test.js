'use strict';

const assert = require('assert');

import {
  addWdywtdt,
  addCurrentCardInfo,
  addMedicalHistory
} from '../../../../client/helpers/navigation/add-dl/next-path';


describe('Add-DL next paths', function() {
  let data;
  beforeEach(function() {
    data = {
      cardType: [],
      cardAction: ''
    };
  });

  describe('#addWdywtdt', function() {
    it('returns "addCurrentCardInfo" if user is renewing a card', function() {
      data.cardAction = 'renew';
      assert.equal(addWdywtdt(data), 'addCurrentCardInfo');
    });

    it('returns "addCurrentCardInfo" if user is replacing a card', function() {
      data.cardAction = 'replace';
      assert.equal(addWdywtdt(data), 'addCurrentCardInfo');
    });

    it('returns "addLicenseClass" if user is getting a new card', function() {
      data.cardAction = 'new';
      assert.equal(addWdywtdt(data), 'addLicenseClass');
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

