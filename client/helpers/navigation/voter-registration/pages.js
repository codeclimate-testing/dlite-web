'use strict';

import {
  citizenship,
  votingEligibility,
  optOut
} from './next-path';

const voterRegistration = [
  {
    key: 'citizenship',
    description: 'Citizenship',
    path: '/voting-registration/citizenship',
    next: citizenship
  },
  {
    key: 'votingEligibility',
    description: 'Eligibility ',
    path: '/voting-registration/eligibility',
    next: votingEligibility
  },
  {
    key: 'votingOptOut',
    description: 'Opt out',
    path: '/voting-registration/opt-out',
    next: optOut
  },
  {
    key: 'voterPreferences',
    description: 'Voter preferences',
    path: '/voting-registration/preferences'
  },
  {
    key: 'voterPreferencesUpdated',
    description: 'Voter preferences updated',
    path: '/voting-registration/preferences-updated'
  },
  {
    key: 'choosePoliticalParty',
    description: 'Choose party',
    path: '/voting-registration/choose-party',
    next: 'chooseBallotLanguage'
  },
  {
    key: 'chooseBallotLanguage',
    description: 'Ballot language',
    path: '/voting-registration/language',
    next: 'ballotByMail'
  },
  {
    key: 'ballotByMail',
    description: 'Ballot by mail',
    path: '/voting-registration/vote-by-mail',
    next: 'contactMethods'
  },
  {
    key: 'contactMethods',
    description: 'Contact methods',
    path: '/voting-registration/contact-methods',
    next: 'voterConfirmation'
  },
  {
    key: 'voterConfirmation',
    description: 'Voter registration confirmation',
    path: '/voting-registration/confirmation'
  },
];

export default voterRegistration;
