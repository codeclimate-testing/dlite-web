'use strict';

import {
  getDL,
  getNewDL,
  getNewID
} from './card-type';
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
  eligibileForRequirements,
  eligibleForOptOut,
  eligibleForOptOutExist
} from '../../helpers/data/voting';
import {
  isPreregistering,
  ageChecks
} from '../../helpers/calculate-age';

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
    key = 'updateAndCorrect'
  } else if (isReplacingCard(props)) {
    key = 'replacementDetails'
  } else if (eligibleForSeniorID(props)) {
    key = 'seniorID';
  }
  return key;
};

export const updateAndCorrect = (props) => {
  let key = 'realID';
  if (eligibleForSeniorID(props)) {
    key = 'seniorID';
  }
  return key;
};

export const replacementDetails = (props) => {
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
  let key = 'nameHistory';

  if (getDL(props)) {
    key = 'medicalHistory';
  } else if (getNewID(props)) {
    key = 'cardHistory';
  }
  return key;
};

export const medicalHistory = (props) => {
  let key = 'nameHistory';

  if (getNewDL(props)) {
    key = 'cardHistory';
  }
  return key;
};

export const nameHistory = (props) => {
  let key = 'veterans';
  if (getNewDL(props)) {
    key = 'licenseIssues';
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