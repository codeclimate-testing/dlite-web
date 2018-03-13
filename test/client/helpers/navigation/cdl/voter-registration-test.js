'use strict';

const assert = require('assert');

import {
  citizenship,
  votingEligibility,
  optOut
} from '../../../../../client/helpers/navigation/cdl/voter-registration/next-path';


describe('Data helpers for determining next path from current page and props in voter-registration section', function() {
  let data;
  beforeEach(function() {
    data = {
      optOut: '',
      citizenStatus: '',
      eligibilityRequirements: '',
    };
  });


  describe('#voterRegistration', function() {
    describe('##citizenship', function() {
      it('returns "cdlSummary" if user is not eligible for citizenship and is not preregistering', function() {
        assert.equal(citizenship(data), 'cdlSummary');
      });

      it('returns "votingEligibility" if user is eligible for citizenship and is not preregistering', function() {
        data.citizenStatus = 'Yes';
        assert.equal(citizenship(data), 'cdlVotingEligibility');
      });

      it('returns "votingEligibility" if user is eligible for citizenship and is preregistering', function() {
        data.citizenStatus = 'Yes';
        assert.equal(citizenship(data), 'cdlVotingEligibility');
      });
    });

    describe('##votingEligibility', function() {
      it('returns "cdlSummary" if user is not eligible for voting and is not preregistering', function() {
        assert.equal(votingEligibility(data), 'cdlSummary');
      });

      it('returns "votingOptOut" if user is eligible for voting and is not preregistering', function() {
        data.eligibilityRequirements = 'Yes';
        assert.equal(votingEligibility(data), 'cdlVotingOptOut');
      });

      it('returns "votingOptOut" if user is eligible for voting and is preregistering', function() {
        data.eligibilityRequirements = 'Yes';
        assert.equal(votingEligibility(data), 'cdlVotingOptOut');
      });
    });

    describe('##optOut', function() {
      it('returns "summary" if user does not want to register or update', function() {
        data.optOut = 'optOut';
        assert.equal(optOut(data), 'summary');
      });

      it('returns "cdlVoterPreferences" if user wants to register to vote', function() {
        data.optOut = 'new';
        assert.equal(optOut(data), 'cdlVoterPreferences');
      });

      it('returns "cdlVoterPreferencesUpdated" if user wants to register and update voter info', function() {
        data.optOut = 'existing';
        assert.equal(optOut(data), 'cdlVoterPreferencesUpdated');
      });
    });
  });
});

