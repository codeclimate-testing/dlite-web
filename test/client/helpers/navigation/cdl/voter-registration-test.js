'use strict';

const assert = require('assert');

import {
  citizenship,
  votingEligibility,
  optOut
} from '../../../../../client/helpers/navigation/cdl/voter-registration/next-path';

const today = new Date();
const isPrereg = (today.getFullYear() - 17).toString();

describe('Data helpers for determining next path from current page and props in voter-registration section', function() {
  let data;
  beforeEach(function() {
    data = {
      optOut: '',
      citizenStatus: '',
      eligibilityRequirements: '',
      dateOfBirth: {
        year: (today.getFullYear() - 40).toString(),
        month: (today.getMonth()).toString(),
        day: today.getDate().toString()
      }
    };
  });


  describe('#voterRegistration', function() {
    describe('##citizenship', function() {
      it('returns "summary" if user is not eligible for citizenship and is not preregistering', function() {
        assert.equal(citizenship(data), 'summary');
      });

      it('returns "votingEligibility" if user is eligible for citizenship and is not preregistering', function() {
        data.citizenStatus = 'Yes';
        assert.equal(citizenship(data), 'cdlVotingEligibility');
      });

      it('returns "votingEligibility" if user is eligible for citizenship and is preregistering', function() {
        data.citizenStatus = 'Yes';
        data.dateOfBirth.year = isPrereg;
        assert.equal(citizenship(data), 'cdlVotingEligibility');
      });
    });

    describe('##votingEligibility', function() {
      it('returns "summary" if user is not eligible for voting and is not preregistering', function() {
        assert.equal(votingEligibility(data), 'summary');
      });

      it('returns "votingOptOut" if user is eligible for voting and is not preregistering', function() {
        data.eligibilityRequirements = 'Yes';
        assert.equal(votingEligibility(data), 'cdlVotingOptOut');
      });

      it('returns "votingOptOut" if user is eligible for voting and is preregistering', function() {
        data.eligibilityRequirements = 'Yes';
        data.dateOfBirth.year = isPrereg;
        assert.equal(votingEligibility(data), 'cdlVotingOptOut');
      });
    });
  });
});

