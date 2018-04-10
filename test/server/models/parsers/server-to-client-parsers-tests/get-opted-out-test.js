'use strict';

const assert          = require('assert');
const getOptedOut     = require('../../../../../server/models/parsers/server-to-client-parsers/get-opted-out');

describe('extracting opted out', function() {

  let voting_registrations;

  beforeEach(function() {
    voting_registrations = {
      opted_out: '',
      type: ''
    };
  });

  it('returns placeholder if voting_registrations is null', function() {
    voting_registrations = null;
    assert.deepEqual(getOptedOut(voting_registrations), '');
  });

});
