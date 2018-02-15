'use strict';

import {
  eligibleForCitizen,
  eligibilityRequirementsYes,
  eligibleForOptOut,
  eligibleForOptOutExist
} from '../../data/voting';

import { isPreregistering } from '../../calculate-age';

export const citizenship = (props) => {
  let key = 'summary';
  if (eligibleForCitizen(props)) {
    key = 'votingEligibility';
  } else if (isPreregistering(props.dateOfBirth)){
    key = 'guardianSignature';
  }
  return key;
};

export const votingEligibility = (props) => {
  let key = 'summary';
  if (eligibilityRequirementsYes(props)) {
    key = 'votingOptOut';
  } else if (isPreregistering(props.dateOfBirth)){
    key = 'guardianSignature';
  }
  return key;
};

export const optOut = (props) => {
  let key = 'summary';
  if (eligibleForOptOut(props)) {
    key = 'voterPreferences';
  } else if (eligibleForOptOutExist(props)) {
    key = 'voterPreferencesUpdated'
  } else if (isPreregistering(props.dateOfBirth)) {
    key = 'guardianSignature';
  }
  return key;
};