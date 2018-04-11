'use strict';

const assert = require('assert');

import {
  getStringByStatus,
  showLicenseClass,
  getSummaryKey
} from '../../../../client/helpers/data/summary';

describe('#summary status helpers', function() {
  describe('#getStringByStatus', function() {
    const yesString = 'Yes';
    const noString = 'No';
    const declineString = 'decline to answer';

    it('returns the 2nd argument if value is "Yes"', function() {
      assert.equal(getStringByStatus('Yes', yesString, noString, declineString), yesString);
    });

    it('returns the 3rd argument if value is "No"', function() {
      assert.equal(getStringByStatus('No', yesString, noString, declineString), noString);
    });
    it('returns the 4th argument if value is "decline"', function() {
      assert.equal(getStringByStatus('decline', yesString, noString, declineString), declineString);
    });
  });

  describe('#showLicenseClass', function() {
    let data;
    beforeEach(function() {
      data = {
        DLApp: {
          isApplying: true,
          licenseType: {
            type: [],
            endorsements: [],
            needEndorsement: 'No'
          }
        }
      };
    });

    it('returns false if user is not getting a DL', function() {
      data.DLApp.isApplying = false;
      assert.equal(showLicenseClass(data), false);
    });

    it('returns false if user has not selected which class of license', function() {
      assert.equal(showLicenseClass(data), false);
    });

    it('returns true if user is getting a DL and has selected a class of license', function() {
      data.DLApp.licenseType.type = ['car'];
      assert.equal(showLicenseClass(data), true);
    });
  });

  describe('#getSummaryKey', function() {
    it('returns summary if appType is application', function() {
      assert.equal(getSummaryKey('application'), 'summary');
    });
    it('returns cdlSummary if appType is cdl', function() {
      assert.equal(getSummaryKey('cdl'), 'cdlSummary');
    });
  });
});
