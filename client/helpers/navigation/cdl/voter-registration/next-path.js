'use strict';

import {
  eligibleForCitizen,
  eligibilityRequirementsYes,
  eligibleForOptOut,
  eligibleForOptOutExist
} from '../../../data/voting';

export const citizenship = (props) => {
  let key = 'cdlSummary';
  if (eligibleForCitizen(props)) {
    key = 'cdlVotingEligibility';
  }
  return key;
};

export const votingEligibility = (props) => {
  let key = 'cdlSummary';
  if (eligibilityRequirementsYes(props)) {
    key = 'cdlVotingOptOut';
  }
  return key;
};

export const optOut = (props) => {
  let key = 'summary';
  if (eligibleForOptOut(props)) {
    key = 'cdlVoterPreferences';
  } else if (eligibleForOptOutExist(props)) {
    key = 'cdlVoterPreferencesUpdated'
  }
  return key;
};
