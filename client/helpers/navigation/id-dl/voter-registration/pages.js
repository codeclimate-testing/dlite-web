'use strict';
import {
  nextOrSummary,
  applyEditOrAddPath
} from '../../../data/pathnames';

import {
  citizenship,
  votingEligibility,
  optOut
} from './next-path';

const voterRegistration = [
  {
    key: 'citizenship',
    description: 'Citizenship',
    path: applyEditOrAddPath('/voting-registration/citizenship'),
    next: citizenship
  },
  {
    key: 'votingEligibility',
    description: 'Eligibility ',
    path: applyEditOrAddPath('/voting-registration/eligibility'),
    next: votingEligibility
  },
  {
    key: 'votingOptOut',
    description: 'Opt out',
    path: applyEditOrAddPath('/voting-registration/opt-out'),
    next: optOut
  },
  {
    key: 'voterPreferences',
    description: 'Voter preferences',
    path: applyEditOrAddPath('/voting-registration/preferences'),
    next: nextOrSummary('choosePoliticalParty')
  },
  {
    key: 'voterPreferencesUpdated',
    description: 'Voter preferences updated',
    path: applyEditOrAddPath('/voting-registration/preferences-updated'),
    next: nextOrSummary('choosePoliticalParty')
  },
  {
    key: 'choosePoliticalParty',
    description: 'Choose party',
    path: applyEditOrAddPath('/voting-registration/choose-party'),
    next: nextOrSummary('chooseBallotLanguage')
  },
  {
    key: 'chooseBallotLanguage',
    description: 'Ballot language',
    path: applyEditOrAddPath('/voting-registration/language'),
    next: nextOrSummary('ballotByMail')
  },
  {
    key: 'ballotByMail',
    description: 'Ballot by mail',
    path: applyEditOrAddPath('/voting-registration/vote-by-mail'),
    next: nextOrSummary('contactMethods')
  },
  {
    key: 'contactMethods',
    description: 'Contact methods',
    path: applyEditOrAddPath('/voting-registration/contact-methods'),
    next: nextOrSummary('voterConfirmation')
  },
  {
    key: 'voterConfirmation',
    description: 'Voter registration confirmation',
    path: applyEditOrAddPath('/voting-registration/confirmation'),
    next: 'summary'
  }
];

export default voterRegistration;
