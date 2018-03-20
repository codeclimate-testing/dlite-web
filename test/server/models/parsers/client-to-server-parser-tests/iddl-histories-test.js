'use strict';

const assert              = require('assert');
const getIDDLHistories    = require('../../../../../server/models/parsers/client-to-server-parsers/iddl-histories');

let data;

describe('extracting card info: get IDDL histories and current card info', function() {
  beforeEach(function() {
    let currentCard = {
      number: '',
      day: '',
      year: '',
      month: ''
    };

    data = {
      DLApp: {
        isApplying: false,
        action: '',
        currentCard
      },
      IDApp: {
        isApplying: false,
        action: '',
        currentCard
      },
      history: {
        licenseAndIdHistory: {
          isIssued: '',
          issuedBy: '',
          DLIDNumber: '',
          month: '',
          year: '',
          day: ''
        }
      }
    };
  });

  it('returns licenseAndIdHistory when user is getting a new DL', function() {
    data.DLApp.isApplying = true;
    data.DLApp.action = 'new';
    data.history.licenseAndIdHistory.isIssued = 'No';
    assert.equal(getIDDLHistories(data)[0].issuing_entity, 'licenseAndIdHistory not issued');
  });

  it('returns licenseAndIdHistory when user is getting a new ID', function() {
    data.IDApp.isApplying = true;
    data.IDApp.action = 'new';
    data.history.licenseAndIdHistory.isIssued = 'Yes';
    data.history.licenseAndIdHistory.DLIDNumber = '010101';
    assert.equal(getIDDLHistories(data)[0].number, data.history.licenseAndIdHistory.DLIDNumber);
  });

  it('returns DLApp.currentCard when user is renewing, replacing, or changing a DL', function() {
    data.DLApp.isApplying = true;
    data.DLApp.action = 'replace';
    data.DLApp.currentCard.number = '88888';
    assert.equal(getIDDLHistories(data)[0].number, data.DLApp.currentCard.number);
  });

  it('returns IDApp.currentCard when user is renewing, replacing, or changing an ID', function() {
    data.IDApp.isApplying = true;
    data.IDApp.action = 'replace';
    data.IDApp.currentCard.number = '88888';
    assert.equal(getIDDLHistories(data)[0].number, data.IDApp.currentCard.number);
  });
});
