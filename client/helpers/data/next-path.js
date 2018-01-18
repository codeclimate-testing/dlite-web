'use strict';

import { getDL } from './card-type';
import { eligibleForSeniorID } from './senior';
import {
  tooYoungForDL,
  under16GuardianSignature
} from './youth';
import { 
  hasExistingCard,
  isChangingCard,
  isReplacingCard
 } from './card-actions';
import { eligibleForReducedFee } from './reduced-fee';
import {
  eligibleForCitizen,
  eligibleForRequirements,
  eligibleForOptOut,
  eligibleForOptOutExist
} from '../../helpers/data/voting';

export const chooseCardType = (props) => {
  let key = 'realID';

  if (tooYoungForDL(props)) {
    key = 'youthIDInstead';
  } else if (hasExistingCard(props) || isChangingCard(props) || isReplacingCard(props)) {
    key = 'currentCardInfo';
  } else if (eligibleForSeniorID(props)) {
    key = 'seniorID';
  }
  return key;
};

export const currentCardInfo = (props) => {
  let key = 'realID';
  if (isChangingCard(props)) {
    key = 'chooseCardChanges'
  } else if (isReplacingCard(props)) {
    key = 'chooseCardReplacement'
  } else if (eligibleForSeniorID(props)) {
    key = 'seniorID';
  } 
  return key;
};

export const chooseCardChanges = (props) => {
  let key = 'realID';
  if (eligibleForSeniorID(props)) {
    key = 'seniorID';
  }
  return key;
};

export const chooseCardReplacement = (props) => {
  let key = 'realID';
  if (eligibleForSeniorID(props)) {
    key = 'seniorID';
  }
  return key;
};

export const realID = (props) => {
  let key = 'getStarted';

  if (getDL(props)) {
    key = 'chooseLicenseClass';
  } else if (eligibleForReducedFee(props)) {
    key = 'reducedFeeID';
  };

  return key;
};

export const chooseLicenseClass = (props) => {
  let key = 'getStarted';

  if (eligibleForReducedFee(props)) {
    key = 'reducedFeeID';
  };

  return key;
};

export const socialSecurity = (props) => {
  let key = 'licenseHistory';

  if (getDL(props)) {
    key = 'medicalHistory';
  }
  return key;
};

export const organDonationPath = (props) => {
  let key = 'voterIntro';

  if (under16GuardianSignature(props)) {
    key = 'guardianSignature';
  }
  return key;
};
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
  if (eligibileForRequirements(props)) {
    key = 'optOut';
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
