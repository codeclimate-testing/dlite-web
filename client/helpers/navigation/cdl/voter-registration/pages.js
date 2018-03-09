'use strict';

import {
  citizenship,
  votingEligibility,
  optOut
} from './next-path';

const cdlVoterRegistration = [
  {
    key: 'cdlCitizenship',
    description: 'Citizenship',
    path: '/voting-registration/citizenship',
    next: citizenship
  },
  {
    key: 'cdlVotingEligibility',
    description: 'Eligibility ',
    path: '/voting-registration/eligibility',
    next: votingEligibility
  },
  {
    key: 'cdlVotingOptOut',
    description: 'Opt out',
    path: '/voting-registration/opt-out',
    next: ''
  }
];

export default cdlVoterRegistration;
