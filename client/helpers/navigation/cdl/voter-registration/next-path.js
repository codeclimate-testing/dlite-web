'use strict';

import {
  eligibleForCitizen,
  eligibilityRequirementsYes,
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
