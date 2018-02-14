'use strict';

const assert = require('assert');

import {

  hideMain,
  getErrorMessage,
  getStringByStatus,
  showLicenseClass
} from '../../../../client/helpers/data/summary';

describe('#summary status helpers', function() {
  let data;
  beforeEach(function() {
    data = {
      server: {
        apiState: ''
      }
    }
  });


  describe('#hideMain', function() {

    it('returns "hide" if apiStatus is "loading"', function() {
      data.server.apiStatus = 'loading';
      assert.equal(hideMain(data), 'hide');
    });
    it('returns a blank string if apiStatus is ""', function() {
      assert.equal(hideMain(data), '');
    });
    it('returns a blank string if apiStatus is "success"', function() {
      data.server.apiStatus = 'success';
      assert.equal(hideMain(data), '');
    });
    it('returns a blank string if apiStatus is "error"', function() {
      data.server.apiStatus = 'error';
      assert.equal(hideMain(data), '');
    });
  });

  describe('#getErrorMessage', function() {

    it('returns a blank string if apiStatus is "loading"', function() {
      data.server.apiStatus = 'loading';
      assert.equal(getErrorMessage(data), '');
    });
    it('returns a blank string if apiStatus is ""', function() {
      assert.equal(getErrorMessage(data), '');
    });
    it('returns a blank string if apiStatus is "success"', function() {
      data.server.apiStatus = 'success';
      assert.equal(getErrorMessage(data), '');
    });
    it('returns a string if apiStatus is "error"', function() {
      data.server.apiStatus = 'error';
      assert.equal(getErrorMessage(data), 'Sorry, something went wrong');
    });
  });

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
});
