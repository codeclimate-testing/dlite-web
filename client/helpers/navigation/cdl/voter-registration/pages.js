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
    path: applyOrEditCDLPath('/voting-registration/preferences'),
    next: nextOrCDLSummary('cdlChooseBallotLanguage')
  },
  {
    key: 'cdlVoterPreferencesUpdated',
    description: 'Voter preferences updated',
    path: applyOrEditCDLPath('/voting-registration/preferences-updated'),
    next: nextOrCDLSummary('cdlChoosePoliticalParty')
  },
  {
    key: 'cdlChoosePoliticalParty',
    description: 'Choose party',
    path: applyOrEditCDLPath('/voting-registration/choose-party'),
    next: nextOrCDLSummary('cdlChooseBallotLanguage')
  },
  {
    key: 'cdlChooseBallotLanguage',
    description: 'Ballot language',
    path: applyOrEditCDLPath('/voting-registration/language'),
    next: nextOrCDLSummary('cdlBallotByMail')
  },
  {
    key: 'cdlBallotByMail',
    description: 'Ballot by mail',
    path: applyOrEditCDLPath('/voting-registration/vote-by-mail'),
    next: nextOrCDLSummary('cdlContactMethods')
  },
  {
    key: 'cdlContactMethods',
    description: 'Contact methods',
    path: applyOrEditCDLPath('/voting-registration/contact-methods'),
    next: nextOrCDLSummary('cdlConfirmation')
  },
  {
    key: 'cdlConfirmation',
    description: 'Voter registration confirmation',
    path: '/voting-registration/confirmation',
    next: 'cdlSummary'
  },
];

export default cdlVoterRegistration;
