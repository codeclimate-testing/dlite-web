'use strict';

const assert = require('assert');

import {
  citizenship,
  votingEligibility,
  optOut
} from '../../../../../client/helpers/navigation/id-dl/voter-registration/next-path';

const today = new Date();


describe('Data helpers for determining next path from current page and props in voter-registration section', function() {
  let data;
  const isPrereg = (today.getFullYear() - 17).toString();
  beforeEach(function() {
    data = {
      optOut: '',
      citizenStatus: '',
      DLApp: {
        isApplying: true
      },
      eligibilityRequirements: '',
      dateOfBirth: {
        year: (today.getFullYear() - 40).toString(),
        month: (today.getMonth()).toString(),
        day: today.getDate().toString()
      },
      flow: ''
    };
  });


  describe('#voterRegistration', function() {
    describe('##citizenship', function() {
      it('returns "summary" if user is not eligible for citizenship and is not preregistering', function() {
        assert.equal(citizenship(data), 'summary');
      });
      it('returns "votingEligibility" if user is eligible for citizenship and is not preregistering', function() {
        data.citizenStatus = 'Yes';
        assert.equal(citizenship(data), 'votingEligibility');
      });
      it('returns "votingEligibility" if user is eligible for citizenship and is preregistering', function() {
        data.citizenStatus = 'Yes';
        data.dateOfBirth.year = isPrereg;
        assert.equal(citizenship(data), 'votingEligibility');
      });
      it('returns "guardianSignature" if user is not eligible for citizenship and is preregistering', function() {
        data.dateOfBirth.year = isPrereg;
        assert.equal(citizenship(data), 'guardianSignature');
      });
      it('returns "summary" if user is not eligible for citizenship and is preregistering for an ID', function() {
        data.dateOfBirth.year = isPrereg;
        data.DLApp.isApplying = false;
        assert.equal(citizenship(data), 'summary');
      });
    });

    describe('##votingEligibility', function() {
      it('returns "summary" if user is not eligible for voting and is not preregistering', function() {
        assert.equal(votingEligibility(data), 'summary');
      });
      it('returns "votingOptOut" if user is eligible for voting and is not preregistering', function() {
        data.eligibilityRequirements = 'Yes';
        assert.equal(votingEligibility(data), 'votingOptOut');
      });
      it('returns "votingOptOut" if user is eligible for voting and is preregistering', function() {
        data.eligibilityRequirements = 'Yes';
        data.dateOfBirth.year = isPrereg;
        assert.equal(votingEligibility(data), 'votingOptOut');
      });
      it('returns "guardianSignature" if user is not eligible for voting and is preregistering', function() {
        data.dateOfBirth.year = isPrereg;
        assert.equal(votingEligibility(data), 'guardianSignature');
      });
      it('returns "summary" if user is not eligible for voting and is preregistering for an ID', function() {
        data.dateOfBirth.year = isPrereg;
        data.DLApp.isApplying = false;
        assert.equal(votingEligibility(data), 'summary');
      });
    });

    describe('##optOut', function() {
      it('returns "summary" if user is opting out and is not preregistering', function() {
        assert.equal(optOut(data), 'summary');
      });
      it('returns "voterPreferences" if user is a new voter and is not preregistering', function() {
        data.optOut = 'new';
        assert.equal(optOut(data), 'voterPreferences');
      });
      it('returns "voterPreferencesUpdated" if user is an existing voter and is not preregistering', function() {
        data.optOut = 'existing';
        assert.equal(optOut(data), 'voterPreferencesUpdated');
      });
      it('returns "guardianSignature" if user is preregistering and getting a DL', function() {
        data.dateOfBirth.year = isPrereg;
        assert.equal(optOut(data), 'guardianSignature');
      });
      it('returns "summary" if user is preregistering and not getting a DL', function() {
        data.dateOfBirth.year = isPrereg;
        data.DLApp.isApplying = false;
        assert.equal(optOut(data), 'summary');
      });
    });
  });

});

