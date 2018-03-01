'use strict';
const assert = require('assert');

import {
  licenseAndIdIssued,
  showIssuedIn,
  showExpirationDate,
  cardNumber,
  licenseIssuesIsSuspended,
  hasMedical,
  hasUsedPreviousNames,
  getStringByMedical,
  getStringByPreviousNames
} from '../../../../client/helpers/data/my-history';

describe('Data helpers for my-history data', function() {
  let props = {
    licenseAndIdHistory: {}
  }
  beforeEach(function() {
    props.licenseAndIdHistory = {
      isIssued: '',
      number: '',
      month: '',
      day: '',
      year: '',
      issuedBy: ''
    };
  });
  describe('#licenseAndIdIssued', function() {
    it('is true when value equals Yes', function() {
      props.licenseAndIdHistory.isIssued = 'Yes';
      assert.equal(licenseAndIdIssued(props), true);
    });

    it('is false when value equals No', function() {
      props.licenseAndIdHistory.isIssued = 'No';
      assert.equal(licenseAndIdIssued(props), false);
    });
    it('is false when value is blank', function() {
      props.licenseAndIdHistory.isIssued = '';
      assert.equal(licenseAndIdIssued(props), false);
    });
  });

  describe('#showIssuedIn', function() {
    it('returns false when card not issued', function() {
      props.licenseAndIdHistory.isIssued = 'No';
      assert.equal(showIssuedIn(props), false);
    });
    it('returns false when issuedBy field is blank', function() {
      props.licenseAndIdHistory.isIssued = 'Yes';
      props.licenseAndIdHistory.issuedBy = '';
      assert.equal(showIssuedIn(props), false);
    });
  });

  describe('#showExpirationDate', function() {
    it('returns false when card not issued', function() {
      props.licenseAndIdHistory.isIssued = 'No';
      assert.equal(showExpirationDate(props), false);
    });
    it('returns false when date not complete', function() {
      props.licenseAndIdHistory.isIssued = 'Yes';
      props.licenseAndIdHistory.month = '10';
      assert.equal(showExpirationDate(props), false);
    });
  });

  describe('#dateOfIssue', function() {
    it('returns "None" when card not issued', function() {
      props.licenseAndIdHistory.isIssued = 'No';
      assert.equal(cardNumber(props), "None");
    });
    it('returns the card number when card is issued', function() {
      props.licenseAndIdHistory.isIssued = 'Yes';
      props.licenseAndIdHistory.number = 'AA999';
      assert.equal(cardNumber(props), 'AA999');
    });
  });

  describe('#licenseIssuesIsSuspended', function() {
    let props = {
      licenseIssues: {
        isSuspended: ''
      }
    };
    it('is true when value equals Yes', function() {
      props.licenseIssues.isSuspended = 'Yes';
      assert.equal(licenseIssuesIsSuspended(props), true);
    });
    it('is false when value equals No', function() {
      props.licenseIssues.isSuspended = 'No';
      assert.equal(licenseIssuesIsSuspended(props), false);
    });
    it('is false when value is blank', function() {
      props.licenseIssues.isSuspended = '';
      assert.equal(licenseIssuesIsSuspended(props), false);
    });
  });

  describe('#hasMedical', function() {
    let props = {
      medicalHistory: {
        hasMedicalCondition: ''
      }
    };
    it('is true when value equals Yes', function() {
      props.medicalHistory.hasMedicalCondition = 'Yes';
      assert.equal(hasMedical(props), true);
    });
    it('is false when value equals No', function() {
      props.medicalHistory.hasMedicalCondition = 'No';
      assert.equal(hasMedical(props), false);
    });
    it('is false when value is blank', function() {
      props.medicalHistory.hasMedicalCondition = '';
      assert.equal(hasMedical(props), false);
    });
  });

  describe('#hasUsedPreviousNames', function() {
    let props = {
      namesHistory: {
        hasUsedPreviousNames: ''
      }
    };
    it('is true when value equals Yes', function() {
      props.namesHistory.hasUsedPreviousNames = 'Yes';
      assert.equal(hasUsedPreviousNames(props), true);
    });
    it('is false when value equals No', function() {
      props.namesHistory.hasUsedPreviousNames = 'No';
      assert.equal(hasUsedPreviousNames(props), false);
    });
    it('is false when value is blank', function() {
      props.namesHistory.hasUsedPreviousNames = '';
      assert.equal(hasUsedPreviousNames(props), false);
    });
  });

  describe('#getStringByMedical', function() {
    let props;
    let medicalInfo = 'test';
    beforeEach(function() {
      props = {
        medicalHistory: {
          medicalInfo: '',
          hasMedicalCondition: ''
        }
      };
    });

    it('returns medicalInfo is user indicated they have a condition', function() {
      props.medicalHistory.hasMedicalCondition = 'Yes';
      props.medicalHistory.medicalInfo = medicalInfo;
      assert.equal(getStringByMedical(props), medicalInfo);
    });

    it('returns "None" if user has indicated they do not have a condition', function() {
      props.medicalHistory.hasMedicalCondition = 'No';
      props.medicalHistory.medicalInfo = medicalInfo;
      assert.equal(getStringByMedical(props), "None");
    });
  });

  describe('#getStringByPreviousNames', function() {
    let props;
    let previousNames = 'that one, and that one';
    beforeEach(function() {
      props = {
        namesHistory: {
          hasUsedPreviousNames: '',
          previousNames: ''
        }
      };
    });

    it('returns previous names if user has indicated they have used previous names', function() {
      props.namesHistory.hasUsedPreviousNames = 'Yes';
      props.namesHistory.previousNames = previousNames;
      assert.equal(getStringByPreviousNames(props), previousNames);
    });
    it('returns "None" if user has indicated they do not have a condition', function() {
      props.namesHistory.hasUsedPreviousNames = 'No';
      assert.equal(getStringByPreviousNames(props), 'None');
    });
  });
});