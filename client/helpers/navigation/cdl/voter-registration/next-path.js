'use strict';

import {
  eligibleForCitizen,
  eligibilityRequirementsYes,
} from '../../../data/voting';

export const citizenship = (props) => {
  let key = 'summary';
  if (eligibleForCitizen(props)) {
    key = 'cdlVotingEligibility';
  } 
  return key;
};

export const votingEligibility = (props) => {
  let key = 'summary';
  if (eligibilityRequirementsYes(props)) {
    key = 'cdlVotingOptOut';
  }
  return key;
};
