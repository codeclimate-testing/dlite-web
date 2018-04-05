'use strict';

const assert              = require('assert');
const getDLInfo           = require('../../../../../server/models/parsers/server-to-client-parsers/get-dl-info');

describe('extracting DL info for CDL app', function() {

  let card_histories, action;

  beforeEach(function() {
    card_histories = [{
      number: '',
      issuedBy: '',
      month: '',
      day: '',
      year: '',
      isIssued: 'No'
    }];
    action = '';
  });

  it('returns placeholder if card_histories is empty array', function() {
    assert.deepEqual(getDLInfo([], 'new'), card_histories[0]);
  });

  it('returns placeholder if action is not new', function() {
    assert.deepEqual(getDLInfo(card_histories, 'renew'), card_histories[0]);
  });

});
