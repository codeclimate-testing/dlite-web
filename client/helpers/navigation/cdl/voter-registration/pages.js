'use strict';
import {
  applyOrEditCDLPath
} from '../../../data/pathnames';
import {
  citizenship,
  votingEligibility,
  optOut
} from './next-path';

const cdlVoterRegistration = [
  {
    key: 'cdlCitizenship',
    description: 'Citizenship',
    path: applyOrEditCDLPath('/voting-registration/citizenship'),
    next: citizenship
  },
  {
    key: 'cdlVotingEligibility',
    description: 'Eligibility ',
    path: applyOrEditCDLPath('/voting-registration/eligibility'),
    next: votingEligibility
  },
  {
    key: 'cdlVotingOptOut',
    description: 'Opt out',
    path: applyOrEditCDLPath('/voting-registration/opt-out'),
    next: ''
  }
];

export default cdlVoterRegistration;
