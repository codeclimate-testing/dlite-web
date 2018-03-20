'use strict';

const assert              = require('assert');
const getCDLHistories     = require('../../../../../server/models/parsers/client-to-server-parsers/cdl-histories');

describe('extracting card info: get CDL current card info and previous DL', function() {
  let data;
  beforeEach(function() {
    data = {
      currentCardInfo: {
        number: '',
        day: '',
        month: '',
        year: ''
      },
      cardAction: '',
      history: {
        currentDLInfo: {
          number: '',
          day: '',
          month: '',
          year: '',
          isIssued: '',
          issuedBy: ''
        }
      }
    };
  });

  it('returns currentDLInfo when user is getting a new CDL', function() {
    data.cardAction = 'new';
    data.history.currentDLInfo.isIssued = 'No';
    assert.equal(getCDLHistories(data)[0].issuing_entity, 'licenseAndIdHistory not issued');
  });

  it('returns currentCardInfo when user is renewing, replacing, or changing a CDL', function() {
    data.cardAction = 'renew';
    data.currentCardInfo.number = '88888';
    assert.equal(getCDLHistories(data)[0].number, data.currentCardInfo.number);
  });
});
