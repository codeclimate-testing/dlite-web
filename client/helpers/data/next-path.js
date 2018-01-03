'use strict';

import { getDL } from './card-type';
import { tooYoungForDL } from './youth';
import { eligibleForSeniorID } from './senior';
import { hasExistingCard } from './card-actions';
import { eligibleForReducedFee } from './reduced-fee';

export const chooseCardType = (props) => {
  let key = 'realID';

  if (tooYoungForDL(props)) {
    key = 'youthDlMessage';
  } else if (hasExistingCard(props)) {
    key = 'currentCardInfo';
  } else if (eligibleForSeniorID(props)) {
    key = 'seniorID';
  }
  return key;
};

export const currentCardInfo = (props) => {
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

