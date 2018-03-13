'use strict';
import {
  nextOrCDLSummary,
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
    next: optOut
  },
  {
    key: 'cdlVoterPreferences',
    description: 'Voter preferences',
    path: '/voting-registration/preferences',
    next: nextOrCDLSummary('cdlChooseBallotLanguage')
  },
  {
    key: 'cdlVoterPreferencesUpdated',
    description: 'Voter preferences updated',
    path: '/voting-registration/preferences-updated',
    next: nextOrCDLSummary('cdlChoosePoliticalParty')
  },
  {
    key: 'cdlChoosePoliticalParty',
    description: 'Choose party',
    path: '/voting-registration/choose-party',
    next: nextOrCDLSummary('cdlChooseBallotLanguage')
  },
  {
    key: 'cdlChooseBallotLanguage',
    description: 'Ballot language',
    path: '/voting-registration/language',
    next: ''
  }
];

export default cdlVoterRegistration;
