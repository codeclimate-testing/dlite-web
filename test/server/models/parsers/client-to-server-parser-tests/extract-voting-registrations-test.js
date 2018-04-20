'use strict';
const assert          = require('assert');
const extractVoting   = require('../../../../../server/models/parsers/client-to-server-parsers/extract-voting-registrations');

describe('extracting voting registration', function() {
  let data;

  beforeEach(function() {
    data = {
      id: '11342',
      voting: {
        ballotLanguage: '',
        citizenStatus: 'Yes',
        eligibilityRequirements: 'decline',
        optOut: '',
        politicalPartyChoose: '',
        contactMethods: {
          shouldContact: ''
        }
      }
    };
  });


  it('returns an object with is_citizen and is_eligible equal to null if user has not answered opted_out question', function() {
    let table = extractVoting(data);
    assert.equal(table.application_id, data.id);
    assert.equal(table.is_citizen, 'Yes');
    assert.equal(table.is_eligible, 'decline');
    assert.equal(table.opted_out, '');
  });

});
