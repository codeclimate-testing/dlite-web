'use strict';
const assert          = require('assert');
const extractVets     = require('../../../../../server/models/parsers/client-to-server-parsers/extract-veterans-info');

describe('extracting veterans info', function() {
  let data;

  beforeEach(function() {
    data = {
      id: '11342',
      history: {
        veteransService: {
          isVeteran: 'Yes',
          veteransIdentifier: '',
          receiveBenefits: '',
          previouslyDesignated: ''
        }
      }
    };
  });

  it('returns null if user is not a veteran', function() {
    data.history.veteransService.isVeteran = '';
    assert.equal(extractVets(data), null);
  });

  it('passes the id to the application_id value', function() {
    assert.equal(extractVets(data).application_id, data.id);
  });

  it('passes true to has_requested_information if receiveBenefits is "Yes"', function() {
    data.history.veteransService.receiveBenefits = 'Yes';
    assert.equal(extractVets(data).has_requested_information, true);
  });

  it('passes true to previously_designated if previouslyDesignated is "Yes"', function() {
    data.history.veteransService.previouslyDesignated = 'Yes';
    assert.equal(extractVets(data).previously_designated, true);
  });

  it('passes "add" to label if veteransIdentifier is "Yes"', function() {
    data.history.veteransService.veteransIdentifier = 'Yes';
    assert.equal(extractVets(data).labeling, 'add');
  });
  it('passes "remove" to label if veteransIdentifier is "No" and previouslyDesignated is "Yes"', function() {
    data.history.veteransService.veteransIdentifier = 'No';
    data.history.veteransService.previouslyDesignated = 'Yes';
    assert.equal(extractVets(data).labeling, 'remove');
  });
  it('passes "null" to label if veteransIdentifier is "No"', function() {
    data.history.veteransService.veteransIdentifier = 'No';
    assert.equal(extractVets(data).labeling, null);
  });
  it('military_waiver is null if militaryWaiver key does not exist', function() {
    assert.equal(extractVets(data).military_waiver, null);
  });
  it('military_waiver is true if militaryWaiver key is "Yes"', function() {
    data.history.veteransService.militaryWaiver = 'Yes';
    assert.equal(extractVets(data).military_waiver, true);
  });

});
