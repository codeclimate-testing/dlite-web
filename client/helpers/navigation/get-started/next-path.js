'use strict';
import { getDL }                  from '../../data/card-type';
import { eligibleForSeniorID }    from '../../data/senior';
import { tooYoungForDL }          from '../../data/youth';
import { eligibleForReducedFee }  from '../../data/reduced-fee';
import {
  hasExistingCard,
  isChangingCard,
  isReplacingCard
 } from '../../data/card-actions';


export const chooseCardType = (props) => {
  let key = 'realID';

  if (tooYoungForDL(props)) {
    key = 'youthIDInstead';
  } else if (hasExistingCard(props)) {
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