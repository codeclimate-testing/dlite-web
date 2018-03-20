'use strict';

const assert              = require('assert');
const getHistory          = require('../../../../../server/models/parsers/server-to-client-parsers/get-license-and-id-history');

describe('extracting license and ID history', function() {
  let card_histories, DLApp, IDApp;
  beforeEach(function() {
    card_histories = [{
      issuing_entity: '',
      number: '',
      is_issued: '',
      date_description: '//'
    }];
    DLApp = {
      action: 'new'
    };
    IDApp = {
      action: 'new'
    }
  });

  it('returns isIssued "No" if issuing_entity is "licenseAndIdHistory not issued', function() {
    card_histories[0].issuing_entity = 'licenseAndIdHistory not issued';
    assert.equal(getHistory(card_histories, DLApp, IDApp).isIssued, 'No');
  });
});
