'use strict';

import {
  eligibleForCitizen,
  eligibilityRequirementsYes,
  eligibleForOptOut,
  eligibleForOptOutExist
} from '../../../data/voting';

import { requireGuardianSignatureUnder18 } from '../../../data/youth';


export const citizenship = (props) => {
  let key = 'summary';
  if (eligibleForCitizen(props)) {
    key = 'votingEligibility';
  } else if (requireGuardianSignatureUnder18(props)){
    key = 'guardianSignature';
  }
  return key;
};

export const votingEligibility = (props) => {
  let key = 'summary';
  if (eligibilityRequirementsYes(props)) {
    key = 'votingOptOut';
  } else if (requireGuardianSignatureUnder18(props)){
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
  } else if (requireGuardianSignatureUnder18(props)) {
    key = 'guardianSignature';
  }
  return key;
};