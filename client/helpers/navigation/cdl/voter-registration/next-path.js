'use strict';

import {
  eligibleForCitizen,
  eligibilityRequirementsYes,
  eligibleForOptOut,
  eligibleForOptOutExist
} from '../../../data/voting';
import { editFlow }   from '../../../data/pathnames';

export const citizenship = (props) => {
  let key = 'cdlSummary';
  if (!editFlow(props) && eligibleForCitizen(props)) {
    key = 'cdlVotingEligibility';
  }
  return key;
};

export const votingEligibility = (props) => {
  let key = 'cdlSummary';
  if (!editFlow(props) && eligibilityRequirementsYes(props)) {
    key = 'cdlVotingOptOut';
  }
  return key;
};

export const optOut = (props) => {
  let key = 'cdlSummary';
  if(!editFlow(props)) {
    if (eligibleForOptOut(props)) {
      key = 'cdlVoterPreferences';
    } else if (eligibleForOptOutExist(props)) {
      key = 'cdlVoterPreferencesUpdated'
    }
  }
  return key;
};
