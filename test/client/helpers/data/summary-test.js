'use strict';

const assert = require('assert');

import {
  IDChanging,
  DLChanging,
  IDReplacing,
  DLReplacing,
  IDGettingNew,
  DLGettingNew,
  IDRenewing,
  DLRenewing,
  summaryHasID,
  summaryHasDL,
  hideMain,
  getErrorMessage,
  getStringByStatus,
  getStringByEndorsements
} from '../../../../client/helpers/data/summary';

describe('#summary status helpers', function() {
  let data;
  beforeEach(function() {
    data = {
      cardType: {
        ID: {
          action: ''
        },
        DL: {
          action: ''
        }
      }
    }
  });
  describe('#changing an ID', function() {
    it('is true when ID action is change', function() {
      data.cardType.ID.action = 'change';
      assert.equal(IDChanging(data), true);
    });
    it('is false when DL action is change but ID is blank', function() {
      data.cardType.DL.action = 'change';
      assert.equal(IDChanging(data), false);
    });
    it('is false when neither action is change', function() {
      data.cardType.ID.action = 'renew';
      assert.equal(IDChanging(data), false);
    });
  });

  describe('#Replacing an ID', function() {
    it('is true when ID action is replace', function() {
      data.cardType.ID.action = 'replace';
      assert.equal(IDReplacing(data), true);
    });
    it('is false when DL action is replace and ID is blank', function() {
      data.cardType.DL.action = 'replace';
      assert.equal(IDReplacing(data), false);
    });
    it('is false when neither action is replace', function() {
      data.cardType.DL.action = 'new';
      data.cardType.ID.action = 'renew';
      assert.equal(IDReplacing(data), false);
    });
  });

  describe('#IDRenewing', function() {
    it('is true when ID action is renew and DL action is not renew', function() {
      data.cardType.ID.action = 'renew';
      data.cardType.DL.action = 'new';
      assert.equal(IDRenewing(data), true);
    });
    it('is false when ID action is not renew', function() {
      data.cardType.ID.action = 'new';
      data.cardType.DL.action = 'renew';
      assert.equal(IDRenewing(data), false);
    });
    it('is false when neither action is renew', function() {
      assert.equal(IDRenewing(data), false);
    });
  });

  describe('#IDGettingNew', function() {
    it('is true when ID action is new and DL action is not new', function() {
      data.cardType.ID.action = 'new';
      assert.equal(IDGettingNew(data), true);
    });
    it('is false when ID action is not new', function() {
      data.cardType.ID.action = 'replace';
      data.cardType.DL.action = 'new';
      assert.equal(IDGettingNew(data), false);
    });
    it('is false when neither action is new', function() {
      assert.equal(IDGettingNew(data), false);
    });
  });

  describe('#summaryHasID', function() {
    it('is true if value is "renew"', function() {
      data.cardType.ID.action = 'renew';
      assert.equal(summaryHasID(data), true);
    });
    it('is false if value is blank', function() {
      assert.equal(summaryHasID(data), false);
    });
  });
  describe('#hideMain', function() {
    beforeEach(function() {
      data = {
        server: {
          apiStatus: ''
        }
      };
    });
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
    beforeEach(function() {
      data = {
        server: {
          apiStatus: ''
        }
      };
    });
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

  describe('#getStringByEndorsements', function() {
    const yesString = 'Yes';
    const noString = 'No';
    let props;

    beforeEach(function() {
      props ={
        licenseType: {
          needEndorsement: '',
          endorsement: [],
          type: []
        }
      }
    });

    it('returns the 2nd argument if array includes "firefighter"', function() {
      props.licenseType.endorsement =['firefighter'];
      props.licenseType.needEndorsement = 'Yes';
      assert.equal(getStringByEndorsements(props, yesString, noString), yesString);
    });
    it('returns the 3rd argument if array does not include "firefighter"', function() {
      props.licenseType.endorsement =['athlete'];
      props.licenseType.needEndorsement = 'Yes';
      assert.equal(getStringByEndorsements(props, yesString, noString), noString);
    });
  });
});
